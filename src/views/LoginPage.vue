<template>
  <v-container id="login" :style="loginStyle" fill-height fluid>
    <v-row align="center" justify="center">
      <v-col cols="12">
          <div class="body-1 black--text">NGAJARIN.COM</div>
      </v-col>
      <v-col cols="12">
        <v-form>
          <v-container fluid>
            <v-row no-gutters>
              <v-col cols="12">
                <v-text-field
                  prepend-icon="mdi-email"
                  rounded
                  class="input"
                  solo
                  name="name"
                  label="Email"
                  v-model="username"
                  id="id"
                ></v-text-field>
                <v-text-field
                  prepend-icon="mdi-key-outline"
                  rounded
                  solo
                  class="input"
                  name="name"
                  v-model="password"
                  label="Password"
                  id="id"
                  type="password"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <div class="subheading white--text" v-show="form.error.display">
                  {{ form.error.text }}
                </div>
              </v-col>
            </v-row>
            <v-row style="position:absolute;bottom:2vh;left:6vw">
              <v-col cols="12">
                <v-btn
                  @click="$router.push('register')"
                  rounded
                  outlined
                  block
                  large
                  :loading="form.loading"
                  :disabled="form.loading"
                  >Daftar</v-btn
                >
              </v-col>
            </v-row>
            <v-row style="position:absolute;bottom:2vh;right:6vw">
              <v-col cols="12">
                <v-btn
                  @click="$router.push('dashboard')"
                  rounded
                  outlined
                  block
                  large
                  :loading="form.loading"
                  :disabled="form.loading"
                  >Masuk</v-btn
                >
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import {mapState} from 'vuex'
export default {
  data() {
    return {
      username: "",
      password: "",
      form: {
        loading: false,
        error: {
          text: "Maaf, Sandi salah. tolong periksa ulang sandi anda.",
          display: false
        }
      }
    };
  },
  computed: {
    ...mapState(['SettingModule']),
    loginStyle(){
      return {
        background: `url(https://images.unsplash.com/photo-1565761268131-9ea19968d71c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80})`,
        backgroundSize: 'cover'
      }
    }
  },
};
</script>
<style type="text/css" scoped>

 .input {
   opacity: 0.8;
}
#card-form {
  opacity: 0.8;
}
</style>
