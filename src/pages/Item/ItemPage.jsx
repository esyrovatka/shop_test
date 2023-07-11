import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import "../../styles/itemPage.scss";
import Layout from "../../components/Layout";
import { axiosInstance } from "../../redux/api/axiosConfig";
import { useDispatchAction } from "../../hook/useDispatchAction";
const ItemPage = () => {
  const action = useDispatchAction();
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await axiosInstance.get(`/products/${id}`);
      setData(res.data);
    };
    id && fetchData();
  }, [id]);
  const addToBasket = (item) => {
    action.addItemToShop(item);
  };
  if (!data?.id) return <div>Loading...</div>;

  return (
    <Layout>
      <div className="item_wrapper">
        <button onClick={() => navigate(-1)}>Back</button>

        <div className="item_wrapper-item">
          <img src={data.image} alt="image" />
          <div className="item_wrapper-info">
            <span>Item: {data.title}</span>
            <span>Price: {data.price}</span>
            <span>Rating: {data.rating.rate}</span>
            <span>Description: {data.description}</span>
            <button onClick={() => addToBasket(data)}>Add</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ItemPage;
