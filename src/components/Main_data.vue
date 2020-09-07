<template>
    <v-containerfluid  class="top-banner-wrap">
       <v-img
          :src="require('../assets/main.png')"
          class="image-css"
          contain
          />
          <v-container>
          <v-row>
            <v-col cols="12">
              <div class="down-menu">
                <ul>
                  <li><a href="#">Foreman View</a></li>
                  <li><a href="#">Evaluator View</a></li>
                </ul>
              </div>
            </v-col>
          </v-row>
        </v-container>
    </v-containerfluid>
</template>

<script>
export default {
    name: 'Main_data',
   data: () => ({
    //
  }),
 }
</script>

<style type="text/css">
.down-menu ul {
    padding: 0 51px 0 0;
    margin: 0;
    text-align: right;
    list-style: none;
}
.down-menu ul li {
    display: inline-block;
}
.down-menu a {
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 25px;
    color: #989B9F !important;
}
.down-menu li + li {
    margin-left: 70px;
}
.down-menu {
    padding: 30px 0;
}
.top-banner-wrap .v-image__image {
    background-size: contain;
}

@media only screen and (max-width: 960px) {
.top-banner-wrap .v-image__image {
    background-size: contain;
}
.down-menu {
    padding: 10px 0;
}
.down-menu li + li {
    margin: 0 0 0 20px;
}
.down-menu ul {
    padding: 0;
}
}

@media only screen and (max-width: 599px) {
.down-menu a {
    font-size: 15px;
}
}
</style>


