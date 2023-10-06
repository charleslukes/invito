import { A, useNavigate } from "@solidjs/router";
import { createSignal, Show } from "solid-js";
import Logo from "../assets/logo1.png";
import { loginUser } from "../service";
import { Ok } from "../service/constants";
import ErrorAlert from "../components/alert/ErrorAlert";

function Login() {
  const navigate = useNavigate();
  const [loginApiResp, setLoginApiResp] = createSignal(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target[0].value;
    const res = await loginUser(username);
    const { status, message } = await res.json();
    if (res.status === Ok) {
      navigate("/home", { replace: true, state: { username } });
    } else {
      setLoginApiResp({
        title: status,
        details: message,
      });

      setTimeout(() => {
        setLoginApiResp(null);
      }, 3000);
    }
  };

  return (
    <div class="flex flex-col items-center content-between w-96">
      <div>
        <img class="h-20" src={Logo} alt="app logo" />
      </div>
      <h1 class="text-2xl text-gray-900 font-semibold py-1">Hello Again 👋</h1>
      <div class="text-gray-500 text-sm">Welcome back, you've been missed</div>

      <form class="w-full" onsubmit={handleSubmit}>
        <Show when={loginApiResp()} fallback={<></>}>
          <ErrorAlert
            title={loginApiResp().title}
            details={loginApiResp().details}
            handleClick={() => setLoginApiResp(null)}
          />
        </Show>
        <div class="my-3">
          <label
            for="username"
            class="block text-sm font-medium leading-6 text-gray-900"
          >
            Username
          </label>
          <div class="mb-2">
            <input
              required
              type="text"
              name="username"
              id="username"
              placeholder="sparks"
              autocomplete="family-name"
              class="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <button
          type="submit"
          class="mt-3 px-5 py-3 font-semibold text-white bg-slate-700 w-full rounded-md"
        >
          Login
        </button>
      </form>
      <div class="text-gray-500 text-sm absolute inset-x-50 bottom-4">
        Don't have an account yet?{" "}
        <A class="text-gray-900 cursor-pointer" href="/register">
          Register now
        </A>
      </div>
    </div>
  );
}

export default Login;
