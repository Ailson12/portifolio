export class Footer {
  constructor() {
    this.currentYear = document.querySelector('#current-year')
  }

  init() {
    if (this.currentYear) {
      this.currentYear.innerText = new Date().getFullYear()
    }
  }
}