<template>
  <v-app id="app">
    <v-content>
        <router-view />
    </v-content>
  </v-app>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'App',
  data(){
    return {
      
    }
  },
  computed:{
    ...mapState(['SettingModule'])
  },
  mounted(){
  },
  methods:{
    
  }
};
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons');
  @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

  #app {
    /* font-family: 'Roboto'; */
    font-family: 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-style: normal;
    font-weight: normal;
    text-align: center;
    /*color: #2c3e50;*/
  }
  
</style>
