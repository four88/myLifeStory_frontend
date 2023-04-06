import { useState } from "react";
import { useHistory } from "react-router-dom";
import useUserStore from "../stores/useUserStore";
import userApi from "../api/UserApi";

export default function Login() {
  const { setIsLogin, setUser } = useUserStore();
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });

  const history = useHistory();

  const handleLogin = (evt) => {
    evt.preventDefault();
    console.log(loginForm);
    userApi.loginUser(loginForm.email, loginForm.password).then((res) => {
      setIsLogin(true);
      setUser(res);
      history.push("/");
      setLoginForm({ email: "", password: "" });
    });
  };

  return (
    <section className="w-full h-screen flex justify-center items-center bg-gray-200">
      <div className="font-roboto w-[396px] bg-white px-12 py-8 rounded-xl drop-shadow-lg">
        <div className="flex flex-col items-center">
          <h2 className="font-slab text-2xl text-gray-700">
            My Life Story book
          </h2>
          <p className="text-sky-400">Let's write your own story</p>
        </div>
        <form
          className="flex flex-col mt-6 gap-4 text-gray-500"
          onSubmit={handleLogin}
        >
          <div className="flex flex-col gap-1">
            <label for="email" className="text-sm ">
              E-mail
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={loginForm.email}
              className="px-2 py-1 rounded-md bg-gray-200"
              onChange={(evt) =>
                setLoginForm({ ...loginForm, email: evt.target.value })
              }
            />
          </div>
          <div className="flex flex-col gap-1">
            <label for="password" className="text-sm">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={loginForm.password}
              className="px-2 py-1 rounded-md bg-gray-200"
              onChange={(evt) =>
                setLoginForm({ ...loginForm, password: evt.target.value })
              }
            />
          </div>

          <button
            type="submit"
            className="mt-4 bg-sky-400 rounded-md py-1 text-white hover:bg-sky-500"
          >
            Login
          </button>
        </form>
      </div>
    </section>
  );
}
