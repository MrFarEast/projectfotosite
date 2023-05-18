import { Outlet, Link } from "react-router-dom";
import "./style.css";

export const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-wrapper">
            <div className="footer__icon">
            </div>
            <div >
                {/* <Link className="footer__link" to="/">
                    link
                </Link>             */}
            </div>
        </div>
      </footer>
    </div>
  );
};