export class Modal {
  constructor(params = {}) {
    const container = document.querySelector("#modal");

    this.size = params.size;
    this.container = container;
    this.title = container.querySelector("header h1");
    this.mainContent = container.querySelector("#modal-main-content");
    this.buttonClose = container.querySelector("#close-details-project");

    this.addSize();
    this.addEventClose();
  }

  addSize() {
    if (this.size) {
      this.container.classList.add(this.size);
    }
  }

  view(params = {}) {
    this.title.innerText = params.title ?? "";
    this.mainContent.innerHTML = params.mainContent ?? "";
  }

  addEventClose() {
    this.buttonClose.addEventListener("click", () => {
      this.container.close();
    });
  }

  onOpen() {
    this.container.showModal();
  }
}
