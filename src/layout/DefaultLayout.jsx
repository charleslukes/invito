import { Outlet } from "@solidjs/router";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { createSignal } from "solid-js";
import Table from "../components/Table";
import Card from "../components/Card";

const DefaultLayout = () => {
  const [sidebarOpen, setSidebarOpen] = createSignal(true);

  console.log(sidebarOpen);

  return (
    <div class="dark:bg-boxdark-2 dark:text-bodydark">
      {/* <!-- ===== Page Wrapper Start ===== --> */}
      <div class="flex h-screen overflow-hidden">
        {/* <!-- ===== Sidebar Start ===== --> */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        {/* <!-- ===== Sidebar End ===== --> */}

        {/* <!-- ===== Content Area Start ===== --> */}
        <div class="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          {/* <!-- ===== Header Start ===== --> */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          {/* <!-- ===== Header End ===== --> */}

          {/* <!-- ===== Main Content Start ===== --> */}
          <main>
            <div class="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
                <Card />
                <Card />
                <Card />
                <Card />
              </div>
              <div className="col-span-12 xl:col-span-8 mt-4 md:mt-6">
                <Table />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
