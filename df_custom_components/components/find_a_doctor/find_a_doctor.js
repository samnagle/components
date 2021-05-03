const Switch = ReactRouterDOM.Switch;
const Route = ReactRouterDOM.Route;
const Link = ReactRouterDOM.Link;




const FormOne = () => {
  return (
    <div className="form-container">
      <div className="form-wrapper">
        <form className="form-inline">
          <div className="form-group mb-2">
            <label htmlFor="inputState">I'm a </label>
            <select id="inputState" className="form-control" defaultValue={0}>
              <option value={0}>Patient</option>
            </select>
          </div>
          <div className="form-group mb-2">
            <label htmlFor="inputState">and I want to </label>
            <select id="inputState" className="form-control" defaultValue={0}>
              <option value={0}>Find Doctor or other Provider</option>
            </select>
          </div>
          <Link to="/speciality">
            <button type="submit" className="btn btn-lg mb-2">
              Go
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};


const FormTwo = () => {
  return (
    <div className="form-container">
      <div className="form-wrapper">
        <form className="form-inline">
          <div className="form-group mb-2">
            <label htmlFor="inputState">Speciality </label>
            <select id="inputState" className="form-control" defaultValue={0}>
              <option value={0}>Patient</option>
              <option value={1}>Cardiology</option>
              <option value={2}>Dermatology</option>
              <option value={3}>Neurology</option>
            </select>
          </div>
          <div className="form-group mb-2">
            <label htmlFor="inputState">Zip Code</label>
            <input type="text" className="form-control" placeholder="Zip Code"/>
          </div>
          <Link to="/recommendation">
            <button type="submit" className="btn btn-lg mb-2">Go
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};


const Recommendation = () => {
  const doctor = 'https://www.gundersenhealth.org/app/files/public/f3662785-7754-4ccf-87ab-2795c9883308/Abidi-Mateen.jpg?size=large';

  return (
    <section className="recommended-slider">
      <div className="container">
        <h2 className="card-title font-weight-bold">Recommended For You
        </h2>
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-interval="false"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="row">
              <div className="col-lg-12">
                <div className="carousel-item active">
                  <div className="card">
                    <div className="card-body">
                      <div className="card-body-inner">
                        <div className="content">
                          <div className="left">
                            <div className="left-img">
                              <img src={doctor} width="126px" alt=""/>
                            </div>
                            <div className="left-text">
                              <h3>
                                <b>Alpha</b>
                              </h3>
                              <p>Child Specialist</p>
                              <h3>
                                <b>Beta Company</b>
                              </h3>
                              <p> Pakistan</p>
                            </div>
                          </div>
                          <div className="right">
                            <p>+1232123432</p>
                            <p className="greenText">Make appointment</p>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <p className="p-1">
                              <small>5 out of 5</small>{' '}
                            </p>
                            <p className="greenText">Patient list</p>
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
                      <div className="card-body-inner">
                        <div className="content">
                          <div className="left">
                            <div className="left-img">
                              <img src={doctor} width="126px" alt=""/>
                            </div>
                            <div className="left-text">
                              <h3>
                                <b>Alpha</b>
                              </h3>
                              <p>Child Specialist</p>
                              <h3>
                                <b>Beta Company</b>
                              </h3>
                              <p> Pakistan</p>
                            </div>
                          </div>
                          <div className="right">
                            <p>+1232123432</p>
                            <p className="greenText">Make appointment</p>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <p className="p-1">
                              <small>5 out of 5</small>{' '}
                            </p>
                            <p className="greenText">Patient list</p>
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
                      <div className="card-body-inner">
                        <div className="content">
                          <div className="left">
                            <div className="left-img">
                              <img src={doctor} width="126px" alt=""/>
                            </div>
                            <div className="left-text">
                              <h3>
                                <b>Alpha</b>
                              </h3>
                              <p>Child Specialist</p>
                              <h3>
                                <b>Beta Company</b>
                              </h3>
                              <p> Pakistan</p>
                            </div>
                          </div>
                          <div className="right">
                            <p>+1232123432</p>
                            <p className="greenText">Make appointment</p>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <p className="p-1">
                              <small>5 out of 5</small>{' '}
                            </p>
                            <p className="greenText">Patient list</p>
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
                className="carousel-control-prev-icon"
                aria-hidden="true"
              />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const RefreshIcon = () => {
  return (<svg xmlns="http://www.w3.org/2000/svg"
           className="ionicon" viewBox="0 0 512 512"><title>Refresh</title><path d="M320 146s24.36-12-64-12a160 160 0 10160 160" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M256 58l80 80-80 80"/></svg>)
}

function App() {

  return (
    <div className="App">
      <div className="search-container-000">
        <ReactRouterDOM.HashRouter>
          <Switch>
            <Route exact path="/">
              <FormOne/>
            </Route>
            <Route path="/speciality">
              <Link to="/">
                  <button className="btn btn-lg mb-2 start-again-btn">Start Over <RefreshIcon/>
                  </button>
                </Link>
              <FormTwo/>
            </Route>
          </Switch>
          <Route path="/recommendation">
            <Link to="/">
                  <button className="btn btn-lg mb-2 start-again-btn">Start Over <RefreshIcon/>
                  </button>
                </Link>
            <Recommendation/>
          </Route>
        </ReactRouterDOM.HashRouter>
      </div>
    </div>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
