<template>
  <v-app>
    <v-main>
      <Navigation v-if="current_url != '/Login'" />
      <router-view></router-view>
      <!-- <Main_data/> -->
      <Footer v-if="current_url != '/Login'"/>
    </v-main>
  </v-app>
</template>

<script>
import Navigation from './components/Navigation';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    Navigation,
    Footer,
  },
  data: () => ({
    current_url: ''
  }),
  mounted(){
    this.current_url =  this.$route.path
  }
};
</script>
