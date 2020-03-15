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

      <v-toolbar-title>Notification</v-toolbar-title>

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
    <v-tabs grow color="green">
      <v-tab>Murid</v-tab>
      <v-tab>Guru</v-tab>
    </v-tabs>
    <v-container>
      <v-row>
        <v-col cols="6">
          <v-card>
            
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
