import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import StudiesPage from "../pages/StudiesPage";
import ExperiencePage from "../pages/ExperiencePage";
import ContactPage from "../pages/ContactPage";

const routes = [
  {
    path: "/",
    component: HomePage,
    exact: true,
  },
  {
    path: "/about",
    component: AboutPage,
    exact: false,
  },
  {
    path: "/studies",
    component: StudiesPage,
    exact: false,
  },
  {
    path: "/experience",
    component: ExperiencePage,
    exact: false,
  },
  {
    path: "/contact",
    component: ContactPage,
    exact: false,
  },
];

export default routes;
