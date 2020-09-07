<template>
   <v-dialog v-model="dialog">
      <template v-slot:activator="{ on, attrs }">
         <div id="app" class="main-header">
            <v-app id="inspire">
               <v-container class="pt-0 pb-0">
                  <v-layout row>
                     <v-col cols="12" class="pt-0 pb-0">
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
                             <div class="header-options">

                                <ul>
                                   <li>
                                      <a href="javascript:void(0)" v-on:click="menu1_active_state = !menu1_active_state"><img src="../assets/customer-icon.png" alt=""><span>Customer</span><i class="fa fa-caret-down"></i></a>
                                      <ul v-bind:class="{ 'active': menu1_active_state }">
                                         <li><a href="/#/CustomerSearch"><img src="../assets/search-icon.png" alt="search-icon"><span>Search</span></a></li>
                                         <li><a href="javascript:void(0)" color="red lighten-2" v-bind="attrs" v-on="on"><img src="../assets/plus-icon.png" alt=""><span>Add</span></a></li>
                                         <li><a href="/#/Reports"><img src="../assets/reports-icon.png" alt="reports-icon"><span>Reports</span></a></li>
                                      </ul>
                                   </li>
                                   <li>
                                      <a href="javascript:void(0)" v-on:click="menu2_active_state = !menu2_active_state"><img src="../assets/tean-icon.png" alt=""><span>Team</span><i class="fa fa-caret-down"></i></a>
                                      <ul v-bind:class="{ 'active': menu2_active_state }">
                                         <li><a href="/#/Search"><img src="../assets/search-icon.png" alt="search-icon"><span>Search</span></a></li>
                                         <li><a href="/#/Payroll"><img src="../assets/payroll-icon.png" alt=""><span>Payroll</span></a></li>
                                         <li><a href="/#/Training"><img src="../assets/training-icon.png" alt="reports-icon"><span>Training</span></a></li>
                                         <li><a href="/#/Reports"><img src="../assets/reports-icon.png" alt="reports-icon"><span>Reports</span></a></li>
                                      </ul>
                                   </li>
                                   <li>
                                      <a href="javascript:void(0)"  v-on:click="menu3_active_state = !menu3_active_state"><img src="../assets/field-icon.png" alt=""><span>Field</span><i class="fa fa-caret-down"></i></a>
                                      <ul v-bind:class="{ 'active': menu3_active_state }">
                                         <li><a href="/#/Schedule"><img src="../assets/schedule-icon.png" alt="search-icon"><span>Schedule</span></a></li>
                                         <li><a href="/#/Projects"><img src="../assets/projects-icon.png" alt=""><span>Projects</span></a></li>
                                         <li><a href="/#/Reports"><img src="../assets/reports-icon.png" alt="reports-icon"><span>Reports</span></a></li>
                                      </ul>
                                   </li>
                                   <li>
                                      <a href="javascript:void(0)" v-on:click="menu4_active_state = !menu4_active_state"><img src="../assets/book-icon.png" alt=""><span>Books</span><i class="fa fa-caret-down"></i></a>
                                      <ul v-bind:class="{ 'active': menu4_active_state }">
                                         <li><a href="/#/Daily"><img src="../assets/schedule-icon.png" alt="search-icon"><span>Daily</span></a></li>
                                         <li><a href="/#/Assets"><img src="../assets/assets-icon.png" alt=""><span>Assets</span></a></li>
                                         <li><a href="/#/Reports"><img src="../assets/reports-icon.png" alt="reports-icon"><span>Reports</span></a></li>
                                      </ul>
                                   </li>
                                   <li>
                                      <a href="javascript:void(0)" v-on:click="menu5_active_state = !menu5_active_state"><img src="../assets/maint-icon.png" alt=""><span>Maint</span><i class="fa fa-caret-down"></i></a>
                                      <ul v-bind:class="{ 'active': menu5_active_state }">
                                         <li><a href="/#/Vehicles"><img src="../assets/vehicles-icon.png" alt="search-icon"><span>Vehicles</span></a></li>
                                         <li><a href="/#/Equipment"><img src="../assets/equipment-icon.png" alt=""><span>Equipment</span></a></li>
                                         <li><a href="/#/Reports"><img src="../assets/reports-icon.png" alt="reports-icon"><span>Reports</span></a></li>
                                      </ul>
                                   </li>
                                </ul>
                             </div>
                          </div>
                          <div class="header-right">
                           <div class="header-search">
                              <v-text-field append-icon="mdi-magnify" placeholder="Placeholder" solo></v-text-field>
                           </div>
                           <div class="header-add">
                              <a href="#"><i class="fa fa-plus" aria-hidden="true"></i><span>Add</span></a>
                           </div>
                           <div class="header-user">
                              <!-- v-avatar size="37px">
                                 <v-img
                                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                                    alt="John"
                                    ></v-img>
                                 <i class="fa fa-chevron-down icon_css" aria-hidden="true"></i>
                              </v-avatar> -->
                              <div class="user-avtar" v-on:click="avtar_active_state = !avtar_active_state">
                                <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="john">
                                <i class="fa fa-chevron-down"></i>
                              </div>
                              <div class="user-option" v-bind:class="{ 'active': avtar_active_state }">
                                <ul>
                                   <li><a href="/#/MyProfile"><img src="../assets/profile-icon.png" alt="search-icon"><span>My Profile</span></a></li>
                                   <li><a href="/#/SystemAdmin"><img src="../assets/system-admin-icon.png" alt=""><span>System Admin</span></a></li>
                                   <li><a href="/#/ClockInOut"><img src="../assets/clock-icon.png" alt="reports-icon"><span>Clock In / Out</span></a></li>
                                   <li><a href="/#/Help"><img src="../assets/help-icon.png" alt="reports-icon"><span>Help</span></a></li>
                                   <li><a href="/#/LogOut"><img src="../assets/logout-icon.png" alt="reports-icon"><span>Log Out</span></a></li>
                                </ul>
                              </div>
                           </div>
                           <!-- <button class="menu-toggle" v-on:click="button_active_state = !button_active_state"><i class="fas fa-bars"></i></button> -->
                         </div>
                        </div>
                     </v-col>
                  </v-layout>
               </v-container>
            </v-app>
         </div>
      </template>
      <v-card>
         <div class="add-customer-popup">
            <div class="popup-wrap">
               <v-btn class="close-popup" text @click.native="dialog = false">
                  <v-img src="../assets/close-icon.png" alt="close-icon"></v-img>
               </v-btn>
               <div class="popup-wrap-inner step-one" v-if="current_step == 1">
                  <div class="popup-title">
                     <h6>Add Customer</h6>
                  </div>
                  <div class="customer-form">
                     <v-form v-model="valid">
                        <v-container>
                           <v-row class="pr-10 pl-10">
                              <v-col cols="12" sm="6" class="pr-7">
                                <v-row>
                                  <v-col
                                     cols="12"
                                     md="6" class="pt-0 pb-0"
                                     >
                                     <v-text-field
                                        v-model="zip"
                                        label="Zip"
                                        required
                                        ></v-text-field>
                                  </v-col>
                                  <v-col
                                     cols="12"
                                     md="6" class="pt-0 pb-0"
                                     >
                                     <v-text-field
                                        v-model="MrMs"
                                        label="Mr/Ms"
                                        required
                                        ></v-text-field>
                                  </v-col>
                                  <v-col
                                     cols="12"
                                     md="6" class="pt-0 pb-0"
                                     >
                                     <v-text-field
                                        v-model="firstname"
                                        :rules="nameRules"
                                        label="First name"
                                        required
                                        ></v-text-field>
                                  </v-col>
                                  <v-col
                                     cols="12"
                                     md="6" class="pt-0 pb-0"
                                     >
                                     <v-text-field
                                        v-model="lastname"
                                        :rules="nameRules"
                                        label="Last name"
                                        required
                                        ></v-text-field>
                                  </v-col>
                                  <v-col
                                     cols="12" class="pt-0 pb-0"
                                     >
                                     <v-text-field
                                        v-model="Company"
                                        label="Company"
                                        required
                                        ></v-text-field>
                                  </v-col>
                                  <v-col
                                     cols="12"
                                     md="6" class="pt-0 pb-0"
                                     >
                                     <v-text-field
                                        v-model="City"
                                        label="City"
                                        required
                                        ></v-text-field>
                                  </v-col>
                                  <v-col
                                     cols="12"
                                     md="6" class="pt-0 pb-0"
                                     >
                                     <v-text-field
                                        v-model="State"
                                        label="State"
                                        required
                                        ></v-text-field>
                                  </v-col>
                                </v-row>
                            </v-col>
                            <v-col cols="12" sm="6" class="pl-7">
                              <v-row>
                                  <v-col
                                     cols="12"
                                     md="6" class="pt-0 pb-0"
                                     >
                                     <v-text-field
                                        v-model="grade"
                                        label="Grade"
                                        required
                                        ></v-text-field>
                                  </v-col>
                                  <v-col
                                     cols="12"
                                     md="6" class="pt-0 pb-0"
                                     >
                                     <v-text-field
                                        v-model="geozone"
                                        label="Geo Zone"
                                        required
                                        ></v-text-field>
                                  </v-col>
                                  <v-col
                                     cols="12"
                                     md="12" class="pt-0 pb-0"
                                     >
                                     <v-text-field
                                        v-model="address"
                                        label="Address 1"
                                        required
                                        ></v-text-field>
                                  </v-col>
                                  <v-col
                                     cols="12"
                                     md="12" class="pt-0 pb-0"
                                     >
                                     <v-text-field
                                        v-model="address"
                                        label="Address 2"
                                        required
                                        ></v-text-field>
                                  </v-col>
                                  <v-col
                                     cols="12" class="pt-0 pb-0 phone-check"
                                     >
                                     <v-text-field
                                        v-model="phone"
                                        label="Phone 1"
                                        required
                                        ></v-text-field>
                                        <span><v-checkbox v-model="checkbox4" :label="`Text`"></v-checkbox></span>
                                  </v-col>
                                </v-row>
                            </v-col>
                            <v-col cols="12" class="text-center mt-5">
                              <a href="#" class="customer-next-btn" @click="change_step(2)">Next</a>
                            </v-col>
                           </v-row>
                        </v-container>
                     </v-form>
                  </div>
               </div>
               <div class="popup-wrap-inner step-two" v-if="current_step == 2">
                  <span @click="change_step(1)" class="back-popup"><img src="../assets/back-icon.png" alt="back-icon"></span>
                  <div class="popup-title">
                     <h6>Add Customer - 2</h6>
                  </div>
                  <div class="customer-form">
                     <v-form v-model="valid">
                        <v-container>
                           <v-row class="pr-10 pl-10">
                              <v-col cols="12" sm="6" class="pr-7">
                                <v-row>
                                  <v-col
                                     cols="12" class="pt-0 pb-0 phone-check"
                                     >
                                     <v-text-field
                                        v-model="phone"
                                        label="Phone 2"
                                        required
                                        ></v-text-field>
                                        <span><v-checkbox v-model="checkbox4" :label="`Text`"></v-checkbox></span>
                                  </v-col>
                                  <v-col
                                     cols="12"
                                     md="12" class="pt-0 pb-0"
                                     >
                                     <v-text-field
                                        v-model="email"
                                        :rules="emailRules"
                                        label="E-mail"
                                        required
                                        ></v-text-field>
                                  </v-col>
                                  <v-col
                                     cols="12"
                                     md="12" class="pt-0 pb-0"
                                     >
                                     <v-select
                                      :items="items"
                                      label="Source Code"
                                    ></v-select>
                                  </v-col>
                                  <v-col cols="12">
                                    <div class="ac-check-box">
                                      <ul>
                                        <li><v-checkbox v-model="checkbox1" :label="`Opt Out Snail Mail`"></v-checkbox></li>
                                        <li><v-checkbox v-model="checkbox2" :label="`Opt Out Email`"></v-checkbox></li>
                                        <li><v-checkbox v-model="checkbox3" :label="`Opt Out Text:`"></v-checkbox></li>
                                      </ul>
                                      
                                      </div>
                                  </v-col>
                                </v-row>
                            </v-col>
                            <v-col cols="12" sm="6" class="pl-7">
                              <v-row>
                                  <v-col
                                     cols="12"
                                     md="12" class="pt-0 pb-0 map-box"
                                     >
                                     <v-text-field
                                        v-model="map"
                                        label="Map"
                                        required
                                        ></v-text-field>
                                        <span><img src="../assets/map-focus.png"></span>
                                  </v-col>
                                  <v-col
                                     cols="12"
                                     md="12" class="pt-0 pb-0"
                                     >
                                     <v-text-field
                                        v-model="shopdrivetime"
                                        label="Shop Drive Time"
                                        required
                                        ></v-text-field>
                                  </v-col>
                                  <v-col
                                     cols="12"
                                     md="12" class="pt-0 pb-0"
                                     >
                                     <v-text-field
                                        v-model="referredfrom"
                                        label="Referred From"
                                        required
                                        ></v-text-field>
                                  </v-col>
                                  <v-col cols="12">
                                    <v-textarea
                                      outlined
                                      name="input-7-4"
                                      value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  "
                                    ></v-textarea>
                                  </v-col>
                                </v-row>
                            </v-col>
                            <v-col cols="12" class="text-center mt-5">
                              <a href="#" class="customer-next-btn" @click="change_step(3)">Next</a>
                            </v-col>
                           </v-row>
                        </v-container>
                     </v-form>
                  </div>
               </div>
               <div class="popup-wrap-inner step-three" v-if="current_step == 3">
                  <span @click="change_step(2)" class="back-popup"><img src="../assets/back-icon.png" alt="back-icon"></span>
                  <div class="popup-title mb-5">
                     <h6>Is There a Duplicate Customer?</h6>
                  </div>
                  <div class="customer-form">
                     <v-col cols="12" class="customer-search-table">
                        <v-data-table
                           :headers="headers"
                           :items="desserts"
                           class="elevation-1"
                           ></v-data-table>
                     </v-col>
                     <v-row style="margin: 0" class="cn-btn-wrap">
                     <v-col cols="3" class="text-center mt-3">
                            </v-col>
                     <v-col cols="9" class="text-right mt-3 ">
                              <a href="#" class="customer-next-btn">Create New Customer</a>
                            </v-col>
                          </v-row>
                  </div>
               </div>
            </div>
         </div>
      </v-card>
   </v-dialog>
