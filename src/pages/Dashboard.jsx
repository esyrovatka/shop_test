import { useEffect, useState } from "react";
import { useDispatchAction } from "../hook/useDispatchAction";
import { useSelector } from "react-redux";
import {
  getAllShopItemSelector,
  getShopLoadingSelector,
} from "../redux/selector";
import "../styles/dashboard.scss";
import Layout from "../components/Layout";
import { useNavigate } from "react-router";
const Dashboard = () => {
  const action = useDispatchAction();

  useEffect(() => {
    action.getAllShopItem();
  }, []);

  const isShopLoad = useSelector(getShopLoadingSelector);
  const data = useSelector(getAllShopItemSelector);

  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(data);
  }, [data]);

  const addToBasket = (item) => {
    action.addItemToShop(item);
  };

  const navigate = useNavigate();

  if (isShopLoad) return <div>Loading...</div>;
  if (!items.length) return <div>Shop havent items</div>;
  return (
    <Layout>
      <div className="shop_wrapper">
        {items.map((item, i) => (
          <div className="shop_wrapper-item" key={item.id}>
            <div onClick={() => navigate(`/item/${item.id}`)}>
              <img src={item.image} width={150} height={150} />
              <h6 className="shop_wrapper-title">Item №{i}</h6>
              <span className="shop_wrapper-description">{item.title}</span>
              <span className="shop_wrapper-title">Price: {item.price}</span>
            </div>
            <button onClick={() => addToBasket(item)}>Add to basket</button>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Dashboard;
