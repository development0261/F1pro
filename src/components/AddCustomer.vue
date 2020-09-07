<template>
   <v-container class="add-customer-bg">
      <v-row class="sc-title mt-7">
         <v-col>
            <div>
               <h1>Customer Search</h1>
            </div>
         </v-col>
      </v-row>
      <v-row class="customer-search-wrap pt-5 pb-5">
         <v-col cols="4">
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
               class="elevation-1"
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
             text: 'First Name',
             align: 'start',
             sortable: false,
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
       }
     },
   }
</script>
<style type="text/css">

/* Main Section CSS */
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
/*********************/
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