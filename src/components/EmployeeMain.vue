<template>
    <v-container class="customer-detail-main">
        <v-row class="pt-15 tab-wrap mr-0 ml-0">
            <v-col cols="12" style="margin-left: -17%;">
                <div class="tab-wrap">
                    <v-bottom-navigation :value="activeBtn" class="tab-wrap-menu">
                        <v-btn @click="change_step(1)">Employee Details</v-btn>
                        <v-btn @click="change_step(2)">Activity</v-btn>
                        <v-btn @click="change_step(3)">Training Record</v-btn>
                        <v-btn @click="change_step(4)">Compensation</v-btn>
                        <v-btn @click="change_step(5)">Time Off</v-btn>
                    </v-bottom-navigation>
                </div>
            </v-col>
        </v-row>
        <v-row class="tab-contant mr-0 ml-0">
            <v-col cols="12" class="mt-10 pr-0 pl-0">
                <div class="customer-detail-step" v-if="current_step == 1">
                    
                    <div class="customer-details-wrap">
                        <v-container>
                            <v-row>
                                <v-col cols="12">
                                    <div class="customer-title">
                                        <h1>Employee Details</h1>
                                        <h6><img src="../assets/user-icon.png" alt="user-icon"><span>Justin drew</span></h6>
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
                                                 md="3" class="pt-0 pb-0"
                                                 >
                                                 <div class="user-profile">
                                                 <v-img
                                                    :src="require('../assets/user.png')"
                                                    contain
                                                    height="200px"
                                                    width="150px"
                                                    class="img-class"
                                                    >
                                                 </v-img>
                                                 <v-img
                                                    :src="require('../assets/pencil.png')"
                                                    contain
                                                    height="200px"
                                                    width="150px"
                                                    class="pencil-icon"
                                                    >
                                                 </v-img>
                                               </div>
                                              </v-col>
                                              <v-col
                                                 cols="12"
                                                 md="9" class="pt-0 pb-0"
                                                 >
                                                 <v-text-field
                                                    v-model="david"
                                                    label="David"
                                                    required
                                                    ></v-text-field>
                                                    <v-text-field
                                                    v-model="Constructor"
                                                    label="Constructor"
                                                    required
                                                    ></v-text-field>
                                              </v-col>
                                              <v-col
                                                 cols="12" class="pt-0 pb-0"
                                                 >
                                                 <v-text-field
                                                    v-model="Constructor"
                                                    label="Constructor"
                                                    required
                                                    ></v-text-field>
                                              </v-col>
                                              
                                              <v-col
                                                 cols="12" md="6" class="pt-0 pb-0"
                                                 >
                                                 <v-text-field
                                                    v-model="Kansas"
                                                    label="Kansas"
                                                    required
                                                    ></v-text-field>
                                              </v-col>
                                              <v-col
                                                 cols="12"
                                                 md="6" class="pt-0 pb-0"
                                                 >
                                                 <v-text-field
                                                    v-model="ST"
                                                    label="ST"
                                                    required
                                                    ></v-text-field>
                                              </v-col>
                                              <v-col
                                                 cols="12" md="6" class="pt-0 pb-0"
                                                 >
                                                 <v-text-field
                                                    label="93732"
                                                    required
                                                    ></v-text-field>
                                              </v-col>
                                              <v-col
                                                 cols="12"
                                                 md="6" class="pt-0 pb-0"
                                                 >
                                                    <v-select
                                                    :items="headers"
                                                    label="Select"
                                                  ></v-select>
                                              </v-col>
                                             <v-col
                                                 cols="12" md="6" class="pt-0 pb-0"
                                                 >
                                                 <v-text-field
                                                    label="Text"
                                                    required
                                                    ></v-text-field>
                                              </v-col>
                                              <v-col
                                                 cols="12"
                                                 md="6" class="pt-0 pb-0"
                                                 >
                                                 <v-text-field
                                                    label="SSN#"
                                                    required
                                                    ></v-text-field>
                                              </v-col>
                                              <v-col
                                                 cols="12" md="6" class="pt-0 pb-0"
                                                 >
                                                 <v-text-field
                                                    label="Start Date"
                                                    required
                                                    ></v-text-field>
                                              </v-col>
                                              <v-col
                                                 cols="12"
                                                 md="6" class="pt-0 pb-0"
                                                 >
                                                 <v-text-field
                                                    label="Compensation"
                                                    required
                                                    ></v-text-field>
                                              </v-col>

                                              <v-col
                                                 cols="12"
                                                 md="6" class="pt-0 pb-0"
                                                 >
                                                 <v-text-field
                                                    label="DOT Physical Date"
                                                    required
                                                    ></v-text-field>
                                              </v-col>
                                              <!-- <v-col cols="12">
                                                <div class="ac-check-box">
                                                  <ul>
                                                    <li><v-checkbox v-model="checkbox1" :label="`Opt Out Snail Mail`"></v-checkbox></li>
                                                    <li><v-checkbox v-model="checkbox2" :label="`Opt Out Email`"></v-checkbox></li>
                                                    <li><v-checkbox v-model="checkbox3" :label="`Opt Out Text:`"></v-checkbox></li>
                                                  </ul>
                                                  
                                                  </div>
                                              </v-col> -->
                                            </v-row>
                                          </v-col>

                                          <v-col cols="12" sm="6" class="pl-7">
                                            <v-row>
                                              <v-col
                                                 cols="12" class="pt-0 pb-0"
                                                 >
                                                 <v-text-field
                                                    label="18363 street road"
                                                    required
                                                    ></v-text-field>
                                              </v-col>
                                              <v-col
                                                 cols="12" class="pt-0 pb-0"
                                                 >
                                                 <v-text-field
                                                    label="18363 north street road, CA"
                                                    required
                                                    ></v-text-field>
                                              </v-col>

                                              <v-col
                                                 cols="12" md="6" class="pt-0 pb-0"
                                                 >
                                                 <v-text-field
                                                 label="example@gmail.com"
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
                                                 md="6" class="pt-0 pb-0"
                                                 >
                                                    <v-select
                                                    :items="headers"
                                                    label="Select Foreman"
                                                  ></v-select>
                                              </v-col>

                                              <v-col
                                                 cols="12"
                                                 md="6" class="pt-0 pb-0"
                                                 >
                                                    <v-select
                                                    :items="headers"
                                                    label="Select Evaluator"
                                                  ></v-select>
                                              </v-col>

                                              <v-col
                                                 cols="12"
                                                 md="6" class="pt-0 pb-0"
                                                 >
                                                    <v-select
                                                    :items="headers"
                                                    label="Select hour"
                                                  ></v-select>
                                              </v-col>

                                              <v-col
                                                 cols="12"
                                                 md="6" class="pt-0 pb-0"
                                                 >
                                                    <span><v-checkbox v-model="checkbox4" :label="`Text`"></v-checkbox></span>
                                              </v-col>


                                              <v-col
                                                 cols="12"
                                                 md="6" class="pt-0 pb-0"
                                                 >
                                                 <v-text-field
                                                    label="Drivers License Number"
                                                    required
                                                    ></v-text-field>
                                              </v-col>

                                              <v-col
                                                 cols="12"
                                                 md="6" class="pt-0 pb-0"
                                                 >
                                                 <v-text-field
                                                    label="DL Expiration Date"
                                                    required
                                                    ></v-text-field>
                                              </v-col>

                                              <v-col
                                                 cols="12"
                                                 md="6" class="pt-0 pb-0"
                                                 >
                                                 <v-text-field
                                                    label="Alt ID#"
                                                    required
                                                    ></v-text-field>
                                              </v-col>

                                              <v-col
                                                 cols="12"
                                                 md="6" class="pt-0 pb-0"
                                                 >
                                                 <v-text-field
                                                    label="DL Type"
                                                    required
                                                    ></v-text-field>
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
                <div class="customer-activity-step" v-if="current_step == 4">
                    <v-row>
                    <v-col cols="6">
                      <h1 class="text-center text_css_compenstation">Compenstation</h1>
                        <v-row>
                            <v-col cols="4" class="" style="margin-left: 35%;">
                                <v-img
                                  :src="require('../assets/user.png')"
                                  contain
                                  height="200px"
                                  width="150px"
                                  class="img-class"
                                  >
                               </v-img>
                            </v-col>
                           <v-col cols="4" class=""></v-col>
                           <v-col cols="4" class=""></v-col>
                        </v-row>
                    </v-col>

                    <v-col cols="6">
                        <div class="user-bio">
                          <span><p>Nickname:<span><strong> Nicole</strong></span></p></span>
                          <span><p>Full Name:<span><strong> Nicole Linebach</strong></span></p></span>
                        </div>
                    </v-col>
                    </v-row>

                    <v-row>
                      <v-col cols="1"></v-col>
                      <v-col cols="10">
                        <template>
                           <v-container>
                              <v-row class="sc-title mt-7">
                                 <v-col cols="10" class="offset-md-1"></v-col>
                              </v-row>
                              <v-row class="customer-search-wrap pt-5 pb-5">
                                 <v-col cols="10" md="4" class="pt-0 pb-0 offset-md-1">
                                    <v-text-field
                                       label="Regular"
                                       class="search"
                                       append-icon="mdi-magnify"
                                       ></v-text-field>
                                 </v-col>
                                 <v-col cols="10" class="customer-search-table offset-md-1">
                                    <v-data-table
                                       :headers="headers"
                                       :items="desserts"
                                       class="elevation-1 cursor-pointer"
                                       ></v-data-table>
                                 </v-col>
                              </v-row>
                           </v-container>
                        </template>
                      </v-col>
                      <v-col cols="1"></v-col>
                    </v-row>

                </div>
                <div class="customer-insights-step text-center" v-if="current_step == 5">
                    <h1>Insights</h1>
                </div>
               
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
   export default {
     data () {
       return {
         headers: [
           {
             text: 'Effective Date',
             value: 'EffectiveDate',
           },
           { text: 'Comp', value: 'Comp' },
           { text: 'Per Hour/ Week', value: 'PerHourWeek' },
           { text: 'Current', value: 'Current' },
           { text: 'Comments', value: 'Comments' },
         ],
         desserts: [
           {
             EffectiveDate: 'Effective Date',
             Comp: '$16.25',
             PerHourWeek: 'Per Hour',
             Current: 'Kansas City',
             Comments: 'Promoted to Foreman',
           },
           {
             EffectiveDate: '1/1/2020',
             Comp: '$16.25',
             PerHourWeek: 'Per Hour',
             Current: 'Overland Park',
             Comments: 'Promoted to Foreman',
           },
           {
             EffectiveDate: '06/12/2020',
             Comp: '$16.25',
             PerHourWeek: 'Per Hour',
             Current: 'Olathe',
             Comments: 'Promoted to Foreman',
           },
           {
             EffectiveDate: '06/12/2020',
             Comp: '$16.25',
             PerHourWeek: 'Per Hour',
             Current: 'Blue Springs',
             Comments: 'Promoted to Foreman',
           },
         ],
         current_step: '1',
        activeBtn: 0,
       }
     },
     methods:{
      change_step(id)
      {
        this.current_step = id
      },
      customerDetail(value)
      {
        console.log(value.FirstName) // Get customer firstname
        this.$router.push('/CustomerDetails')
      }
     }
   }
