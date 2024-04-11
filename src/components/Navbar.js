import { CartIcon, Testing } from "../icons";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { storee } from "../storee";

const Navbar = () => {
  const { amount } = useSelector((storee) => storee.cart);
  return (
    <nav>
      <div className="nav-center">
        <h3>Redux toolkit</h3>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
