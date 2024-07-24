import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/general/homepage/HomePage";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import SignUp from "./pages/general/register/Sign-up";
import Products from "./pages/AllProducts";
import Inbox from "./pages/admin/inbox/Inbox";
import Settings from "./pages/admin/setting/Settings";
import Team1 from "./pages/admin/team/Team1";
import Team from "./pages/admin/team/Team";
import ProductDisplay from "./pages/ProductDisplay";
import Pricing from "./pages/Pricing";
import OrderLists from "./pages/Orderlists";
import Table from "./pages/Table";
import Cart from "./pages/client/cart/CartPage";
import Checkout from "./pages/client/checkout/Checkout";
import ContactUs from "./components/ContactUs";
import App from "./App";
import Admin from "./pages/admin/Admin";
import TopSellers from "./pages/admin/top_sellers/TopSellers";
import SignIn from "./pages/general/login/Sign-in";
import ProductStock from "./pages/admin/manage_product/ManageProducts";
import AllProducts from "./pages/AllProducts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "products",
        element: <Products />,
      },

      {
        path: "product/:id",
        element: <ProductDisplay />,
      },
    ],
  },
  // Admin Routes
  {
    path: "/admin",
    element: <Admin />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "all-products",
        element: <AllProducts />,
      },
      {
        path: "top-sellers",
        element: <TopSellers />,
      },
      {
        path: "inbox",
        element: <Inbox />,
      },
      {
        path: "order-lists",
        element: <OrderLists />,
      },
      {
        path: "product-stock",
        element: <ProductStock />,
      },
      {
        path: "pricing",
        element: <Pricing />,
      },
      {
        path: "calendar",
        element: <Pricing />,
      },
      {
        path: "contact",
        element: <Pricing />,
      },
      {
        path: "invoice",
        element: <Pricing />,
      },
      {
        path: "team",
        element: <Pricing />,
      },
      {
        path: "table",
        element: <Pricing />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
]);

export default router;
