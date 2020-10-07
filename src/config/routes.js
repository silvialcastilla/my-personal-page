import HomePage from "../pages/HomePage/HomePage";
import AboutPage from "../pages/AboutPage/AboutPage";
import StudiesPage from "../pages/StudiesPage/StudiesPage";
import ExperiencePage from "../pages/ExperiencePage/ExperiencePage";
import KnowledgesPage from "../pages/KnowledgesPage/KnowledgesPage";
import ProjectsPage from "../pages/ProjectsPage/ProjectsPage";
import ContactPage from "../pages/ContactPage/ContactPage";

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
    path: "/knowledges",
    component: KnowledgesPage,
    exact: false,
  },
  {
    path: "/projects",
    component: ProjectsPage,
    exact: false,
  },
  {
    path: "/contact",
    component: ContactPage,
    exact: false,
  },
];

export default routes;
