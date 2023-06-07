import Explore from "../views/pages/explore";
import Detail from "../views/pages/detail";
import Favorite from "../views/pages/favorite";

const routes = {
  "/": Explore,
  "/explore": Explore,
  "/detail/:id": Detail,
  "/favorite": Favorite,
};

export default routes;
