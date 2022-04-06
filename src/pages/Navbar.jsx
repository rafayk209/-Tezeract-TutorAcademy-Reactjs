import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink, Link, Switch, Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
function Navbr() {
  const email = useSelector((state) => state.amount);

  return (
    <>
      <div>
        {/* <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">

            </div>
          </div>
        </div> */}
        <div className="container-fluid nav_bg navbar-light bg-light">
          <div className="row">
            <div className="col-10 mx-auto">
              <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                  <Link className="navbar-brand" to="/">
                    Navbar
                  </Link>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon" />
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/">
                          home
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/login">
                          login
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link className="nav-link" to="/signup">
                          signup
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbr;