</template>
<script>
   export default {
     data () {
       return {
        dialog: false,
        current_step: '1',
        button_active_state: false,
        avtar_active_state: false,
        menu1_active_state: false,
        menu2_active_state: false,
        menu3_active_state: false,
        menu4_active_state: false,
        menu5_active_state: false,
         headers: [
           {
             text: 'First Name',             
             value: 'FirstName',
           },
           { text: 'Last Name', value: 'LastName' },
           { text: 'Address', value: 'Address' },
           { text: 'City', value: 'City' },
           { text: 'Zip', value: 'Zip' },
           { text: 'Email', value: 'Email' },
           { text: 'Phone', value: 'Phone' },
         ],
         desserts: [
           {
             FirstName: 'Cline',
             LastName: 'Gatlin',
             Address: '1916 Harvard Ave',
             City: 'Kansas City',
             Zip: '292622',
             Email: 'example@gmail.com',
             Phone: 'XXX-XXX-XXXX',
           },
           {
             FirstName: 'Stanley',
             LastName: 'Justin',
             Address: '2540 42 St',
             City: 'Overland Park',
             Zip: '925372',
             Email: 'example@gmail.com',
             Phone: 'XXX-XXX-XXXX',
           },
           {
             FirstName: 'David',
             LastName: 'Loveall',
             Address: '3836 Kary NL',
             City: 'Olathe',
             Zip: '902635',
             Email: 'exa@gmail.com',
             Phone: 'XXX-XXX-XXXX',
           },
           {
             FirstName: 'Linda',
             LastName: 'Luis',
             Address: '8936 72 St',
             City: 'Blue Springs',
             Zip: '0217252',
             Email: 'example@gmail.com',
             Phone: 'XXX-XXX-XXXX',
           },
           {
             FirstName: 'Cline',
             LastName: 'Gatlin',
             Address: '1916 Harvard Ave',
             City: 'Kansas City',
             Zip: '292622',
             Email: 'example@gmail.com',
             Phone: 'XXX-XXX-XXXX',
           },
           {
             FirstName: 'Stanley',
             LastName: 'Justin',
             Address: '2540 42 St',
             City: 'Overland Park',
             Zip: '925372',
             Email: 'example@gmail.com',
             Phone: 'XXX-XXX-XXXX',
           },
           {
             FirstName: 'Loveall',
             LastName: 'jackson',
             Address: '3836 Kary NL',
             City: 'Olathe',
             Zip: '902635',
             Email: 'exa@gmail.com',
             Phone: 'XXX-XXX-XXXX',
           },
           {
             FirstName: 'Linda',
             LastName: 'Luis',
             Address: '8936 72 St',
             City: 'Blue Springs',
             Zip: '0217252',
             Email: 'example@gmail.com',
             Phone: 'XXX-XXX-XXXX',
           },
           {
             FirstName: 'Cline',
             LastName: 'Gatlin',
             Address: '1916 Harvard Ave',
             City: 'Kansas City',
             Zip: '292622',
             Email: 'example@gmail.com',
             Phone: 'XXX-XXX-XXXX',
           },
           {
             FirstName: 'Stanley',
             LastName: 'Justin',
             Address: '2540 42 St',
             City: 'Overland Park',
             Zip: '925372',
             Email: 'example@gmail.com',
             Phone: 'XXX-XXX-XXXX',
           },
           {
             FirstName: 'Loveall',
             LastName: 'jackson',
             Address: '3836 Kary NL',
             City: 'Olathe',
             Zip: '902635',
             Email: 'exa@gmail.com',
             Phone: 'XXX-XXX-XXXX',
           },
           {
             FirstName: 'Linda',
             LastName: 'Luis',
             Address: '8936 72 St',
             City: 'Blue Springs',
             Zip: '0217252',
             Email: 'example@gmail.com',
             Phone: 'XXX-XXX-XXXX',
           },
           {
             FirstName: 'Loveall',
             LastName: 'jackson',
             Address: '3836 Kary NL',
             City: 'Olathe',
             Zip: '902635',
             Email: 'exa@gmail.com',
             Phone: 'XXX-XXX-XXXX',
           },
           {
             FirstName: 'Linda',
             LastName: 'Luis',
             Address: '8936 72 St',
             City: 'Blue Springs',
             Zip: '0217252',
             Email: 'example@gmail.com',
             Phone: 'XXX-XXX-XXXX',
           },
         ],
         checkbox1: true,
        checkbox2: false,
        checkbox3: false,
       }
     },
    methods:{
      change_step(id)
      {
        this.current_step = id
      }
    }
   }


