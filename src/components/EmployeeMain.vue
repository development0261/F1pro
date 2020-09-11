<template>
    <v-container class="customer-detail-main">
        <v-row class="pt-15 tab-wrap mr-0 ml-0">
            <v-col cols="12" class="emp_main_nav_bar">
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
                                                    width="150px"
                                                    class="img-class"
                                                    >
                                                 </v-img>
                                                 <!-- <v-img
                                                    :src="require('../assets/pencil.png')"
                                                    contain
                                                    class="pencil-icon"
                                                    >
                                                 </v-img> -->
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
                    <template>
                       <v-container>
                          <v-row class="customer-search-wrap">
                             <v-col cols="12" md="4">
                                <v-text-field
                                   label="Regular"
                                   class="search"
                                   append-icon="mdi-magnify"
                                   ></v-text-field>
                             </v-col>
                             <v-col cols="12" class="customer-search-table">
                                <v-data-table
                                   :headers="headers_new"
                                   :items="desserts_new"
                                   class="elevation-1 cursor-pointer"
                                   @click:row="customerDetail"
                                   ></v-data-table>
                             </v-col>
                          </v-row>
                       </v-container>
                    </template>
                </div>
                <div class="customer-bids-step text-center" v-if="current_step == 3">
                    <template>
  <v-container class="division_bar">
      <v-row>

         <v-col cols="6">
               <h1 class="System_admin_text_division">Traning Record</h1>
         </v-col>

         <v-col cols="1"></v-col>

         <v-col cols="2"></v-col>

         <v-col cols="3">
            <div class="header-add-division">
              <a href="/"><span><i class="fa fa-download" aria-hidden="true"></i> Export</span></a>
            </div>
         </v-col>
      </v-row>

     <v-row class="main_bar">
          <v-col cols="3" class="md-3" style="line-height: 35px;">
            <span >Division</span>
          </v-col>
          <v-col cols="9" class="md-3" style="line-height: 35px;">
            <span>Div Description</span>
          </v-col>
      </v-row> 

      <v-row>
          <v-col cols="3" class="md-3">
             <v-text-field
               class="search" 
               autocomplete="off"
               ></v-text-field>
          </v-col>

          <v-col cols="3" class="md-3">
             <v-text-field
               class="search"
               autocomplete="off"
               ></v-text-field>
          </v-col>

      </v-row> 
      <br>
      <v-row class="customer-search-wrap">
         <v-col cols="3" class="table_border_css_division">
           <span class="text-css">FRWP</span>
         </v-col>
         <v-col cols="5" class="table_border_css_left"><span class="text-css">Foundation Repair / Waterproofing</span></v-col>

         <v-col cols="4" class="table_border_css_left"><span class="text-css"><strong>DivisionsMaster</strong></span></v-col>
      </v-row>

      <v-row class="customer-search-wrap">
         <v-col cols="3" class="table_border_css_division">
           <span class="text-css">CN</span>
         </v-col>
         <v-col cols="9" class="table_border_css_left"><span class="text-css">Concrete</span></v-col>
      </v-row>

      <v-row class="customer-search-wrap">
         <v-col cols="3" class="table_border_css_division">
           <span class="text-css">MJ</span>
         </v-col>
         <v-col cols="9" class="table_border_css_left"><span class="text-css">Mudjacking</span></v-col>
      </v-row>

      <v-row class="customer-search-wrap">
         <v-col cols="3" class="table_border_css_division">
           <span class="text-css">HS</span>
         </v-col>
         <v-col cols="9" class="table_border_css_left"><span class="text-css">Hardscapes</span></v-col>
      </v-row>

      <v-row class="btn_css">
          <v-col cols="6"></v-col>
          <v-col cols="4"></v-col>
          <v-col cols="2">
            <div class="header-add-systemAdmin">
              <a href="#/SystemAdmin"><span>Back</span></a>
            </div>
          </v-col>
      </v-row>
  </v-container>
