<template>
    <v-container class="customer-detail-main">
        <v-row class="pt-15 tab-wrap mr-0 ml-0">
            <v-col cols="12">
                <div class="tab-wrap">
                    <v-bottom-navigation :value="activeBtn" class="tab-wrap-menu">
                        <v-btn @click="change_step(1)">Customer Details</v-btn>
                        <v-btn @click="change_step(2)">Evaluation</v-btn>
                        <v-btn @click="change_step(3)">Bids</v-btn>
                        <v-btn @click="change_step(4)">Activity</v-btn>
                        <v-btn @click="change_step(5)">Insights</v-btn>
                        <v-btn @click="change_step(6)">Locations</v-btn>
                        <v-btn @click="change_step(7)">Contacts</v-btn>
                        <v-btn @click="change_step(8)">Warranty</v-btn>
                        <v-btn @click="change_step(9)">Reviews</v-btn>
                    </v-bottom-navigation>
                </div>
            </v-col>
        </v-row>
        <v-row class="tab-contant mr-0 ml-0">
            <v-col cols="12" class="mt-10 pr-0 pl-0">
                <div class="customer-detail-step" v-if="current_step == 1">
                    <div class="map-wrap">
                        <v-img src="../assets/map.png" alt="map"></v-img>
                    </div>
                    <div class="customer-details-wrap">
                        <v-container>
                            <v-row>
                                <v-col cols="12">
                                    <div class="customer-title">
                                        <h1>Customer Detail</h1>
                                        <h6><img src="../assets/user-icon.png" alt="user-icon"><span>David Loveall  </span></h6>
                                    </div>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col>
                                    <v-form v-model="valid">
                                       <v-row>
                                          <v-col cols="12" sm="6" class="pr-7">
                                            <v-row>
                                              <v-col
                                                 cols="12"
                                                 md="6" class="pt-0 pb-0"
                                                 >
                                                 <v-text-field
                                                    v-model="mr"
                                                    label="Mr"
                                                    required
                                                    ></v-text-field>
                                              </v-col>
                                              <v-col
                                                 cols="12"
                                                 md="6" class="pt-0 pb-0"
                                                 >
                                                 <v-text-field
                                                    v-model="david"
                                                    label="David"
                                                    required
                                                    ></v-text-field>
                                              </v-col>
                                              <v-col
                                                 cols="12"
                                                 md="6" class="pt-0 pb-0"
                                                 >
                                                 <v-text-field
                                                    v-model="loveall"
                                                    label="Loveall"
                                                    required
                                                    ></v-text-field>
                                              </v-col>
                                              <v-col
                                                 cols="12"
                                                 md="6" class="pt-0 pb-0"
                                                 >
                                                 <v-text-field
                                                    v-model="number"
                                                    label="926378"
                                                    required
                                                    ></v-text-field>
                                              </v-col>
                                              <v-col
                                                 cols="12" md="6" class="pt-0 pb-0"
                                                 >
                                                 <v-text-field
                                                    v-model="overlandpark"
                                                    label="Overland Park"
                                                    required
                                                    ></v-text-field>
                                              </v-col>
                                              <v-col
                                                 cols="12"
                                                 md="6" class="pt-0 pb-0"
                                                 >
                                                 <v-text-field
                                                    v-model="ks"
                                                    label="KS"
                                                    required
                                                    ></v-text-field>
                                              </v-col>
                                              <v-col
                                                 cols="12"
                                                 md="12" class="pt-0 pb-0 phone-check no-checkbox"
                                                 >
                                                 <v-text-field
                                                    v-model="phone1"
                                                    label="(785) 123-1234"
                                                    required
                                                    ></v-text-field>
                                                    <span><v-checkbox v-model="checkbox4" :label="`Text`"></v-checkbox></span>
                                              </v-col>
                                              <v-col
                                                 cols="12"
                                                 md="12" class="pt-0 pb-0 phone-check"
                                                 >
                                                 <v-text-field
                                                    v-model="phone2"
                                                    label="(816) 445-8126"
                                                    required
                                                    ></v-text-field>
                                                    <span><v-checkbox v-model="checkbox4" :label="`Text`"></v-checkbox></span>
                                              </v-col>
                                              <v-col
                                                 cols="12"
                                                 md="12" class="pt-0 pb-0 phone-check"
                                                 >
                                                 <v-text-field
                                                    v-model="email"
                                                    :rules="emailRules"
                                                    label="E-mail"
                                                    required
                                                    ></v-text-field>
                                                    <span><v-checkbox v-model="checkbox4"></v-checkbox></span>
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
                                                 md="6" class="pt-0 pb-0"
                                                 >
                                                 <v-text-field
                                                    v-model="gradeb"
                                                    label="Grade = B"
                                                    required
                                                    ></v-text-field>
                                              </v-col>
                                              <v-col
                                                 cols="12"
                                                 md="6" class="pt-0 pb-0"
                                                 >
                                                 <v-text-field
                                                    v-model="ceozone42"
                                                    label="GeoZone = 42"
                                                    required
                                                    ></v-text-field>
                                              </v-col>
                                              <v-col
                                                 cols="12"
                                                 md="12" class="pt-0 pb-0"
                                                 >
                                                 <v-text-field
                                                    v-model="address1"
                                                    label="Address 1"
                                                    required
                                                    ></v-text-field>
                                              </v-col>
                                              <v-col
                                                 cols="12"
                                                 md="12" class="pt-0 pb-0"
                                                 >
                                                 <v-text-field
                                                    v-model="address2"
                                                    label="Address 2"
                                                    required
                                                    ></v-text-field>
                                              </v-col>
                                              <v-col
                                                 cols="12" md="6" class="pt-0 pb-0"
                                                 >
                                                 <v-text-field
                                                    v-model="abccompany"
                                                    label="ABC company"
                                                    required
                                                    ></v-text-field>
                                              </v-col>
                                              <v-col
                                                 cols="12"
                                                 md="6" class="pt-0 pb-0 phone-check"
                                                 >
                                                 <v-text-field
                                                    v-model="phone1"
                                                    label="(816) 445-8126"
                                                    required
                                                    ></v-text-field>
                                                    <span><v-checkbox v-model="checkbox4" :label="`Text`"></v-checkbox></span>
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
                                              <v-col cols="12" class="mt-8 source-comments">
                                                <v-textarea
                                                  outlined
                                                  name="input-7-4"
                                                  value="Source Comments"
                                                ></v-textarea>
                                              </v-col>
                                            </v-row>
                                          </v-col>
                                       </v-row>
                                     </v-form>
                                </v-col>
                            </v-row>
                        </v-container>
                    </div>
                </div>
                <div class="customer-evaluation-step text-center" v-if="current_step == 2">
                    <h1>Evaluation</h1>
                </div>
                <div class="customer-bids-step text-center" v-if="current_step == 3">
                    <h1>Bids</h1>
                </div>
                <div class="customer-activity-step text-center" v-if="current_step == 4">
                    <h1>Activity</h1>
                </div>
                <div class="customer-insights-step text-center" v-if="current_step == 5">
                    <h1>Insights</h1>
                </div>
                <div class="customer-locations-step text-center" v-if="current_step == 6">
                    <h1>Locations</h1>
                </div>
                <div class="customer-contacts-step text-center" v-if="current_step == 7">
                    <h1>Contacts</h1>
                </div>
                <div class="customer-warranty-step text-center" v-if="current_step == 8">
                    <h1>Warranty</h1>
                </div>
                <div class="customer-reviews-step text-center" v-if="current_step == 9">
                    <h1>Reviews</h1>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
   export default {
     data () {
       return {
        current_step: '1',
        activeBtn: 0,
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
<style type="text/css">
.tab-wrap-menu {
    box-shadow: none !important;
    height: auto !important;
}
.tab-wrap-menu button {
    margin: 0 20px !important;
}
.tab-wrap-menu button, .tab-wrap-menu button span {
    font-size: 17px !important;
    line-height: 25px;
    font-weight: 400 !important;
    color: #989B9F !important;
        letter-spacing: 0;
    text-transform: capitalize;
}
.tab-wrap-menu button.v-btn--active, .tab-wrap-menu button.v-btn--active span  {
    color: #0157A0 !important;
}
.tab-wrap-menu button.v-btn--active:after {
  content: "" !important;
  position: absolute;
  width: 100%;
  height: 2px;
  box-shadow: none !important;
  background: #0157A0;
  bottom: -5px;
}
.tab-wrap-menu button:before {
    content: none !important; 
}
.tab-wrap-menu button.v-btn:not(.v-btn--round).v-size--default {
    padding: 0 !important;
    max-width: initial !important;
    min-width: inherit !important;
}
.tab-wrap-menu button span + span {
    display: none !important;
}
.tab-wrap-menu button span:before {
  content: "";
  position: absolute;
  width: 5px;
  height: 5px;
  background: #0157A0;
  border-radius: 100%;
  right: -15px;
  top: 50%;
  transform: translateY(-50%);
  opacity: 0;
  visibility: hidden;
}
.tab-wrap-menu button.v-btn--active span:before {
  opacity: 1;
  visibility: visible;
}
.customer-title h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 37px;
    color: #000000;
}
.customer-title {
    display: flex;
    align-items: center;
}
.customer-title h6 {
    margin-left: 80px;
    font-style: normal;
    font-weight: 500;
    display: flex;
    font-size: 19px;
    line-height: 28px;
    color: #0157A0;
    align-items: center;
}
.customer-title h6 span {
    margin-left: 19px;
}
.customer-details-wrap {
    margin-top: 40px;
}
.no-checkbox .v-input--selection-controls__input {
    display: none;
}
.phone-check .v-input--selection-controls__input {
    margin: 0 0 0 8px;
    order: 2;
}
.v-application .phone-check .primary--text, .v-application .ac-check-box .primary--text {
    color: rgba(126, 133, 148, 0.8) !important;
}
.customer-detail-main {
        max-width: 100% !important; 
    padding: 0 !important; 
}
@media only screen and (max-width: 1263px) {
.customer-details-wrap .ac-check-box ul li {
    width: 100%;
    margin: 0 !important;
}
}
@media only screen and (max-width: 1199px) {
.v-application  .customer-detail-main .tab-wrap {
    padding-top: 20px !important;
}
.customer-detail-main .tab-contant > div {
    margin: 10px 0 0 0 !important;
}
.v-item-group.v-bottom-navigation {
    flex-wrap: wrap;
}
.tab-wrap-menu button.v-btn:not(.v-btn--round).v-size--default {
    margin: 9px 20px !important;
}
}
@media only screen and (max-width: 991px) {
.customer-details-wrap {
    margin-top: 20px;
}
.customer-details-wrap > div > div > div {
    padding-top: 0;
    padding-bottom: 0;
}
}
@media only screen and (max-width: 599px) {
.v-application .source-comments {
    margin-top: 0 !important;
}
.tab-wrap-menu button, .tab-wrap-menu button span {
    font-size: 14px !important;
}
.tab-wrap-menu button span:before {
    right: -9px;
}
.tab-wrap-menu button.v-btn:not(.v-btn--round).v-size--default {
    margin: 4px 10px !important;
}
.v-application .customer-detail-main .tab-wrap {
    padding-top: 10px !important;
}
.customer-detail-main .tab-contant > div {
    margin: 0 !important;
}
.customer-details-wrap {
    margin-top: 20px;
}
.customer-details-wrap > div > div > div {
    padding-top: 0;
    padding-bottom: 0;
}
.v-application .customer-details-wrap form > div > div {
    padding: 0 12px 0 12px !important;
}
.v-application .customer-details-wrap form > div > div > .row > div {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
}
.customer-title h1 {
  font-size: 22px;
    width: 100%;
}
.customer-title {
    flex-wrap: wrap;
}
.customer-title h6 {
  font-size: 16px;
  width: 100%;
  margin: 5px 0 0 0;
}
.customer-title img {
    max-width: 16px;
}
}
</style>