</script>
<style>
.v-responsive {
  flex: none !important;
}
.theme--light.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined){
  background-color: unset !important;
}
.v-btn--contained{
  box-shadow: none !important;
}
.v-sheet.v-toolbar:not(.v-sheet--outlined){
  box-shadow: none !important;
}
.v-btn:not(.v-btn--round).v-size--default{
  padding: 0 12px !important;
}
.text-white{
  color: white !important;
  font-size: 15px;
}
.v-avatar{
  float: right;
}
.plus-css{
  margin-right: 55px;
  width: 123px;
}
.v-toolbar__items{
  height: initial !important;
}
.v-btn:not(.v-btn--round).v-size--default{
  height: none !important;
}
.container--fluid{
  margin-bottom: 200px !important;
}
.footer-custome-css{
  margin-top: -50px;
  text-align: center;
  background-color: transparent !important;
}
.search{
  border-radius: 10px;
}
.header-search > div {
  display: block !important;
  width: 100% !important;
}
.header-menu{
  margin-left: -114px;
}
.v-text-field.v-text-field--solo .v-input__control{
  min-height: 36px !important;
}
.header-search .v-input__slot {
  margin: 0 !important;
  border-radius: 55px !important;
  background-color: #DCDCDC !important;
}
.v-avatar{
  overflow: inherit !important; 
}
.icon_css{
  margin-left: 13px !important;
}
.header-search .v-text-field__details {
  display: none;
}
.header-inner > .v-toolbar__content {
  justify-content: space-around;
}
.header-inner .header-menu button {
  margin: 0 !important;
}
.v-btn{
  color: gray !important;
  text-transform:lowercase !important;
}
.main-header .v-application--wrap {
  min-height: auto !important;
  box-shadow: 0px 0px 17px rgba(0, 0, 0, 0.09);
}

