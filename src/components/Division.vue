<template>
	<v-container class="division_bar">
      <v-row>

         <v-col cols="6">
               <h1 class="System_admin_text_division">Division</h1>
         </v-col>

         <v-col cols="1"></v-col>

         <v-col cols="2">
            <h1 class="text-right System_admin_text">1601</h1>
         </v-col>

         <v-col cols="3">
            <div class="header-add-division">
              <a href="/"><span><i class="fa fa-download" aria-hidden="true"></i> Export</span></a>
            </div>
         </v-col>
      </v-row>

     <v-row class="main_bar">
          <v-col col="3">
            first
          </v-col>
          <v-col col="9">
            second
          </v-col>
      </v-row> 

      <v-row>
          <v-col col="3">
             <v-text-field
               class="search"
               ></v-text-field>
          </v-col>
          <v-col col="9">
            <v-text-field
               class="search"
               ></v-text-field>
          </v-col>
      </v-row> 
      <br>
      <v-row class="customer-search-wrap">
         <v-col cols="3" class="table_border_css_division">
           <span class="text-css">FRWP</span>
         </v-col>
         <v-col cols="5" class="table_border_css_left"><span class="text-css">Foundation Repair / Waterproofing</span></v-col>

         <v-col cols="4" class="table_border_css_left"><span class="text-css">DivisionsMaster</span></v-col>
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

<script>
   export default {
     data () {
       return {
        
       }
     },
   }
</script>

<style type="text/css">
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
</style>