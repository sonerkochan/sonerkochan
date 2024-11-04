export default function Projects(){
    return (
        <section
        className="resume-section p-3 p-lg-5 d-flex flex-column"
        id="projects">
        <div className="my-auto">
          <h2 className="mb-5">Projects</h2>
          <div className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">SportArete - eCommerce Website</h3>
              <div
                className="subheading mb-3"
                style={{ marginBottom: "0px !important" }}
              >
                Web Application
              </div>
              <div className="subheading mb-3">
                Skills Used: .NET, SQL, HTML, CSS, MySQL, JS
              </div>
              <ul className="list-inline list-social-icons mb-0">
                <li className="list-inline-item">
                  <a href="https://github.com/sonerkochan/SportArete">
                    <span className="fa-stack fa-lg">
                      <i className="fa fa-circle fa-stack-2x" />
                      <i className="fa fa-github fa-stack-1x fa-inverse" />
                    </span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="sportarete-screenshots.html">
                    <span className="fa-stack fa-lg">
                      <i className="fa fa-circle fa-stack-2x" />
                      <i className="fa fa-camera fa-stack-1x fa-inverse" />
                    </span>
                  </a>
                </li>
              </ul>
              <br />
              <ul>
                <li>
                  The Project was made during my C# Web Developer course at
                  SoftUni as final project
                </li>
                <li>
                  All users can browse the site freely and registered users can
                  order products and leave their reviews.
                </li>
                <li>
                  There are 2 types of users - Administrator and standart user.
                </li>
                <li>
                  Administrators can add/remove new products, brands or
                  categories. Also they can check order statuses and delete user
                  accounts.
                </li>
                <li>Users can order and review products.</li>
                <li>Hosted using Azure</li>
              </ul>
            </div>
          </div>
          <div className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">EzyShape - Personal Coaching Platform</h3>
              <div
                className="subheading mb-3"
                style={{ marginBottom: "0px !important" }}
              >
                Web Application
              </div>
              <div className="subheading mb-3">
                Skills Used: .NET, SQL, HTML, CSS, MSSQL, JS
              </div>
              <ul className="list-inline list-social-icons mb-0">
                <li className="list-inline-item">
                  <a href="https://github.com/sonerkochan/EzyShape">
                    <span className="fa-stack fa-lg">
                      <i className="fa fa-circle fa-stack-2x" />
                      <i className="fa fa-github fa-stack-1x fa-inverse" />
                    </span>
                  </a>
                </li>
              </ul>
              <br />
              <ul>
                <li>TBA</li>
              </ul>
            </div>
          </div>
          <div className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">ShipTrack - Shipment Tracking App</h3>
              <div
                className="subheading mb-3"
                style={{ marginBottom: "0px !important" }}
              >
                Web Application
              </div>
              <div className="subheading mb-3">
                Skills Used: Java, Jakarta, JS, HTML, CSS
              </div>
              <ul className="list-inline list-social-icons mb-0">
                <li className="list-inline-item">
                  <a href="https://github.com/sonerkochan/ShipTrack">
                    <span className="fa-stack fa-lg">
                      <i className="fa fa-circle fa-stack-2x" />
                      <i className="fa fa-github fa-stack-1x fa-inverse" />
                    </span>
                  </a>
                </li>
              </ul>
              <br />
              <ul>
                <li>
                  Shipments Management: Add new shipments, view all shipments, and
                  track their delivery status.
                </li>
                <li>
                  User Authentication: User login functionality to access the
                  application's features.
                </li>
                <li>
                  RESTful Web Services: Expose endpoints for retrieving delivered
                  and awaiting confirmation shipments.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="resume-item d-flex flex-column flex-md-row mb-5">
          <div className="resume-content mr-auto">
            <h3 className="mb-0">ChessMi - Console Chess Game</h3>
            <div
              className="subheading mb-3"
              style={{ marginBottom: "0px !important" }}
            >
              Console App
            </div>
            <div className="subheading mb-3">Skills Used: C#, OOP</div>
            <ul className="list-inline list-social-icons mb-0">
              <li className="list-inline-item">
                <a href="https://github.com/sonerkochan/ChessMi">
                  <span className="fa-stack fa-lg">
                    <i className="fa fa-circle fa-stack-2x" />
                    <i className="fa fa-github fa-stack-1x fa-inverse" />
                  </span>
                </a>
              </li>
            </ul>
            <br />
            <ul>
              <li>Chess game/validator</li>
            </ul>
          </div>
        </div>
      </section>
    )
}