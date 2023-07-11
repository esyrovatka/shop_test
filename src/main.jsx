import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import ItemPage from "./pages/Item/ItemPage.jsx";
import "./index.css";
import Basket from "./pages/Basket.jsx";
import Bye from "./pages/Bye.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/item/:id",
    element: <ItemPage />,
  },
  {
    path: "/basket",
    element: <Basket />,
  },
  {
    path: "/bye",
    element: <Bye />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
