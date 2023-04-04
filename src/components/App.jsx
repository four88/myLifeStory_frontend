import MainGame from "./MainGame";
import Login from "./Login";
import { Switch, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import { useEffect } from "react";
import useUserStore from "../stores/useUserStore";
import userApi from "../api/UserApi";

export default function App() {
  const { setIsLogin, isLogin, user } = useUserStore();

  // handle user token checking user has token or not
  const handleTokenCheck = () => {
    const token = user.token;
    if (token) {
      setIsLogin(true);
      console.log(isLogin);
      console.log("Token ");
    }
  };

  useEffect(() => {
    handleTokenCheck();
    console.log(isLogin);
  }, []);

  return (
    <>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>

        <ProtectedRoute path="/" toPath="/login" isLoggedIn={isLogin}>
          <MainGame />
        </ProtectedRoute>
      </Switch>
    </>
  );
}
