import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/general/homepage/HomePage";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import SignUp from "./pages/general/register/Sign-up";
import Products from "./pages/AllProducts";
import Inbox from "./pages/admin/inbox/Inbox";
import Settings from "./pages/admin/setting/Settings";
import ProductDisplay from "./pages/ProductDisplay";
import OrderLists from "./pages/admin/orderlists/Orderlists";
import Table from "./pages/admin/table/Table";
import TeamForm from "./pages/admin/stuff/TeamForm";
import Cart from "./pages/client/cart/CartPage";
import Checkout from "./pages/client/checkout/Checkout";
import ContactUs from "./components/ContactUs";
import Contact from "./pages/admin/contact/Contact";
import Invoice from "./pages/admin/invoice/Invoice";
import App from "./App";
import Calendar from "./pages/admin/calendar/Calendar";
import Admin from "./pages/admin/Admin";
import TopSellers from "./pages/admin/top_sellers/TopSellers";
import SignIn from "./pages/general/login/Sign-in";
import ProductStock from "./pages/admin/manage_product/ManageProducts";
import AllProducts from "./pages/AllProducts";
import Stuff from "./pages/admin/stuff/Stuff";
import ErrorBoundary from "./components/ErrorBoundary";
import NotFound from "./components/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    ),
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
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "product/:id",
        element: <ProductDisplay />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  // Admin Routes
  {
    path: "/admin",
    element: (
      <ErrorBoundary>
        <Admin />
      </ErrorBoundary>
    ),
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
        path: "calendar",
        element: <Calendar />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "invoice",
        element: <Invoice />,
      },
      {
        path: "stuff",
        element: <Stuff />,
      },
      {
        path: "teamform",
        element: <TeamForm />,
      },
      {
        path: "table",
        element: <Table />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
