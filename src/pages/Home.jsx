import { NavLink } from "react-router-dom";

function Home(props) {
  return (
    <>
      <div id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row ">
                <div className="col-md-6 pt-2 pt-lg-5 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    {props.name}
                    <strong>Tutor Academy</strong>
                  </h1>
                  <h2 className="mt-2">We are here to spread education</h2>
                  <NavLink to={props.visit}>
                    <button type="button" class="btn btn-info mt-2">
                      {props.button}
                    </button>
                  </NavLink>
                </div>
                <div className="col-lg-6 mt-5 order-1 order-lg-2 header-img">
                  <img
                    src={props.image}
                    className="img-fluid animated"
                    alt="Image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
