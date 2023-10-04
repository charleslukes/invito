import { createSignal, Show } from "solid-js";
import { useNavigate } from "@solidjs/router";
import { register } from "../service";
import { CREATED } from "../service/constants";
import Logo from "../assets/logo1.png";
import ErrorAlert from "../components/alert/ErrorAlert";
import SuccessAlert from "../components/alert/SuccessAlert";

const SignUpEnum = {
  init: 0,
  error: 1,
  success: 2,
};

function SignUp() {
  const navigate = useNavigate();
  const [signUpRes, setSignUpRes] = createSignal(SignUpEnum.init);
  const [signUpApiResp, setSignUpApiResp] = createSignal({
    title: "",
    details: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);
    let formObj = {};
    for (let [key, value] of Array.from(formData.entries())) {
      if (value.toString()) {
        formObj[key] = value.toString();
      }
    }

    const res = await register(JSON.stringify(formObj));
    const { status, message } = await res.json();
    setSignUpApiResp({ title: status, details: message });
    if (res?.status == CREATED) {
      setSignUpRes(SignUpEnum.success);
      setTimeout(() => {
        setSignUpRes(SignUpEnum.init);
        navigate("/login", { replace: true });
      }, 2000);
    } else {
      setSignUpRes(SignUpEnum.error);
    }
  };

  return (
    <div class="flex flex-col items-center content-between w-96">
      <div>
        <img class="h-20" src={Logo} alt="app logo" />
      </div>
      <h1 class="text-2xl text-gray-900 font-semibold py-1">Sign Up</h1>
      <div class="text-gray-500 text-sm">Join, Explore, Interact</div>

      <form class="w-full" onsubmit={handleSubmit}>
        <Show when={signUpRes() === SignUpEnum.success} fallback={<></>}>
          <SuccessAlert
            title={signUpApiResp().title}
            details={signUpApiResp().details}
            handleClick={() => setSignUpRes(SignUpEnum.init)}
          />
        </Show>

        <Show when={signUpRes() === SignUpEnum.error} fallback={<></>}>
          <ErrorAlert
            title={signUpApiResp().title}
            details={signUpApiResp().details}
            handleClick={() => setSignUpRes(SignUpEnum.init)}
          />
        </Show>

        <div class="my-3">
          <label
            for="user_name"
            class="block text-sm font-medium leading-6 text-gray-900"
          >
            Username
          </label>
          <div class="mb-2">
            <input
              required
              type="text"
              name="user_name"
              id="user_name"
              placeholder="sparks"
              autocomplete="family-name"
              class="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div class="my-3">
          <label
            for="email"
            class="block text-sm font-medium leading-6 text-gray-900"
          >
            Email address
          </label>
          <div class="mb-2">
            <input
              required
              id="email"
              name="email"
              type="email"
              autocomplete="email"
              placeholder="abc@email.com"
              class="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div class="my-3">
          <label
            for="ref_code"
            class="block text-sm font-medium leading-6 text-gray-900"
          >
            Referral Code (optional)
          </label>
          <div class="mb-2">
            <input
              type="text"
              name="ref_code"
              id="ref_code"
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
          Register
        </button>
      </form>
    </div>
  );
}

export default SignUp;
