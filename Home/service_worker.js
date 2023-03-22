const sCacheName = 'hello-pwa'; // 캐시제목 선언
const aFilesToCache = [ // 캐시할 파일 선언
  './',
  './index.html',
  './manifest.json',
  './images/hello-pwa.png'
];

// 서비스워커를 설치하고 캐시를 저장함
self.addEventListener('install', pEvent => {
    console.log('서비스워커 설치함!');
    pEvent.waitUntil(
      caches.open(sCacheName)
      .then(pCache => {
        console.log('파일을 캐시에 저장함!');
        return pCache.addAll(aFilesToCache);
      })
    );
});

// 고유번호 할당받은 서비스 워커 동작 시작
self.addEventListener('activate', pEvent => {
    console.log('서비스워커 동작 시작됨!');
});
  
// 4.데이터 요청시 네트워크 또는 캐시에서 찾아 반환 
self.addEventListener('fetch', pEvent => {
    pEvent.respondWith(
      caches.match(pEvent.request)   // 캐시 저장소에서 검색 
      .then(response => {
        if (!response) {   // 캐시를 발견하지 못하면 
          console.log("네트워크에서 데이터 요청!", pEvent.request)
          return fetch(pEvent.request);   
        }
        console.log("캐시에서 데이터 요청!", pEvent.request)
        return response;
      }).catch(err => console.log(err))
    );
});