</script>
<style type="text/css">
.sc-title .col {
   padding-top: 0 !important;
   padding-bottom: 0 !important;
}
.sc-title h1 {
   font-family: Poppins;
   font-weight: 500;
   font-size: 25px;
   line-height: 37px;
   color: #000000;
}
.customer-search-wrap .col {
   padding-top: 0 !important;
   padding-bottom: 0 !important;
}
.customer-search-table .v-data-table {
    border-radius: 0;
    box-shadow: none !important;
}
.customer-search-table .v-data-table table {
    border: none !important;
}
.customer-search-table .v-data-table table th {
    border: none !important;
    color: #2D2D2D !important;
    font-family: Poppins;
    font-weight: normal;
    white-space: nowrap;
    font-size: 14px !important;
    height: 50px !important;
    padding: 0px 30px !important;
}
.customer-search-table .v-data-table table td {
    border: none !important;
}
thead.v-data-table-header tr th:first-child {
    border-radius: 5px 0 0 5px;
}
thead.v-data-table-header tr th {
    background-color: #F3F3F3;
}
thead.v-data-table-header tr th:last-child {
    border-radius: 0 5px 5px 0;
}
.customer-search-table .v-data-table table tbody tr:last-child td {
    border-bottom: 1px solid #C4C4C4 !important;
}
.customer-search-table .v-data-table table td {
    padding: 0 30px !important;
    height: 50px !important;
    border-top: 1px solid #C4C4C4 !important;
    white-space: nowrap;
}
.customer-search-table .v-data-table table td:first-child {
    border-left: 1px solid #C4C4C4 !important;
    border-radius: 5px 0 0 5px;
}
.customer-search-table .v-data-table table td:last-child {
    border-right: 1px solid #C4C4C4 !important;
    border-radius: 0 5px 5px 0;
}
.customer-search-table .v-data-footer .v-data-footer__select, .customer-search-table .v-data-footer  .v-data-footer__pagination {
    display: none;
}
.customer-search-table .v-data-footer {
    margin-top: 30px;
    border: none !important;
}
.customer-search-table .v-data-footer button {
    background: #DEE9F3;
}
.customer-search-table .v-data-footer button * {
    color: #0089F3 !important;
}
.customer-search-table th .v-icon:before {
    content: "\f0d8";
    font-family: FontAwesome;
    color: #000;
    font-size: 16px;
    position: relative;
    top: -5px;
    left: 10px;
}
.customer-search-table th .v-icon {
    transform: none !important;
    opacity: 1 !important;
}
.customer-search-table th .v-icon:after {
    content: "\f0d7";
    font-family: FontAwesome;
    opacity: 1 !important;
    background: transparent !important;
    transform: none !important;
    color: #000;
    font-style: normal;
    position: relative;
    top: 3px;
    font-size: 16px;
    left: 1px;
}
.cursor-pointer{
  cursor: pointer;
}
.user-bio > span {
    display: inline-block;
    margin-right: 30px;
}

