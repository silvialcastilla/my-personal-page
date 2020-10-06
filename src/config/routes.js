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
    className: "home-page",
  },
  {
    path: "/about",
    component: AboutPage,
    exact: false,
    className: "about-page",
  },
  {
    path: "/studies",
    component: StudiesPage,
    exact: false,
    className: "studies-page",
  },
  {
    path: "/experience",
    component: ExperiencePage,
    exact: false,
    className: "experience-page",
  },
  {
    path: "/contact",
    component: ContactPage,
    exact: false,
    className: "contact-page",
  },
];

export default routes;
