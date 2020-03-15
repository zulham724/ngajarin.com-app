<template>
  <div id="dashboard">
    <v-app-bar
      :src="SettingModule.assets.bgDashboard"
      color="transparent"
      prominent
      style="border-radius:0px 0px 10vh 10vh"
    >

      <v-app-bar-nav-icon>
        <v-icon>mdi-home</v-icon>
      </v-app-bar-nav-icon>

      <v-toolbar-title>Dashboard</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-container>
      <v-row style="margin-left:15vw">
        <v-col cols="12" v-for="n in 5">
          <v-card ripple>
            <v-img style="filter:brightness(70%)" height="20vh" src="https://image.freepik.com/free-vector/man-woman-presenting-their-project-business_3446-694.jpg"></v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data() {
    return {
      
    };
  },
  computed: {
    ...mapState(['SettingModule'])
  },
  mounted(){
    
  },
  methods: {
    
  },
};
</script>

<style scoped>
#dashboard {
  /* background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)
    ),
    url("./../assets/bg-home.jpg");
  background-size: cover; */
  height: 100%;
}
</style>
