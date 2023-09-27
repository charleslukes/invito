import Logo from "../assets/logo1.png";

function SignUp() {
  return (
    <div class="flex flex-col items-center content-between w-96">
      <div>
        <img class="h-20" src={Logo} alt="app logo" />
      </div>
      <h1 class="text-2xl text-gray-900 font-semibold py-1">Sign Up</h1>
      <div class="text-gray-500 text-sm">Join, Explore, Interact</div>

      <form class="w-full">
        <div class="my-3">
          <label
            for="username"
            class="block text-sm font-medium leading-6 text-gray-900"
          >
            Username
          </label>
          <div class="mb-2">
            <input
              type="text"
              name="username"
              id="username"
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
              id="email"
              name="email"
              type="email"
              autocomplete="email"
              placeholder="abc@email.com"
              class="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <button
          type="submit"
          class="mt-3 px-5 py-3 font-semibold text-white bg-blue-500 w-full rounded-md"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default SignUp;
