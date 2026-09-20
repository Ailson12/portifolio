import { ExperienceDetails } from "./modules/experience.js";
import { Footer } from "./modules/footer.js";
import { Project } from "./modules/project.js";
import { Courses } from "./modules/courses/courses.js";

const experience = new ExperienceDetails();
experience.init();

const footer = new Footer();
footer.init();

const project = new Project();
project.init();

const courses = new Courses();
courses.init();