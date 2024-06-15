import { ExperienceDetails } from './modules/experience.js'

const experience = new ExperienceDetails()
experience.init()

const findElement = (selector) => document.querySelector(selector)

const currentYear = findElement('#current-year')

if (currentYear) {
  currentYear.innerText = new Date().getFullYear()
}