import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import CartContent from "./components/CartContent/CartContent";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/cart",
    element: <CartContent />,
  },
]);
