<template>
   <v-container>
      <v-row class="row">
         <v-col cols="6">
            <div>
               <h1 class="System_admin_text">System Admin</h1>
            </div>
         </v-col>

         <v-col cols="6">
            <div>

               <h1 class="text-right System_admin_text">1601</h1>

            </div>
         </v-col>
      </v-row>

      <v-row class="row">
          <v-col col="6" class="main_bar_text">Master Files</v-col>
          <v-col col="6" class="main_bar_text_left">System Setup</v-col>
      </v-row>

      <v-row class="row main_bar">
          <v-col col="6" class="text-css main_header_css">File name</v-col>
          <v-col col="6" class="text-css main_header_css_left"><span style="margin-left: -17px;">File name</span></v-col>
      </v-row>


      <v-row class="customer-search-wrap">
         <v-col cols="5" class="table_border_css">
           <a href="#/Division" class="text-color-css"><span class="text-css">Divisions</span></a>

         </v-col>
         <v-col cols="1"></v-col>
         <v-col cols="6" class="table_border_css_left"><span class="text-css">Users</span></v-col>
      </v-row>

      <v-row class="customer-search-wrap">
         <v-col cols="5" class="table_border_css">
           <span class="text-css">Products</span>
         </v-col>
         <v-col cols="1"></v-col>
         <v-col cols="6" class="table_border_css_left">
           <span class="text-css">User Access Profiles</span>

            <span class="text-css">Preferences</span>

         </v-col>
      </v-row>

      <v-row class="customer-search-wrap">
         <v-col cols="5" class="table_border_css">
           <span class="text-css">PTypes</span>
         </v-col>
         <v-col cols="1"></v-col>
         <v-col cols="6" class="table_border_css_left">

            <span class="text-css">Preferences</span>

            <span class="text-css">Media Library</span>

         </v-col>
      </v-row>

      <v-row class="customer-search-wrap">
         <v-col cols="5" class="table_border_css">
           <span class="text-css">Brands</span>
         </v-col>
         <v-col cols="1"></v-col>
         <v-col cols="6" class="table_border_css_left">

            <span class="text-css">Media Library</span>
            

            <span class="text-css">Campaigns</span>

         </v-col>
      </v-row>

      <v-row class="customer-search-wrap">
         <v-col cols="5" class="table_border_css">
           <span class="text-css">Materials</span>
         </v-col>
         <v-col cols="1"></v-col>
         <v-col cols="6" class="table_border_css_left">

            <span class="text-css">Campaigns</span>
            

            <span class="text-css">Warranty Certificates</span>

         </v-col>
      </v-row>

      <v-row class="customer-search-wrap">
         <v-col cols="5" class="table_border_css">
           <span class="text-css">Vendors</span>
         </v-col>
         <v-col cols="1"></v-col>
         <v-col cols="6" class="table_border_css_left">

            <span class="text-css">Warranty Certificates</span>
            

            <span class="text-css">System Communications</span>

         </v-col>
      </v-row>

      <v-row class="customer-search-wrap">
         <v-col cols="5" class="table_border_css">
           <span class="text-css">Units of Measure</span>
         </v-col>
         <v-col cols="1"></v-col>
         <v-col cols="6" class="table_border_css_left">

            <span class="text-css">System Communications</span>
            

            <span class="text-css">Holidays</span>

         </v-col>
      </v-row>

      <v-row class="customer-search-wrap">
         <v-col cols="5" class="table_border_css">
           <span class="text-css">BOM</span>
         </v-col>
         <v-col cols="1"></v-col>

         <v-col cols="6" class="table_border_css_left">
           <span class="text-css">Holidays</span>
         </v-col>


         <v-col cols="6"></v-col>

      </v-row>

      <v-row class="customer-search-wrap">
         <v-col cols="5" class="table_border_css">
           <span class="text-css">Customer Activity</span>
         </v-col>
         <v-col cols="1"></v-col>
         <v-col cols="6"></v-col>
      </v-row>

      <v-row class="customer-search-wrap">
         <v-col cols="5" class="table_border_css">
           <span class="text-css">GeoZones</span>
         </v-col>
         <v-col cols="1"></v-col>
         <v-col cols="6"></v-col>
      </v-row>

      <v-row class="customer-search-wrap">
         <v-col cols="5" class="table_border_css">
           <span class="text-css">CustomerGPA</span>
         </v-col>
         <v-col cols="1"></v-col>
         <v-col cols="6"></v-col>
      </v-row>

      <v-row class="customer-search-wrap">
         <v-col cols="5" class="table_border_css">
           <span class="text-css">Cust Job Description</span>
         </v-col>
         <v-col cols="1"></v-col>
         <v-col cols="6"></v-col>
      </v-row>

      <v-row class="customer-search-wrap">
         <v-col cols="5" class="table_border_css">
           <span class="text-css">Customer Source</span>
         </v-col>
         <v-col cols="1"></v-col>
         <v-col cols="6"></v-col>
      </v-row>

      <v-row class="customer-search-wrap">
         <v-col cols="5" class="table_border_css">
           <span class="text-css">Source Groups</span>
         </v-col>
         <v-col cols="1"></v-col>
         <v-col cols="6"></v-col>
      </v-row>

      <v-row class="customer-search-wrap">
         <v-col cols="5" class="table_border_css"><span class="text-css">CustPaymentTerms</span>
         </v-col>
         <v-col cols="1"></v-col>
         <v-col cols="6"></v-col>
      </v-row>

      <v-row class="customer-search-wrap">
         <v-col cols="5" class="table_border_css">
           <span class="text-css">WarrantyProblem</span>
         </v-col>
         <v-col cols="1"></v-col>
         <v-col cols="6"></v-col>
      </v-row>

      <v-row class="customer-search-wrap">
         <v-col cols="5" class="table_border_css">
           <span class="text-css">ReviewRating2</span>
         </v-col>
         <v-col cols="1"></v-col>
         <v-col cols="6"></v-col>
      </v-row>

      <v-row class="customer-search-wrap">
         <v-col cols="5" class="table_border_css">
           <span class="text-css">NoBid Reasons</span>
         </v-col>
         <v-col cols="1"></v-col>
         <v-col cols="6"></v-col>
      </v-row>


      <v-row class="customer-search-wrap">
         <v-col cols="5" class="table_border_css">
           <span class="text-css">ProjChecklists</span>
         </v-col>
         <v-col cols="1"></v-col>
         <v-col cols="6"></v-col>
      </v-row>


      <v-row class="customer-search-wrap">
         <v-col cols="5" class="table_border_css">
           <span class="text-css">ManDayDefaults</span>
         </v-col>
         <v-col cols="1"></v-col>
         <v-col cols="6"></v-col>
      </v-row>


      <v-row class="customer-search-wrap">
         <v-col cols="5" class="table_border_css">
           <span class="text-css">ProjectPrepItems</span>
         </v-col>
         <v-col cols="1"></v-col>
         <v-col cols="6"></v-col>
      </v-row>


      <v-row class="customer-search-wrap">
         <v-col cols="5" class="table_border_css">
           <span class="text-css">OtherCOGS Items</span>
         </v-col>
         <v-col cols="1"></v-col>
         <v-col cols="6"></v-col>
      </v-row>

      <v-row class="customer-search-wrap">
         <v-col cols="5" class="table_border_css">
          <span class="text-css">EmployeeTypes</span>
         </v-col>
         <v-col cols="1"></v-col>
         <v-col cols="6"></v-col>
      </v-row>

      <v-row class="customer-search-wrap">
         <v-col cols="5" class="table_border_css">
           <span class="text-css">Team Activity</span>
         </v-col>
         <v-col cols="1"></v-col>
         <v-col cols="6"></v-col>
      </v-row>

      <v-row class="customer-search-wrap">
         <v-col cols="5" class="table_border_css">
           <span class="text-css">Team Titles</span>
         </v-col>
         <v-col cols="1"></v-col>
         <v-col cols="6"></v-col>
      </v-row>

      <v-row class="customer-search-wrap">
         <v-col cols="5" class="table_border_css">
           <span class="text-css">TrainingEventCodes</span>
         </v-col>
         <v-col cols="1"></v-col>
         <v-col cols="6"></v-col>
      </v-row>

      <v-row class="customer-search-wrap">
         <v-col cols="5" class="table_border_css">
           <span class="text-css">Vehicle Maintenance</span>
         </v-col>
         <v-col cols="1"></v-col>
         <v-col cols="6"></v-col>
      </v-row>

      <v-row class="customer-search-wrap">
         <v-col cols="5" class="table_border_css"><span class="text-css">Equipment Maintenance</span>
         </v-col>
         <v-col cols="1"></v-col>
         <v-col cols="6"></v-col>
      </v-row>


      <v-row>
          <v-col cols="6"></v-col>
          <v-col cols="4"></v-col>
          <v-col cols="2">
            <div class="header-add-systemAdmin">
              <a href="/"><span>Back</span></a>
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
           
           { text: 'Last Name', value: 'LastName' },
           { text: 'Address', value: 'Address' },
           { text: 'City', value: 'City' },
           { text: 'Zip', value: 'Zip' },
           { text: 'Email', value: 'Email' },
           { text: 'Phone', value: 'Phone' },
         ],        
       }
     },
    
   }
