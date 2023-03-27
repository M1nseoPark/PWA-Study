<template>
  <v-app>
    <v-content>
      <!-- full-height는 브라우저 높이를 100%, 수직으로 가운데 정렬시킴  -->
      <v-container fluid fill-height>
        <v-row>
          <!-- text-center는 수평 가운데 정렬  -->
          <v-col cols="12" class="text-center">
            <h1 class="title white--text">반가워요!</h1>
            <p class="caption">by VueJS</p>
            <img src="./assets/hello-pwa.png" alt=""/>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  created() {
    this.$vuetify.theme.dark = true;
  }
};
</script>
