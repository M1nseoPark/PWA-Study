import Vue from 'vue'
import Router from 'vue-router'

import main_page from './main_page.vue';
import sub_page from './sub_page.vue';

// Router 모듈을 Vue.use()의 매개변수로 전달하면 Vue 객체에서 사용할 수 있음 
Vue.use(Router)

export default new Router({
    mode: 'history',   // 해시 기호를 URL 주소에서 제거함
    base: process.env.BASE_URL,   // 루트 URL의 환경변수 값 
    routes: [
        { path: '/main', component: main_page },
        { path: '/sub', component: sub_page }
    ]
})