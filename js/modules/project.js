import { Modal } from "./modal.js";
import { ProjectView } from "./project.view.js";

export class Project {
  constructor() {
    this.modal = new Modal();
    this.projects = document.querySelectorAll(
      ".project-container .project-card"
    );
  }

  async fetchProject(id) {
    try {
      const response = await fetch("../../mocks/projects.json");
      const data = await response.json();

      const project = data.find((row) => row.id === id);
      if (!project) {
        throw new Error("project not found");
      }

      return project;
    } catch (error) {
      window.alert("Projeto não encontrado");
    }
  }

  async onClickProject(element) {
    const project = await this.fetchProject(element.dataset.id);
    const projectView = new ProjectView({
      data: project,
    });

    this.modal.view({
      title: project.title,
      mainContent: projectView.render(),
    });
  }

  addEvent() {
    this.projects.forEach((element) => {
      element.addEventListener("click", () => this.onClickProject(element));
    });
  }

  init() {
    this.addEvent();
    console.log(`projetos `, this.projects);
  }
}
