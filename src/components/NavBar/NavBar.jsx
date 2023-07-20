import { NavLink } from "react-router-dom";
import style from "./NavBar.module.scss";
import { ShoppingCart, Heart, House } from "@phosphor-icons/react";
import logo from "../../assets/logo.jpg";

const NavBar = () => {
    const activeStyles = ({ isActive }) =>
        isActive ? `${style.link} ${style.active_link}` : style.link;

    return (
        <nav className={style.nav}>
            <NavLink className={activeStyles} to="/">
                <img src={logo} alt="lego logo" />
            </NavLink>
            <div>
                <NavLink className={activeStyles} to="/favourites">
                    <Heart size={32} />
                </NavLink>
                <NavLink className={activeStyles} to="/cart">
                    <ShoppingCart size={32} />
                </NavLink>
            </div>
        </nav>
    );
};
export default NavBar;
