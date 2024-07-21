import "../Styles/Portfolio.css";
// Export the portfolio function for the app to display the portfolio page when the user clicks on the portfolio tab.
export default function Portfolio() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card card-custom">
            <img
              src="https://via.placeholder.com/150"
              width="100%"
              alt="Project1"
            />
            <div className="card-body">
              <h2 className="card-title">Project 1</h2>
              <p className="card-text">Description of project 1</p>
              <a href="#" className="btn btn-custom mr-2 mb-2">
                Repo
              </a>
              <a href="#" className="btn btn-custom ml-2 mb-2">
                Live
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card card-custom">
            <img
              src="https://via.placeholder.com/150"
              width="100%"
              alt="Project2"
            />
            <div className="card-body">
              <h2 className="card-title">Project 2</h2>
              <p className="card-text">Description of project 2</p>
              <a href="#" className="btn btn-custom mr-2 mb-2">
                Repo
              </a>
              <a href="#" className="btn btn-custom ml-2 mb-2">
                Live
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card card-custom">
            <img
              src="https://via.placeholder.com/150"
              width="100%"
              alt="Project3"
            />
            <div className="card-body">
              <h2 className="card-title">Project 3</h2>
              <p className="card-text">Description of project 3</p>
              <a href="#" className="btn btn-custom mr-2 mb-2">
                Repo
              </a>
              <a href="#" className="btn btn-custom ml-2 mb-2">
                Live
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card card-custom">
            <img
              src="https://via.placeholder.com/150"
              width="100%"
              alt="Project4"
            />
            <div className="card-body">
              <h2 className="card-title">Project 4</h2>
              <p className="card-text">Description of project 4</p>
              <a href="#" className="btn btn-custom mr-2 mb-2">
                Repo
              </a>
              <a href="#" className="btn btn-custom ml-2 mb-2">
                Live
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card card-custom">
            <img
              src="https://via.placeholder.com/150"
              width="100%"
              alt="Project5"
            />
            <div className="card-body">
              <h2 className="card-title">Project 5</h2>
              <p className="card-text">Description of project 5</p>
              <a href="#" className="btn btn-custom mr-2 mb-2">
                Repo
              </a>
              <a href="#" className="btn btn-custom ml-2 mb-2">
                Live
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card card-custom">
            <img
              src="https://via.placeholder.com/150"
              width="100%"
              alt="Project6"
            />
            <div className="card-body">
              <h2 className="card-title">Project 6</h2>
              <p className="card-text">Description of project 6</p>
              <a href="#" className="btn btn-custom mr-2 mb-2">
                Repo
              </a>
              <a href="#" className="btn btn-custom ml-2 mb-2">
                Live
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