.top-banner-wrap .v-image__image {
  background-size: cover;
}
.main-footer {
  display: block !important;
  width: 100%;
  box-shadow: none !important;
  background: transparent !important;
}
.main-footer div {
  margin: 0;
}
.header {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
}
.header-left {
  display: flex;
  align-items: center;
  width: 50%;
  flex-wrap: wrap;
  justify-content: space-between;
}
.header-right {
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: flex-end;
}
.header-left > div, .header-right > div {
  padding: 0 5px;
}
.header-options ul {
  padding: 0;
  margin: 0;
  list-style: none;
}
.header-options ul ul {
  position: absolute;
  opacity: 0;
  visibility: hidden;
  z-index: 99;
  top: 90%;
  padding: 15px 0px !important;
  background: #fff;
  box-shadow: 0px 12px 27px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
}
.header-search .v-input__slot {
  box-shadow: none !important;
  background-color: rgba(170, 177, 185, 0.25) !important;
}
.header-options > ul > li:hover ul {
  opacity: 1;
  visibility: visible;
}
.header-options >  ul > li {
  position: relative;
}
.header-options ul ul a {
  font-size: 15px;
  line-height: 22px;
  padding: 5px 15px;
  color: #7E8594;
}
.header-options ul ul a:hover {
    background: #eeeeee;
}
.header-options ul ul a span {
  margin-left: 10px;
}
.header-options > ul {
  display: flex;
  flex-wrap: wrap;
}
.header-options a {
  font-family: 'Poppins', sans-serif;
}
.header-options > ul > li > a {
  font-style: normal;
  font-weight: 300;
  font-size: 17px;
  padding: 28px 0;
  display: flex;
  align-items: center;
  color: #7E8594;
}
.header-options > ul > li > a img {
    display: none;
}
a {
  text-decoration: none;
}
.header-options > ul > li {
  margin: 0 13px;
}
.header-logo {
  max-width: 180px;
}
.header-options ul ul a {
     display: flex;
    align-items: center;
    position: relative;
}
.header-options > ul > li > a i {
 margin-left: 9px;
}
.header-add {
    max-width: 140px;
}
.header-add a {
    font-weight: 500;
    font-size: 15px;
    line-height: 22px;
    background: #0091FF;
    box-shadow: 0px 4px 10px rgba(1, 87, 160, 0.25);
    color: #fff !important;
    padding: 12px 35px;
    border-radius: 60px;
}
/*Popup Style*/
   .v-dialog {
    width: 80% !important;
}
.customer-next-btn {
    background: #0157A0;
    box-shadow: 0px 5px 10px rgba(110, 115, 243, 0.29);
    border-radius: 50px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 22px;
    color: #FFFFFF !important;
    padding: 18px 75px;
}
.popup-wrap {
    padding: 40px 0;
}
.popup-title {
    padding: 0 50px;
    text-align: center;
}
.popup-title h6 {
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 37px;
    color: #000000;
}
.close-popup.v-btn {
    position: absolute;
    right: 30px;
    top: 30px;
    padding: 0 !important;
}
.close-popup.v-btn > span + span {
    display: none !important;
}
.close-popup.v-btn:not(.v-btn--round).v-size--default {
    padding: 0 !important;
    height: auto;
    width: auto;
    min-width: auto;
}
.close-popup.v-btn:before {
    content: none;
}
.back-popup {
    position: absolute;
    top: 30px;
    left: 30px;
    cursor: pointer;
}
.customer-form label, .customer-form textarea {
    font-size: 14px !important;
}
.popup-wrap-inner.step-three .customer-search-table .v-data-footer {
    width: 40%;
    justify-content: flex-start;
    position: relative;
    bottom: -60px;
}
.ac-check-box ul {
    margin: 0;
    padding: 0 !important;
    list-style: none;
}
.ac-check-box ul li {
    display: inline-block;
}
.ac-check-box ul li > div {
    margin: 0;
    padding: 0;
}
.ac-check-box ul li .v-input__slot label {
    margin-right: 4px !important;
}
.ac-check-box ul li .v-input__slot > div {
    order: 2;
}
.ac-check-box ul li + li {
    margin-left: 15px;
}
.ac-check-box ul li i {
    color: #BCC3CA !important;
}
.phone-check > span {
    position: absolute;
    top: 0;
    right: 15px;
}
.phone-check {
    position: relative;
}
.map-box {
    position: relative;
}
.map-box > span {
    position: absolute;
    right: 15px;
    bottom: 21px;
}
.header-add > div {
    box-shadow: 0px 4px 10px rgba(1, 87, 160, 0.25);
}
/*******/
.user-avtar {
    display: flex;
    align-items: center;
    cursor: pointer;
        padding: 23px 0;
}
.header-options ul {
    padding-left: 0 !important;
}
.user-option {
    position: absolute;
    opacity: 0;
    visibility: hidden;
    z-index: 8;
    top: 100%;
    padding: 15px 0px !important;
    background: #fff;
    box-shadow: 0px 12px 27px rgba(0, 0, 0, 0.25);
    border-radius: 3px;
    min-width: 165px;
    right: 0;
}
.user-option ul {
    padding: 0 !important;
    margin: 0;
    list-style: none;
}
.header-user {
    position: relative;
}
.user-option a {
    font-size: 15px;
    line-height: 22px;
    color: #7E8594 !important;
    display: flex;
    padding: 5px 15px;
    align-items: center;
    position: relative;
}
.user-option a span {
    margin-left: 10px;
}
.user-option a:hover {
  background-color: #eeeeee;
}

