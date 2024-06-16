import { Modal } from "./modal.js";

export class ExperienceDetails {
  constructor() {
    this.lastExperience = document.querySelector(".job-container .job-card p");
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

  addEventDetails() {
    const elements = document.querySelectorAll("#experience .job-card button");
    elements.forEach((element) => {
      element.addEventListener("click", async () => {
        const position = await this.fetchPosition({
          ...element.dataset,
        });

        this.modal.view({
          mainContent: `<ul class="experience-details">
              ${position.duties.map((dutie) => `<li>${dutie}</li>`).join(" ")}
            </ul>`,
        });
      });
    });
  }

  getMetaDataDate(date) {
    const year = date.getFullYear();
    const month = date.getMonth();

    return {
      year,
      month,
    };
  }

  getTotalMonths(params) {
    const endDate = this.getMetaDataDate(params.endDate);
    const startDate = this.getMetaDataDate(params.startDate);

    const totalInMonth = (endDate.year - startDate.year) * 12;
    return totalInMonth - startDate.month + endDate.month + 1;
  }

  getFullLabel(totalMonths) {
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    let result = [];

    if (years) result.push(`${years} anos`);
    if (months) result.push(`${months} meses`);

    return result.join(" e ");
  }

  calculateLastExperience() {
    if (this.lastExperience) {
      const startDate = new Date(2022, 6);
      const totalMonths = this.getTotalMonths({
        startDate,
        endDate: new Date(),
      });

      const year = startDate.getFullYear();
      const month = (startDate.getMonth() + 1).toString().padStart(2, "0");
      this.lastExperience.innerText = `${month}/${year} - o momento · ${this.getFullLabel(
        totalMonths
      )}`;
    }
  }

  init() {
    this.addEventDetails();
    this.calculateLastExperience();
  }
}
