'use strict';

import Vue from 'vue';
import App from './components/app';
import router from './router';
import store from './store';

import './components/global';

new Vue({
	el: '#app',
	router,
	store,
	render: c => c(App)
});
