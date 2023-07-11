import { useNavigate } from "react-router";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAllBasketItemSelector } from "../redux/selector";
import { useDispatchAction } from "../hook/useDispatchAction";

const Basket = () => {
  const navigate = useNavigate();
  const action = useDispatchAction();

  const [list, setList] = useState([]);
  const data = useSelector(getAllBasketItemSelector);
  useEffect(() => {
    setList(data);
  }, [data]);

  const removeFromBasket = (id) => {
    action.removeItemFromShop(id);
  };
  return (
    <Layout>
      <button onClick={() => navigate(-1)}>Back</button>
      <button onClick={() => navigate("/bye")} style={{ marginTop: "10px" }}>
        Bye
      </button>
      <div className="shop_wrapper">
        {list.map((item, i) => (
          <div className="shop_wrapper-item" key={i}>
            <div>
              <img src={item.image} width={150} height={150} />
              <h6 className="shop_wrapper-title">Item №{i}</h6>
              <span className="shop_wrapper-description">{item.title}</span>
              <span className="shop_wrapper-title">
                Price per 1: {item.price}
              </span>
              <span className="shop_wrapper-title">Count: {item.count}</span>
              <span className="shop_wrapper-title">
                Total price: {item.price * item.count}
              </span>
            </div>
            <button onClick={() => removeFromBasket(item.id)}>
              Remove item
            </button>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Basket;
