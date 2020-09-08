<template>
    <div>
      <template>
         <div id="app" class="login-main-header">
            <v-app id="inspire">
               <v-container fluid class="pt-0 pb-0">
                  <v-layout row>
                     <v-col cols="6" class="pt-0 pb-0">
                        <div class="header">
                          <div class="header-left">
                             <div class="header-logo-demo-forgot-password">
                                <router-link to="/">
                                   <v-img
                                      :src="require('../assets/main_logo.png')"
                                      contain
                                      height="50px"
                                      class="img-class main_logo"
                                      >
                                   </v-img>
                                </router-link>
                                
                                <v-container class="Login_responsive forgot_password_container_css">
                                  <p class="login_text_css">FORGOT PASSWORD</p>
                                  <div class="space_btn"></div>
                                  <input class="username_css" type="text" name="name" placeholder="Username / Email" autocomplete="off">
                                </v-container>
                             </div>
                          </div>
                        </div>
                        <div class="space_btn"></div>

                        <div class="header-add-forgot-password">
                          <a href="javascript:void(0)"><button class="header-add-forgot-password-btn"><span>Submit</span></button></a>
                        </div>

                        <div class="space_btn"></div>
                        <template>
                          <v-footer padless class="main-footer">
                            <v-col
                            class="text-center footer-custome-css"
                            cols="12"
                            >
                              Copyright. @ 2020 All Right Reserved | F1 Services, Inc..
                            </v-col>
                          </v-footer>
                        </template>

                     </v-col>
                     <v-col cols="6" class="pt-0 pb-0">
                        <v-img
                            :src="require('../assets/login_view.png')"
                            contain
                            height="auto"
                            width="100%"
                            class="img-class login_view"
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

/*.login-main-header .v-application--wrap {
    padding: 15px 0;
}*/

.v-responsive__content .main_logo
{
  width: 0px;
}

.space_btn
{
  padding: 15px;
}
.forgot_password_css
{
  margin-left: 55%;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  color: #0157A0;
}
.header-logo-demo-forgot-password
{
    padding: 40px 0 !important;
}
.login_text_css
{
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
}

.username_css
{
  width: 30%;
  position: absolute;
  font-size: 18px;
  border-bottom: 1px solid rgba(126, 133, 148, 0.8);
}
.space_class
{
  padding: 40px;
}
/*.v-application p
{
  margin-bottom: 42px;
}*/
.forgot_password_container_css
{
  margin-left: 40%;
  margin-top: 88px;
}
.container--fluid
{
  margin-bottom:0px !important;
}

.header-add-forgot-password-btn
{
  width: 80%;
}
.header-add-forgot-password {
  margin-left: 21%;
  width: 67%;
}
.header-add-forgot-password a {
    font-weight: 500;
    font-size: 15px;
    line-height: 22px;
    background: #0091FF;
    box-shadow: 0px 4px 10px rgba(1, 87, 160, 0.25);
    color: #fff !important;
    padding: 12px 35px;
    border-radius: 60px;
}


@media (max-width: 500px)
{
  .login_view
  {
    display: none;
  }
  .header-logo-demo-forgot-password
  {
    margin-left:0px;
  }
  .username_css
  {
    width: 75%;
  }
  .Login_responsive
  {
    margin-top: 24px;
  }
  /*.container
  {
    padding: 0px;
  }*/
}
</style>
