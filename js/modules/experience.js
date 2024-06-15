import { Modal } from "../modal.js";

export class ExperienceDetails {
  constructor() {
    this.modal = new Modal({
      size: "size-medium",
    });
  }

  async fetchPosition(params = {}) {
    try {
      const response = await fetch("./mocks/experiences.json");
      const data = await response.json();

      const company = data.find((row) => row.company === params.company);
      const position = company?.positions.find(
        (row) => row.id === params.position
      );

      if (position) {
        return position;
      }

      throw new Error("position not found");
    } catch {
      window.alert("Detalhes não encontrados");
    }
  }

  addEventOpen() {
    const elements = document.querySelectorAll("#experience .job-card button");
    elements.forEach((element) => {
      element.addEventListener("click", async () => {
        const { dataset } = element;

        const position = await this.fetchPosition({
          company: dataset.company,
          position: dataset.position,
        });

        this.modal.view({
          mainContent: `<ul class="experience-details">
              ${position.duties.map((dutie) => `<li>${dutie}</li>`).join(" ")}
            </ul>`,
        });

        this.modal.onOpen();
      });
    });
  }

  addEvents() {
    this.addEventOpen();
  }

  init() {
    this.addEvents();
  }
}
