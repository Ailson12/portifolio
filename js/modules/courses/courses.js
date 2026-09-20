import { coursesMock } from "../../../mocks/courses.js";
import { CoursesView } from "./courses.view.js";

export class Courses {
  constructor() {
    this.coursesContainer = document.querySelector(".courses-container");
  }

  init() {
    const coursesView = new CoursesView({
      courses: coursesMock,
    });
    this.coursesContainer.innerHTML = coursesView.render();
  }
}