</template>


                </div>

                <!--cCompenstation-->
                <div class="customer-activity-step" v-if="current_step == 4">
                    <v-row>
                      <v-col cols="1"></v-col>
                      <v-col cols="10">
                        <v-row>
                          <v-col cols="3">
                            <h1 class="text_css_compenstation">Compenstation</h1>
                              <v-row>
                                 <div class="user-profile">
                                   <v-img
                                      :src="require('../assets/user.png')"
                                      contain
                                      height="200px"
                                      width="150px"
                                      class="img-class"
                                      >
                                   </v-img>
                                 </div>
                              </v-row>
                          </v-col>

                          <v-col cols="9">
                            <div class="user-bio">
                              <span class="text_nickname_css"><p>Nickname:<span><strong class="ans_css">     Nicole</strong></span></p></span>
                              <span class="text_nickname_css"><p>Full Name:<span><strong class="ans_css">    Nicole Linebach</strong></span></p></span>
                            </div>
                            <span class="text_nickname_css"><p class="ss_Css">SS#:<span><strong class="ans_css">  096745</strong></span></p></span>
                          </v-col>
                        </v-row>
                      </v-col>
                      <v-col cols="1"></v-col>
                    </v-row>

                    <v-row>
                      <v-col cols="1"></v-col>
                      <v-col cols="10">
                        <template>
                           <v-container>
                              <v-row class="customer-search-wrap">
                                 <v-col cols="12" md="4" class="pt-0 pb-0">
                                    <v-text-field
                                       label="Regular"
                                       class="search"
                                       append-icon="mdi-magnify"
                                       ></v-text-field>
                                 </v-col>
                                 <v-col cols="12" class="customer-search-table">
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


                <!--Time Off-->
                <div class="customer-insights-step text-center" v-if="current_step == 5">
                    <v-row>
                      <h1 style="margin-left: 7%;">Time Off</h1>
                    </v-row>

                    <v-row>
                        <div class="container main_row_employeemain">
                          <v-row>
                              <v-col cols="4">
                                <span class="text-left custome_class"><p>Nickname:<span><strong>Nicole</strong></span></p></span>
                              </v-col>

                              <v-col cols="4">
                                <span class="text-left custome_class"><p>Full Name:<span><strong>   Nicole Linebach</strong></span></p></span>
                              </v-col>

                              <v-col cols="4">
                                <span class="text-right custome_class"><p>SS#:<span><strong>096745</strong></span></p></span>
                              </v-col>

                          </v-row>
                        </div>
                    </v-row>
                      <v-container>
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
                                                    width="150px"
                                                    class="img-class"
                                                    >
                                                 </v-img>
                                                 <!-- <v-img
                                                    :src="require('../assets/pencil.png')"
                                                    contain
                                                    class="pencil-icon"
                                                    >
                                                 </v-img> -->
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
                                                 cols="12" md="6" class="pt-0 pb-0"
                                                 >
                                                 <v-text-field
                                                 label="11:00 Am"
                                                    required
                                                    ></v-text-field>
                                              </v-col>
                                              <v-col
                                                 cols="12"
                                                 md="6" class="pt-0 pb-0 phone-check"
                                                 >
                                                 <v-text-field
                                                    v-model="phone1"
                                                    label="12:00 Pm"
                                                    required
                                                    ></v-text-field>
                                              </v-col>

                                              <v-col
                                                 cols="12"
                                                 md="6" class="pt-0 pb-0"
                                                 >
                                                    <v-text-field
                                                    v-model="phone1"
                                                    label="8:00 Hours"
                                                    required
                                                    ></v-text-field>
                                              </v-col>

                                              <v-col
                                                 cols="12"
                                                 md="6" class="pt-0 pb-0"
                                                 >
                                                    <v-select
                                                    :items="headers"
                                                    label="PTO"
                                                  ></v-select>
                                              </v-col>
                                             
                                            </v-row>
                                          </v-col>
                                       </v-row>
                                     </v-form>
                                </v-col>
                            </v-row>
                      </v-container>
                </div>
                <!--end Time Off-->
               
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

         headers_new: [
           {
             text: 'Activity Type',
             value: 'ActivityType',
           },
           { text: 'Scheduled Date', value: 'ScheduledDate' },
           { text: 'Completed Date', value: 'CompletedDate' },
           { text: 'Entered By', value: 'EnteredBy' },
           { text: 'Created', value: 'Created' },
           { text: 'Comments', value: 'Comments' },
         ],

         desserts: [
           {
             EffectiveDate: 'Effective Date',
             Comp: '$16.25',
             PerHourWeek: 'Per Hour',
             Current: '',
             Comments: '',
           },
           {
             EffectiveDate: '1/1/2020',
             Comp: '$16.25',
             PerHourWeek: 'Per Hour',
             Current: '',
             Comments: 'Promoted to Foreman',
           },
           {
             EffectiveDate: '06/12/2020',
             Comp: '$16.25',
             PerHourWeek: 'Per Hour',
             Current: '',
             Comments: '90 Day promotion',
           },
           {
             EffectiveDate: '06/12/2020',
             Comp: '$16.25',
             PerHourWeek: 'Per Hour',
             Current: '',
             Comments: 'New Hire',
           },
         ],


         desserts_new: [
           {
             ActivityType: '',
             ScheduledDate: '',
             CompletedDate:'',
             EnteredBy: '',
             Created:'',
             Comments: '',
           },
           {
             ActivityType: 'Call1',
             ScheduledDate: '06/12/2020',
             CompletedDate: '06/12/2020',
             EnteredBy: 'Curt',
             Created:'9/6/20',
             Comments: 'Lorem ipsum dolor sit amert',
           },
           {
             ActivityType: 'Stanley',
             ScheduledDate: '06/12/2020',
             CompletedDate: '06/12/2020',
             EnteredBy: 'Curt',
             Created:'9/6/20',
             Comments: 'Lorem ipsum dolor sit amert',
           },
           {
             ActivityType: 'Loveall',
             ScheduledDate: '06/12/2020',
             CompletedDate: '06/12/2020',
             EnteredBy: 'Curt',
             Created:'9/6/20',
             Comments: 'Lorem ipsum dolor sit amert',
           },
           {
             ActivityType: 'Stanley',
             ScheduledDate: '06/12/2020',
             CompletedDate: '06/12/2020',
             EnteredBy: 'Curt',
             Created:'9/6/20',
             Comments: 'Lorem ipsum dolor sit amert',
           },
           {
             ActivityType: 'Call1',
             ScheduledDate: '06/12/2020',
             CompletedDate: '06/12/2020',
             EnteredBy: 'Curt',
             Created:'9/6/20',
             Comments: 'Lorem ipsum dolor sit amert',
           },
           {
             ActivityType: 'Loveall',
             ScheduledDate: '06/12/2020',
             CompletedDate: '06/12/2020',
             EnteredBy: 'Curt',
             Created:'9/6/20',
             Comments: 'Lorem ipsum dolor sit amert',
           },
           {
             ActivityType: 'Stanley',
             ScheduledDate: '06/12/2020',
             CompletedDate: '06/12/2020',
             EnteredBy: 'Curt',
             Created:'9/6/20',
             Comments: 'Lorem ipsum dolor sit amert',
           },
           {
             ActivityType: 'Call1',
             ScheduledDate: '06/12/2020',
             CompletedDate: '06/12/2020',
             EnteredBy: 'Curt',
             Created:'9/6/20',
             Comments: 'Lorem ipsum dolor sit amert',
           },
           {
             ActivityType: 'Loveallss',
             ScheduledDate: '06/12/2020',
             CompletedDate: '06/12/2020',
             EnteredBy: 'Curt',
             Created:'9/6/20',
             Comments: 'Lorem ipsum dolor sit amert',
           },
           {
             ActivityType: 'Stanley',
             ScheduledDate: '06/12/2020',
             CompletedDate: '06/12/2020',
             EnteredBy: 'Curt',
             Created:'9/6/20',
             Comments: 'Lorem ipsum dolor sit amert',
           },
           {
             ActivityType: 'Call1',
             ScheduledDate: '06/12/2020',
             CompletedDate: '06/12/2020',
             EnteredBy: 'Curt',
             Created:'9/6/20',
             Comments: 'Lorem ipsum dolor sit amert',
           },
           {
             ActivityType: 'Stanley',
             ScheduledDate: '06/12/2020',
             CompletedDate: '06/12/2020',
             EnteredBy: 'Curt',
             Created:'9/6/20',
             Comments: 'Lorem ipsum dolor sit amert',
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
.emp_main_nav_bar
{
  margin-left: -17%;
}

.custome_class
{
  line-height: 4px;
}

.main_row_employeemain
{
  background: #F3F3F3;
  height: 50px;
  width: 100%;
border-radius: 4px;
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

.text_nickname_css
{
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 25px;
  color: #7E8594;
}

.ans_css
{
  color: black;
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

.v-image .v-responsive .img-class .theme--light
  {
    height: 0px!important;
    width: 0px !important;
  }

.pencil-icon
{
  margin-bottom: 0px;
}

.customer-details-wrap
{
  margin-top: 0px;
}

/*.v-responsive__sizer
{
  padding-bottom: 7% !important;
}
*/

.System_admin_text_division
{
  margin-left: -12px;
    font-family: Poppins;
    font-style: normal;
    font-size: 25px;
    color: #000000;
    font-weight: 500;
}
.header-add-division {
    max-width: 140px;
}
.header-add-division a {
    font-weight: 500;
    font-size: 15px;
    line-height: 22px;
    background: #20E0A5;
    box-shadow: 0px 4px 10px rgba(1, 87, 160, 0.25);
    color: #fff !important;
    padding: 12px 35px;
    border-radius: 60px;
}
.header-add-division
{
  text-align: right;
    margin-left: 50%;
}
.division_bar
{
  padding-top: 55px;
}
.cursor-pointer{
  cursor: pointer;
}
.v-data-table
{
  width: 100%;
}

/*.v-application--is-ltr .offset-md-1
{
  margin-left: 0px !important;
}*/
.table_border_css_division
{
    border: 1px solid rgba(196, 196, 196, 0.37);
    border-radius: 4px;
    height: 50px;
}
.main_header_css
{
  padding-left: 8%;
}
.btn_css
{
      padding-top: 74px;
    text-align: right;
    margin-left: 40%;
}
.border_Css
{
  padding-top: 3%;
  border-bottom: 1px solid rgba(126, 133, 148, 0.8);;
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
  .text_nickname_css
  {
    margin-left: 30px;
  }
}

@media only screen and (max-width: 587px) 
{
    .user-profile
    {
      height: 100px;
      width: 100px;
    }
    .ss_Css
    {
      margin-left: 30px;
    }
    .custome_class
    {
      line-height: 0px !important;
    }
}

@media only screen and (max-width: 1024px) 
{
  .emp_main_nav_bar
  {
    margin-left: 0px !important; 
  }
}
</style>