<template>
   <v-container fluid>
      <v-row class="sc-title mt-7">
         <v-col cols="10" class="offset-1">
            <div>
               <h1>Team Members</h1>
            </div>
         </v-col>
      </v-row>
      <v-row class="customer-search-wrap pt-5 pb-5">
         <v-col cols="10" md="4" class="pt-0 pb-0 offset-1">
            <v-text-field
               label="Search"
               autocomplete="off"
               class="search"
               append-icon="mdi-magnify"
               ></v-text-field>
         </v-col>
         <v-col cols="6" class="d-flex top-option" style="justify-content: space-between;">
         <v-radio-group v-model="row" row>
            <v-radio label="Active Only" value="radio-1"></v-radio>
            <v-radio label="All" value="radio-2"></v-radio>
          </v-radio-group>

         <div class="header-add">
            <a href="#/"><i class="fa fa-plus" aria-hidden="true"></i><span>Add</span></a>
         </div>
       </v-col>
         <v-col cols="10" class="customer-search-table offset-1">
            <v-data-table
               :headers="headers"
               :items="desserts"
               class="elevation-1 cursor-pointer"
               @click:row="customerDetail"
               ></v-data-table>
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
             text: 'Active',
             value: 'FirstName',
           },
           { text: 'ID#', value: 'LastName' },
           { text: 'Nickname', value: 'Address' },
           { text: 'Full Name', value: 'FullName' },
           { text: 'Division', value: 'Division' },
           { text: 'Title', value: 'Title' },
           { text: 'Email', value: 'Email' },
           { text: 'Phone', value: 'Phone' },
           { text: 'TextNumber', value: 'TextNumber' },
         ],
         desserts: [
           {
             FirstName: 'Active',
             LastName: '08352',
             Address: 'Gatlin',
             FullName:'justin daqmin',
             Division:'CN',
             Title:'Architect',
             Email: 'example@gmail.com',
             Phone: '+911936363927',
             TextNumber: '+911936363927',
           },
           {
             FirstName: 'Active',
             LastName: '08722',
             Address: 'David',
             FullName:'Gatin lopez',
             Division:'HS',
             Title:'Foreman',
             Email: 'example@gmail.com',
             Phone: '+911936363927',
             TextNumber: '+911936363927',
           },
           {
             FirstName: 'Active',
             LastName: '20278',
             Address: 'Justin',
             FullName:'Justin drew',
             Division:'MS',
             Title:'Constructor',
             Email: 'exa@gmail.com',
             Phone: '+911936363927',
             TextNumber: '+911936363927',
           },
           {
             FirstName: 'Active',
             LastName: '08352',
             Address: 'Gatlin',
             FullName:'Gatin lopez',
             Division:'MJ',
             Title:'Foreman',
             Email: 'example@gmail.com',
             Phone: '+911936363927',
             TextNumber: '+911936363927',
           },
           {
             FirstName: 'Active',
             LastName: '08722',
             Address: 'Justin',
             FullName:'Gatin lopez',
             Division:'FRWP',
             Title:'Constructor',
             Email: 'example@gmail.com',
             Phone: '+911936363927',
             TextNumber: '+911936363927',
           },
           {
             FirstName: 'Active',
             LastName: '20278',
             Address: 'David',
             FullName:'Justin drew',
             Division:'FRWP',
             Title:'Foreman',
             Email: 'example@gmail.com',
             Phone: '+911936363927',
             TextNumber: '+911936363927',
           },
           {
             FirstName: 'Active',
             LastName: '08352',
             Address: 'Gatlin',
             FullName:'David drew',
             Division:'JS',
             Title:'Architect',
             Email: 'exa@gmail.com',
             Phone: '+911936363927',
             TextNumber: '+911936363927',
           },
           {
             FirstName: 'Active',
             LastName: '08722',
             Address: 'Justin',
             FullName:'justin daqmin',
             Division:'CN',
             Title:'Constructor',
             Email: 'example@gmail.com',
             Phone: '+911936363927',
             TextNumber: '+911936363927',
           },
           {
             FirstName: 'Active',
             LastName: '20278',
             Address: 'David',
             FullName:'David drew',
             Division:'MS',
             Title:'Architect',
             Email: 'example@gmail.com',
             Phone: '+911936363927',
             TextNumber: '+911936363927',
           },
           {
             FirstName: 'Active',
             LastName: '08352',
             Address: 'Gatlin',
             FullName:'justin daqmin',
             Division:'HS',
             Title:'Foreman',
             Email: 'example@gmail.com',
             Phone: '+911936363927',
             TextNumber: '+911936363927',
           },
           {
             FirstName: 'Active',
             LastName: '08722',
             Address: 'Gatlin',
             FullName:'justin daqmin',
             Division:'MJ',
             Title:'Constructor',
             Email: 'exa@gmail.com',
             Phone: '+911936363927',
             TextNumber: '+911936363927',
           },
           {
             FirstName: 'Active',
             LastName: '20278',
             Address: 'David',
             FullName:'David drew',
             Division:'FRWP',
             Title:'Architect',
             Email: 'example@gmail.com',
             Phone: '+911936363927',
             TextNumber: '+911936363927',
           },
         ],
       }
     },
     methods:{
      customerDetail(value)
      {
        console.log(value.FirstName) // Get customer firstname
        this.$router.push('/')
      }
     }
   }
</script>
<style type="text/css">
  .v-application .primary--text
  {
    color: ##7E8594 !important;
    caret-color: ##7E8594 !important;
  }

.sc-title .col {
   padding-top: 0 !important;
   padding-bottom: 0 !important;
}
.header-add
{
   padding-top: 22px;
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

.v-input theme--light .v-input--selection-controls .v-input--radio-group .v-input--radio-group--row
{
  margin-left: 5% !important;
}
@media only screen and (max-width: 959px) {
.top-option {
    width: 100%;
    justify-content: center !important;
    flex: 0 0 100%;
    max-width: 100%;
}
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
  .header-add
  {
    margin-left: 0px !important;
  }
}
@media only screen and (max-width: 480px) {
.v-application .d-flex.top-option {
    /* display: block !important; */
    flex-wrap: wrap !important;
}

.v-application .d-flex.top-option .v-input {
    width: 100%;
    text-align: center;
}

.v-application .d-flex.top-option .v-input .v-input--radio-group__input {
    justify-content: center;
}

.top-option .header-add {
    padding-top: 0;
    margin-bottom: 30px;
}
}
</style>