.user-bio {
    margin-top: 100px;
}
.v-data-table > .v-data-table__wrapper > table > tbody > tr > td, .v-data-table > .v-data-table__wrapper > table > thead > tr > td, .v-data-table > .v-data-table__wrapper > table > tfoot > tr > td{
    font-size: 13px;
    padding-right: 15px !important;
    padding-left: 15px !important;
    height: 45px !important;
}
.v-data-table > .v-data-table__wrapper > table > tbody > tr > th, .v-data-table > .v-data-table__wrapper > table > thead > tr > th, .v-data-table > .v-data-table__wrapper > table > tfoot > tr > th{
    padding-right: 15px !important;
    padding-left: 15px !important;
  }
@media only screen and (max-width: 599px) {
.v-application .sc-title {
    margin-top: 20px !important;
}
.sc-title h1 {
    font-size: 22px;
}
.customer-search-table .v-data-footer {
    margin-top: 0;
}
.v-application .customer-search-wrap {
    padding-top: 0 !important;
}
.sc-title h1 {
    font-size: 22px;
}
.customer-search-table .v-data-footer {
    margin-top: 0;
}
}
@media only screen and (max-width: 587px) {
.customer-search-table .v-data-table table td:first-child {
    border-radius: 0;
    border-left: 0 !important;
}
.customer-search-table .v-data-table table td:last-child {
    border-radius: 0;
    border-right: 0 !important;
}
.customer-search-table .v-data-table__mobile-table-row {
    margin-bottom: 20px;
    display: block !important;
    border: 1px solid  #C4C4C4;
}
}
</style>