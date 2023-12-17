import { FiHeart } from "react-icons/fi";
import { AiOutlineUserAdd } from "react-icons/ai";
import { FiShoppingBag } from "react-icons/fi";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav>
        <img
          className="img-logo"
          src="https://th.bing.com/th/id/OIP.4dcJ_AHTJ81dikKbJ_xBtgHaGw?rs=1&pid=ImgDetMain"
        ></img>
        <div className="nav-container">
          <h1>LOGO</h1>
        </div>
        <div className="profile-container">
          <a>
            <select className="dropdown">
              <option>ENG</option>
              <option>HIN</option>
              <option>ESP</option>
              <option>FRN</option>
            </select>
          </a>
          <a href="#">
            <FiHeart className="nav-icons" />
          </a>
          <a href="">
            <FiShoppingBag className="nav-icons" />
          </a>
          <a href="">
            <AiOutlineUserAdd className="nav-icons" />
          </a>
        </div>
      </nav>
      <div className="second-nav">
        <ul>
          <li>
            <b>Shop</b>
          </li>
          <li>
            <b>Skills</b>
          </li>
          <li>
            <b>Story</b>
          </li>
          <li>
            <b>About</b>
          </li>
          <li>
            <b>Contact Us</b>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
