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

      <v-toolbar-title>Forum</v-toolbar-title>

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
      <v-card v-for="n in 3" class="mt-5 mb-5" :key="n">
        <v-card-title>
          <v-row class="fill-height" align="center" justify="start">
            <v-col cols="2">
              <v-avatar size="36px">
                <img
                  alt="Avatar"
                  src="https://scontent-sin6-2.cdninstagram.com/v/t51.2885-19/s320x320/16585277_197162840765257_3394749593936723968_a.jpg?_nc_ht=scontent-sin6-2.cdninstagram.com&_nc_cat=101&_nc_ohc=CEfbTerp0WsAX-leNVc&oh=6bf8b7e7398cd4f70ffe239114ce828f&oe=5E931E23"
                />
              </v-avatar>
            </v-col>
            <v-col cols="8">
              <v-row justify="start">
                <div class="caption font-weight-bold">
                  Prof Dr. Zulham Azwar, S.Pd, M.pd
                </div>
              </v-row>
            </v-col>
            <v-col cols="2">
              <v-speed-dial
                direction="left"
                transition="slide-y-reverse-transition"
              >
                <template v-slot:activator>
                  <v-btn v-model="fab" icon>
                    <v-icon v-if="fab">mdi-close</v-icon>
                    <v-icon v-else>more_vert</v-icon>
                  </v-btn>
                </template>
                <v-btn fab dark small color="green">
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
                <v-btn fab dark small color="indigo">
                  <v-icon>mdi-download</v-icon>
                </v-btn>
                <v-btn fab dark small color="red">
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </v-speed-dial>
            </v-col>
          </v-row>
        </v-card-title>
        <v-card-text>
          <v-container style="text-align:justify">
            <v-row no-gutters>
            	<v-col cols="12">
            		<div class="caption">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            		cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            		proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            	</v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-row>
            <v-col cols="4">
              <div class="caption grey--text">Lihat komentar</div>
            </v-col>
            <v-col cols="4"> </v-col>
            <v-col cols="2">
              <v-icon>favorite</v-icon>
            </v-col>
            <v-col cols="2">
              <v-icon>chat_bubble</v-icon>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-container>

    <!-- buat logout  -->
    <v-speed-dial
      fixed
      app
      style="bottom:10vh;right:7vw"
      v-model="fab"
    >
      <template v-slot:activator>
        <v-btn
          color="yellow darken-2"
          dark
          fab
        >
          <v-icon>add</v-icon>
        </v-btn>
      </template>
    </v-speed-dial>
    <!-- end buat logout  -->

  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data() {
    return {
      fab: false,
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4"
      ],
      slides: [
        "Siapa presiden kita?",
        "Pertanyaan kedua",
        "Pertanyaan ketiga",
        "Pertanyaan keempat",
        "Pertanyaan kelima"
      ]
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
