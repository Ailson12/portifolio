import { ExperienceDetails } from "./modules/experience.js";
import { Footer } from "./modules/footer.js";
import { Project } from "./modules/project.js";

const experience = new ExperienceDetails();
experience.init();

const footer = new Footer();
footer.init();

const project = new Project();
project.init();
