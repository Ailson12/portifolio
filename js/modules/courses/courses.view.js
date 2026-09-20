export class CoursesView {
  constructor(params) {
    this.courses = params.courses;
  }

  buildCard(course) {
    return `<div class="course-card">
            <img height="48" width="48" src="${course.issued_by.logo}" alt="logo ${course.issued_by.name}" />
            <div class="course-card-content">
              <p>${course.title}</p>
              <p>${course.issued_by.name}</p>
              <p>Emitido em ${course.date}</p>
            </div>
          </div>
        `;
  }

  render() {
    return this.courses.map(this.buildCard).join("");
  }
}
