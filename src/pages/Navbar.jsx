import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import Image from '../assets/Tezeract.png';
import { NavLink, Link, Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index';
function Navbr() {
  const email = useSelector(state => state.amount);
  console.log(email);
  const [emails, setemails] = useState(0);
  const dispatch = useDispatch();
  const { getLoginEmail, depositMoney } = bindActionCreators(
    actionCreators,
    dispatch,
  );

  return (
    <>
      <div>
        {/* <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">

            </div>
          </div>
        </div> */}

        {email === 0 ? (
          <div className="container-fluid nav_bg navbar-light bg-light">
            <div className="row">
              <div className="col-10 mx-auto">
                <nav className="navbar navbar-expand-lg ">
                  <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                      <Button className="NavButton">TezeractAcademy</Button>
                      <img alt="not fount" width={'50px'} src={Image} />
                    </Link>
                    <button
                      className="navbar-toggler ml-auto"
                      type="button"
                      data-toggle="collapse"
                      data-target="/navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                      className="collapse navbar-collapse"
                      id="navbarSupportedContent"
                    >
                      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                          <Link className="nav-link" aria-current="page" to="/">
                            <Button className="NavButton">Home</Button>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/login">
                            <Button className="NavButton">Login</Button>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link className="nav-link" to="/signup">
                            <Button className="NavButton">Signup</Button>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        ) : (
          <div className="container-fluid nav_bg navbar-light bg-light">
            <div className="row">
              <div className="col-10 mx-auto">
                <nav className="navbar navbar-expand-lg ">
                  <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                      <Button className="NavButton">TezeractAcademy</Button>
                      <img alt="not fount" width={'50px'} src={Image} />
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
                          <Link className="nav-link" to="/login">
                            <Button
                              className="NavButton"
                              onClick={() => {
                                dispatch(actionCreators.getLoginEmail(0));
                              }}
                            >
                              Logout
                            </Button>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbr;
