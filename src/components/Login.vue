<template>
    <div>
      <template>
         <div id="app" class="login-main-header">
            <v-app id="inspire">
               <v-container class="pt-0 pb-0">
                  <v-layout row>
                     <v-col cols="6" class="pt-0 pb-0">
                        <div class="header">
                          <div class="header-left">
                             <div class="header-logo">
                                <router-link to="/">
                                   <v-img
                                      :src="require('../assets/main_logo.png')"
                                      contain
                                      height="50px"
                                      class="img-class"
                                      >
                                   </v-img>
                                </router-link>
                             </div>
                          </div>
                        </div>
                     </v-col>
                     <v-col cols="6" class="pt-0 pb-0">
                        <v-img
                            :src="require('../assets/login_view.png')"
                            contain
                            height="50px"
                            class="img-class"
                            >
                         </v-img>
                     </v-col>
                  </v-layout>
               </v-container>
            </v-app>
         </div>
      </template>
    </div>
</template>

<script>
export default {
    name: 'Login',
   data: () => ({
    //
  }),
 }
</script>
<style type="text/css">
/*.login-main-header .v-application--wrap {
  min-height: auto !important;
  box-shadow: 0px 0px 17px rgba(0, 0, 0, 0.09);
}*/
.login-main-header .v-application--wrap {
    padding: 15px 0;
}
</style>


