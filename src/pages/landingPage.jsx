import { Outlet } from "@solidjs/router";

function LandingPage() {
  return (
    <div class="grid grid-cols-1 h-full md:grid-cols-2">
      {/* left */}
      <div class="p-3 flex justify-center items-center relative">
        <Outlet />
      </div>

      {/* right */}
      <div class="bg-gray-200 hidden md:block"></div>
    </div>
  );
}

export default LandingPage;
