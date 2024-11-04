export default function Education(){
    return(
        <section
        className="resume-section p-3 p-lg-5 d-flex flex-column"
        id="education">
        <div className="my-auto">
          <h2 className="mb-5">Education</h2>
          <div className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">"Angel Kanchev" University of Ruse</h3>
              <div className="subheading mb-3">
                Bachelor of Software Engineering
              </div>
              <div>Software Engineering</div>
              <p>GPA: TBA</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">September 2021 - Present</span>
            </div>
          </div>
          <div className="resume-item d-flex flex-column flex-md-row">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">SoftUni Sofia</h3>
              <div className="subheading mb-3">C# Web Developer Course</div>
              <p>GPA: 5.90</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">June 2021 - April 2023</span>
            </div>
          </div>
        </div>
      </section>
    )
}