.user-option.active {
    opacity: 1;
    visibility: visible;
}/*
.menu-toggle {
    background: #0157A0;
    cursor: pointer;
    display: none;
    padding: 5px 12px;
    color: #fff;
}*/
span.close-icon {
    display: none;
}

.user-avtar img {width: 35px;border-radius: 100%;margin-right: 10px;}
@media only screen and (max-width: 1903px) {
.header-left {
  width: 59%;
}
.header-right {
  width: 41%;
}
}
@media only screen and (max-width: 1263px) {
.header-options > ul > li > a {
    padding: 5px 0;
}
.header-left {
  width: 38%;
}
body {
    padding-left: 59px;
}
.header-right {
  width: 62%;
  justify-content: space-between;
}
.header-options ul ul {
    right: 0;
    pointer-events: none;
}
.main-header .v-application--wrap {
    padding: 15px 0;
}
.header-logo {
    margin-bottom: 10px;
}
.user-avtar {
    padding: 4px 0;
}
/*Menu CSS*/
/*.menu-toggle {
  margin-left: 10px;
    display: inline-block;
}*/
/* width */
.header-options::-webkit-scrollbar {
  width: 3px;
}

/* Track */
.header-options::-webkit-scrollbar-track {
  background: #D9D9D9;
}
 .header-options > ul > li > a img {
    display: inline-block;
    width: 16px;
    margin-right: 15px;
}
/* Handle */
.header-options::-webkit-scrollbar-thumb {
  background:  #7E8594; 
}
.header-options {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    padding: 0 !important;
    background: #eeeeee;
    z-index: 9;
    height: 100vh;
    overflow-y: scroll;
    width: 59px;
    transition: all 0.3s ease 0s;
    overflow-x: hidden;
}
.header-options > ul > li:hover ul {
  opacity: 0;
  visibility: hidden;
}
.header-options > ul >  li {
    display: block;
    width: 100%;
    margin: 0;
}
.header-options ul ul {
    left: 0;
    padding: 10px 5px !important;
}
.header-options > ul {
    height: 100%;
        min-width: 270px;
    display: block;
}
/*.menu-toggle:focus {
    outline: none;
}*/
.header-options:hover {
    width: 270px !important;
}
.header-options > ul > li a {
  position: relative;
  font-size: 14px;
}
.header-options > ul > li > a {
  color: rgba(0, 0, 0, 0.85);
  padding: 10px 20px;
}
.header-options > ul > li > a i {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
}
.close-icon {
    display: block !important;
    text-align: right;
    margin: 20px 20px 10px 20px;
}
.header-options ul ul a span {
    opacity: 0;
    visibility: hidden;
}
.header-options ul ul.active {
    opacity: 1 !important;
    visibility: visible !important;
    position: relative;
    pointer-events: all;
    border-radius: 0;
    box-shadow: none;
}
.header-options > ul > li > a > span {
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease 0s;
}

.header-options:hover > ul > li > a > span {
    opacity: 1;
    visibility: visible;
}
.header-options:hover ul ul a span {
  opacity: 1;
    visibility: visible;
}
/*******************/
}
@media only screen and (max-width: 991px) {
.v-application .add-customer-popup form > div > div {
    padding: 0 20px !important;
}
.header-left {
    width: 20%;
}
.header-right {
    width: 80%;
    justify-content: flex-end;
}
.v-application .add-customer-popup form > div > div > div:first-child {
    padding-right: 15px !important;
}
.v-application .add-customer-popup form > div > div > div:nth-child(2) {
    padding-left: 15px !important;
}
.v-application .add-customer-popup form > div > div > div:last-child {
    margin: 10px 0 0 0 !important;
}
.customer-next-btn {
    padding: 12px 50px;
}
.popup-title h6 {
    font-size: 22px;
}
.popup-title h6 {
    font-size: 22px;
}
.popup-wrap-inner.step-three .customer-search-table .v-data-footer {
    margin: 0 !important;
}
}

