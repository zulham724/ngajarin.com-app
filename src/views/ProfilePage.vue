<template>
  <div :style="profileStyle">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-row align="center" justify="center">
            <v-card style="margin-top: 20vh" width="85vw" height="50vh">
              <v-avatar size="30vw" style="margin-top: -5vh" color="indigo">
                <v-img :src="SettingModule.assets.avatar" alt="alt"></v-img>
              </v-avatar>
              <v-card-text>
                <v-tabs grow v-model="tab">
                  <v-tab>Identity</v-tab>
                  <v-tab>Information</v-tab>
                </v-tabs>
                <v-tabs-items v-model="tab">
                  <v-tab-item>
                    <v-container style="text-align:justify">
                      <v-row>
                        <v-col cols="12">
                          <div class="body-2">Nama: Prof Dr. Zulham Azwar Achmad, S.Pd., M.Pd.</div>
                        </v-col>
                        <v-col cols="12">
                          <div class="body-2">Email: zulham724@students.unnes.ac.id</div>
                        </v-col>
                        <v-col cols="12">
                          <v-row align="center" justify="center">
                            <v-btn fab dark color="yellow darken-2" bottom>
                              <v-icon>edit</v-icon>
                            </v-btn>
                          </v-row>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-tab-item>
                </v-tabs-items>
              </v-card-text>
            </v-card>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <!-- buat logout  -->
    <v-speed-dial fixed app style="bottom:10vh;right:7vw" v-model="fab">
      <template v-slot:activator>
        <v-btn @click="$router.push('login')" color="red" dark fab>
          <v-icon>exit_to_app</v-icon>
        </v-btn>
      </template>
    </v-speed-dial>
    <!-- end buat logout  -->
  </div>
</template>
<script>
// @ is an alias to /src
import { mapState } from 'vuex'
export default {
  name: 'Home',
  components: {

  },
  data() {
    return {
      tab: null
    }
  },
  computed: {
    ...mapState(['SettingModule']),
    profileStyle() {
      return {
        background: `url(https://images.unsplash.com/photo-1505480449763-8f5c78af9caa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80)`,
        backgroundSize: '100vw 50vh',
        borderRadius: '0 0 10vh 10vh',
        height: '50vh'
      }
    }
  }
}

</script>
