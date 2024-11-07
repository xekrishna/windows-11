import Home from "./home/page";
import Lockscreen from "./lockscreen/page";

export default function Root() {
  const isLoggedIn = false;

  return <>{isLoggedIn ? <Home /> : <Lockscreen />}</>;
}
