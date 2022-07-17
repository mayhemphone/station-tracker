import { render } from "react-dom";
import routes from "./Routes";

// index is used by views/home/index.erb, and is the entry point into our app.
// we are establishing all of our routing first, and using <Outlet /> in the parents of nested routes

document.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.getElementById("root");
  render(routes, rootElement);
});
