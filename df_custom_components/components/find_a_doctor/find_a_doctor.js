const Switch = ReactRouterDOM.Switch;
const Route = ReactRouterDOM.Route;
const Link = ReactRouterDOM.Link;

const InlineForm = () => {
  return (
    <div className="container">
      <form className="form-inline">
        <div className="form-group mb-2">
          <label htmlFor="inputState">I'm a </label>
          <select id="inputState" className="form-control">
            <option selected>Patient</option>
          </select>
        </div>
        <div className="form-group mb-2">
          <label htmlFor="inputState">and I want to </label>
          <select id="inputState" className="form-control">
            <option selected>Find Doctor or other Provider</option>
          </select>
        </div>
        <button type="submit" className="btn btn-lg mb-2">
          <Link to="/speciality">Go</Link>
        </button>
      </form>
    </div>
  );
};

const InlineForm1 = () => {
  return (
    <div className="container">
      <form className="form-inline">
        <div className="form-group mb-2">
          <label htmlFor="inputState">Speciality </label>
          <select id="inputState" className="form-control">
            <option selected disabled>
              Patient
            </option>
            <option>Cardiology</option>
            <option>Dermatology</option>
            <option>Neurology</option>
          </select>
        </div>
        <div className="form-group mb-2">
          <label htmlFor="inputState">Zip Code</label>
          <input type="text" className="form-control" placeholder="Zip Code" />
        </div>
        <Link to="/recommendation">Go</Link>
      </form>
    </div>
  );
};

const Main = () => {
  return (
    <section className="hero-section">
      <div className="hero-image">
        <div className="container">
          <form className="form-inline">
            <div className="form-group mb-2">
              <label htmlFor="inputState">I'm a </label>
              <select
                id="inputState"
                className="form-control"
                defaultValue="default"
              >
                <option value="default">Patient</option>
              </select>
            </div>
            <div className="form-group mb-2">
              <label htmlFor="inputState">and I want to </label>
              <select
                id="inputState"
                className="form-control"
                defaultValue="default"
              >
                <option value="default">Find Doctor or other Provider</option>
              </select>
            </div>
            <div
              style={{
                backgroundColor: "blue",
                padding: "10px 30px"
              }}
            >
              <Link style={{ color: "white" }} to="/speciality">
                Go
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

const Main1 = () => {
  return (
    <section className="hero-section">
      <div className="hero-image">
        <div className="container">
          <form className="form-inline">
            <div className="form-group mb-2">
              <label htmlFor="inputState">Speciality </label>
              <select id="inputState" className="form-control" defaultValue="">
                <option value="" disabled>
                  Speciality
                </option>
                <option>Cardiology</option>
                <option>Dermatology</option>
                <option>Neurology</option>
              </select>
            </div>
            <div className="form-group mb-2">
              <label htmlFor="inputState">Zip Code</label>
              <input
                type="text"
                className="form-control"
                placeholder="Zip Code"
              />
            </div>
            {/* <button type="submit" className="btn btn-lg mb-2"> */}
            <div
              style={{
                backgroundColor: "blue",
                padding: "10px 30px"
              }}
            >
              <Link style={{ color: "white" }} to="/recommendation">
                Go
              </Link>
            </div>
            {/* </button> */}
          </form>
        </div>
      </div>
    </section>
  );
};

const Recommendation = () => {
  const doctor =
    "https://www.gundersenhealth.org/app/files/public/f3662785-7754-4ccf-87ab-2795c9883308/Abidi-Mateen.jpg?size=large";
  const doctor2 = "https://www.gundersenhealth.org/app/files/public/ailiani-raju.jpg?size=large";
  const doctor3 = "https://www.gundersenhealth.org/app/files/public/Benkers-Nicky.jpg?size=large"

  return (
    <section className="recommended-slider">
      <div className="container">
        <h4 className="card-title">Doctors Recommended For You</h4>
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="row">
              <div className="col-lg-12">
                <div className="carousel-item active">
                  <div className="card">
                    <div className="card-body">
                      <div className="card-1">
                        <div className="content">
                          <div className="left">
                            <div className="left-img">
                              <img src={doctor} width="126px" alt="" />
                            </div>
                            <div className="left-text">
                              <h3>
                                <b>Mateen F. Abidi, MD, FACC, FASE</b>
                              </h3>
                              <p>Cardiology</p>
                              <b>La Crosse Campus</b>
                              <p> La Crosse, WI</p>
                            </div>
                          </div>
                          <div className="right">
                            <p>(608) 775-2335</p>
                            <p className="greenText">Make an appointment</p>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <p className="p-1">
                              <small>5 out of 5</small>{" "}
                            </p>
                            <p className="greenText">Patient Ratings</p>
                            <p className="greenText">Comments</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="card">
                    <div className="card-body">
                      <div className="card-1">
                        <div className="content">
                          <div className="left">
                            <div className="left-img">
                              <img src={doctor2} width="126px" alt="" />
                            </div>
                            <div className="left-text">
                              <h3>
                                <b>Raju G. Ailiani, MD</b>
                              </h3>
                              <p>Cardiology</p>
                              <b>La Crosse Campus</b>
                              <p> La Crosse, WI</p>
                            </div>
                          </div>
                          <div className="right">
                            <p>(608) 775-2335</p>
                            <p className="greenText">Make appointment</p>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <p className="p-1">
                              <small>5 out of 5</small>{" "}
                            </p>
                            <p className="greenText">Patient Ratings</p>
                            <p className="greenText">Comments</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="card">
                    <div className="card-body">
                      <div className="card-1">
                        <div className="content">
                          <div className="left">
                            <div className="left-img">
                              <img src={doctor3} width="126px" alt="" />
                            </div>
                            <div className="left-text">
                              <h3>
                                <b>Nicole C. Benkers, PA-C</b>
                              </h3>
                              <p>Cardiology and Physician Assistant</p>
                              <b>La Crosse Campus</b>
                              <p> La Crosse, WI</p>
                            </div>
                          </div>
                          <div className="right">
                            <p>(608) 775-2335</p>
                            <p className="greenText">Make appointment</p>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <p className="p-1">
                              <small>5 out of 5</small>{" "}
                            </p>
                            <p className="greenText">Patient Ratings</p>
                            <p className="greenText">Comments</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span
                style={{
                  backgroundImage: `url("https://img.icons8.com/ios-filled/50/000000/circled-left-2.png")`
                }}
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span
                style={{
                  backgroundImage: `url("https://img.icons8.com/ios-filled/50/000000/circled-right-2.png")`
                }}
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

function App() {
  return (
    <div className="App">
      <ReactRouterDOM.HashRouter>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/speciality">
            <Main1 />
          </Route>
        </Switch>
        <Route path="/recommendation">
          <Recommendation />
        </Route>
      </ReactRouterDOM.HashRouter>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
