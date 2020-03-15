<template>
  <div id="home">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>

    <v-bottom-navigation
      style="border-radius:5vh 5vh 0 0"
      active.sync="recent"
      fixed
      app
      grow
      background-color="#FFD838"
      height="48px"
    >
      <v-btn text @click="$router.push('dashboard')">
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn text @click="$router.push('post')">
        <v-icon>message</v-icon>
      </v-btn>

      <v-btn text>
        <v-icon>search</v-icon>
      </v-btn>

      <v-btn text @click="$router.push('notif')">
        <v-icon>notifications_active</v-icon>
      </v-btn>

      <v-btn text @click="$router.push('profile')">
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data(){
    return {
      fab: false
    }
  }
  
}
</script>

<style type="text/css">
  #home{
    /* color: */
    height: 100%;
  }
</style>