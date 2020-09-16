import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login";
import Vue3 from "../views/Vue3.0"

Vue.use(VueRouter);

const routes = [{
		path: "/",
		// name: "Home",
		// component: Home
		redirect: "/login"
	},
	{
		path: "/login",
		name: "Login",
		component: Login
	},
	{
		path: "/vue3",
		name: "Vue3",
		component: Vue3
	},

];

const router = new VueRouter({
	routes
});

export default router;