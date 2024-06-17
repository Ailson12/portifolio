export class ProjectView {
  constructor(params) {
    this.data = params.data;
  }

  mountTechnology() {
    const { technologies } = this.data;

    return `<ul class="technology-container">
            ${technologies
              .map(
                (technology) => `<li class="technology-card">${technology}</li>`
              )
              .join(" ")}
              </ul>
            `;
  }

  mountUsefulLinks() {
    const { helpfulLinks } = this.data;
    return `
      <div class="useful-links-container">
        ${helpfulLinks
          .map(
            (help) => `
          <a href="${help.link}" target="_blank">
            <p>${help.legend}</p>
            <img
              src="./assets/icons/open-link.svg"
              alt="Abrir link"
              height="14"
              width="14"
            />
          </a>
        `
          )
          .join(" ")}
      </div>
    `;
  }

  render() {
    const technology = this.mountTechnology();
    const useFullLinks = this.mountUsefulLinks();

    return `<div class="project-modal-container">
            <div>
              <p>Tecnologias</p>
              ${technology}
            </div>
            <div>
              <p>Links úteis</p>
              ${useFullLinks}
            </div>
            <div class="project-modal-description">
              <p>Descrição</p>
              <p>${this.data.description}</p>
            </div>
          </div>`;
  }
}