</script>
<style type="text/css">
.System_admin_text
{
    font-family: Poppins;
    font-style: normal;
    font-size: 25px;
    color: #000000;
    font-weight: 500;
}
.main_bar
{
  background-color: #F3F3F3;
  border-radius: 4px;
  height: 60px;
}
.main_bar_text
{
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 23px;
    padding-left: 8%;
}

.main_bar_text_left
{
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 23px;
    margin-left: -35px;
}
.table_border_css
{
    padding-left: 8%;
    border: 1px solid rgba(196, 196, 196, 0.37);
    border-radius: 4px;
    height: 50px;
    cursor: pointer;
}

.table_border_css_left
{
    padding-left: 3%;
    border: 1px solid rgba(196, 196, 196, 0.37);
    border-radius: 4px;
    height: 50px;
}
.text-css
{
  line-height: 48px;
  cursor: pointer;
}

.main_header_css
{
  padding-left: 8%;
}
.header-add-systemAdmin {
    max-width: 140px;
}
.header-add-systemAdmin a {
    font-weight: 500;
    font-size: 15px;
    line-height: 22px;
    background: #0157A0;
    box-shadow: 0px 4px 10px rgba(1, 87, 160, 0.25);
    color: #fff !important;
    padding: 12px 35px;
    border-radius: 60px;
}
.text-color-css
{
  color: rgba(0, 0, 0, 0.87) !important;
}


</style>