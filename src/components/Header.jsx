import { useSelector } from "react-redux";
import { getAllBasketItemSelector } from "../redux/selector";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Header = () => {
  const data = useSelector(getAllBasketItemSelector);
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setItems(data);
  }, [data]);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <h3 onClick={() => navigate("/")}>Shop</h3>
      <button
        style={{ padding: "3px", height: "30px" }}
        onClick={() => navigate("/basket")}
      >
        basket {items?.length}
      </button>
    </div>
  );
};

export default Header;
