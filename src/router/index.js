import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login"

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

];

const router = new VueRouter({
	routes
});

export default router;