@media only screen and (max-width: 767px) {
.header-options ul ul {
    right: 0;
}
.header-options > ul {
    justify-content: center;
    margin: 0 0 10px 0;
}
.header-logo {
    width: 100% !important;
    max-width: 100%;
}
.header-search {
    width: 245px;
}
.header-left {
    width: 100%;
}
.header-right {
    width: 100%;
    justify-content: center;
}
}

@media only screen and (max-width: 599px) {
.customer-form form > div > div > div, .customer-form form > div {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
}
.popup-title {
    padding: 0;
}
.customer-next-btn {
    padding: 9px 20px;
    font-size: 14px;
}
.header-search {
    width: 100%;
    margin-bottom: 15px;
}
.v-application .popup-title {
    margin-bottom: 5px !important;
}
.header-options > ul > li > a {
    font-size: 14px;
}
.ac-check-box ul li {
    width: 100%;
    margin: 0 !important;
}
.back-popup img {
    width: 20px;
}
.close-popup .v-image__image {
  width: 20px !important;
  object-fit: contain !important;
  background-size: contain !important;
}
.v-application .add-customer-popup form > div > div {
    padding: 0 10px !important;
}
.popup-wrap-inner.step-three .customer-search-table .v-data-footer {
    width: 100% !important;
    bottom: 0 !important;
}
.popup-wrap-inner.step-three .customer-search-table .v-data-footer {
    width: 100% !important;
    bottom: 0 !important;
    margin-top: 0 !important;
}
.cn-btn-wrap > div:first-child {
    display: none;
}
.v-application .cn-btn-wrap > div:last-child {
    flex: 0 0 100%;
    max-width: 100%;
    text-align: left !important;
    margin: 0 !important;
}
.popup-title h6 {
    font-size: 20px;
    line-height: normal;
    margin-top: 12px;
}
}

@media only screen and (max-width: 480px) {
.header-search {
    width: 100%;
    margin-bottom: 15px;
}
}

</style>