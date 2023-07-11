import { useState } from "react";
import { useSelector } from "react-redux";
import { getAllBasketItemSelector } from "../redux/selector";
import { useNavigate } from "react-router";
import { useDispatchAction } from "../hook/useDispatchAction";

const Bye = () => {
  const action = useDispatchAction();
  const [step, setStep] = useState(1);
  const data = useSelector(getAllBasketItemSelector);
  const totalPrice = data.reduce((accumulator, product) => {
    return accumulator + product.count * product.price;
  }, 0);
  const nextStep = (e) => {
    e.preventDefault();
    setStep((prev) => prev + 1);
  };

  const navigate = useNavigate();

  const finish = () => {
    action.clearBasket();
    navigate("/");
  };

  if (step === 1) {
    return (
      <div
        style={{
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <form
          onSubmit={nextStep}
          style={{
            display: "flex",
            flexDirection: "column",
            width: "300px",
            gap: "10px",
          }}
        >
          <h2>Enter personal info: </h2>
          <input className="input" placeholder="name" />
          <input className="input" placeholder="email" />
          <input className="input" placeholder="password" type="password" />

          <button onClick={nextStep}>Next</button>
        </form>
      </div>
    );
  }
  if (step === 2) {
    return (
      <div
        style={{
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "300px",
            gap: "10px",
          }}
        >
          <div>Total price: {totalPrice}</div>
          <button onClick={nextStep}>Next</button>
        </div>
      </div>
    );
  }
  if (step === 3) {
    return (
      <div
        style={{
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "300px",
            gap: "10px",
          }}
        >
          <button onClick={finish}>Approve shopping</button>
        </div>
      </div>
    );
  }
};

export default Bye;
