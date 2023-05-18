import { Outlet, Link } from "react-router-dom";
import "./style.css";
import { Footer } from "../footer";

export const Layout = () => {
  return (
    <div>
      <header className="header">
        <div className="header-wrapper">
            {/* <section className="header__logo"> */}
              <p>Vladimir Chetyrin</p>

            {/* </section> */}
            <div >
                <Link className="header__link" to="/">
                    Home
                </Link>
                <Link className="header__link" to="/categories">
                    Categories
                </Link>
                <Link className="header__link" to="/about">
                    About
                </Link>
            </div>
        </div>
      </header>

      <div className="layout__content">
      <Outlet />
      </div>
      

      <Footer />
    </div>
  );
};
