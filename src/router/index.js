import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Collage from "../views/Collage.vue";
import Megamix from "../views/Megamix.vue";
import Search from "../views/Search.vue";
import SongDetails from "../views/SongDetails.vue";
import MoodRing from "../views/MoodRing.vue";
import Authorise from "../components/Home/Authorise.vue";
// import Features from "../components/Home/Features.vue";
import AuthReader from "../components/Home/AuthReader.vue";

const routes = [
	{
		path: "/",
		component: Home,
		children: [
			{
				path: "",
				name: "",
				component: Search,
			},
			{
				path: "search/:id",
				name: "songDetails",
				component: SongDetails
			},
			{
				path: "collage",
				name: "collage",
				component: Collage,
			},
			{
				path: "megamix",
				name: "megamix",
				component: Megamix,
			},
			{
				path: "moodring",
				name: "moodring",
				component: MoodRing
			}
		],
	},
	{
		path: "/authorise",
		name: "Authorise",
		component: Authorise,
	},
	{
		path: "/auth/collect/:query",
		component: AuthReader,
	},
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
