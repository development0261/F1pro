import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';

Vue.config.productionTip = false
window.Vue = require('vue');
Vue.use(VueRouter)
import Main_data from './components/Main_data';
import CustomerSearch from './components/CustomerSearch';
import AddCustomer from './components/AddCustomer';
import CustomerDetails from './components/CustomerDetails';
import Search from './components/Search';
import Assets from './components/Assets';
import Daily from './components/Daily';
import Equipment from './components/Equipment';
import Payroll from './components/Payroll';
import Projects from './components/Projects';
import Reports from './components/Reports';
import Schedule from './components/Schedule';
import Training from './components/Training';
import Vehicles from './components/Vehicles';
import Team from './components/Team';
import Field from './components/Field';
import Books from './components/Books';
import Maint from './components/Maint';
import MyProfile from './components/MyProfile';
import SystemAdmin from './components/SystemAdmin';
import ClockInOut from './components/ClockInOut';
import Help from './components/Help';
import LogOut from './components/LogOut';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';

const routes = [
	{
		path: '/',
		component : Main_data
	},
	{
		path: '/dashboard',
		component : Main_data
	},
	{
		path: '/CustomerSearch',
		component : CustomerSearch
	},
	{
		path: '/AddCustomer',
		component : AddCustomer
	},
	{
		path: '/CustomerDetails',
		component : CustomerDetails
	},
	{
		path: '/Search',
		component : Search
	},
	{
		path: '/Assets',
		component : Assets
	},
	{
		path: '/Daily',
		component : Daily
	},
	{
		path: '/Equipment',
		component : Equipment
	},
	{
		path: '/Payroll',
		component : Payroll
	},
	{
		path: '/Projects',
		component : Projects
	},
	{
		path: '/Reports',
		component : Reports
	},
	{
		path: '/Schedule',
		component : Schedule
	},
	{
		path: '/Training',
		component : Training
	},
	{
		path: '/Vehicles',
		component : Vehicles
	},
	{
		path: '/Team',
		component : Team
	},
	{
		path: '/Field',
		component : Field
	},
	{
		path: '/Books',
		component : Books
	},
	{
		path: '/Maint',
		component : Maint
	},
	{
		path: '/MyProfile',
		component : MyProfile
	},
	{
		path: '/SystemAdmin',
		component : SystemAdmin
	},
	{
		path: '/ClockInOut',
		component : ClockInOut
	},
	{
		path: '/Help',
		component : Help
	},
	{
		path: '/LogOut',
		component : LogOut
	},
	{
		path: '/Login',
		component : Login
	},
	{
		path: '/ForgotPassword',
		component : ForgotPassword
	},
];
const router = new VueRouter({
	routes
})
new Vue({
  vuetify,
  render: h => h(App),
  router
}).$mount('#app')
