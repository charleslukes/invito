import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import {
  createResource,
  createSignal,
  createEffect,
  Show,
  For,
} from "solid-js";
import Table from "../components/Table";
import Card from "../components/Card";
import { allUsers, getUser, getUserDataEventApi } from "../service";
import { isObjEmpty } from "../util";

const DefaultLayout = (props) => {
  const [sidebarOpen, setSidebarOpen] = createSignal(false);
  const [data, { mutate }] = createResource(allUsers);
  const [user, { refetch }] = createResource(() => props.username, getUser);
  const [userDataEvent, setUserDataEvent] = createSignal({});
  const [tableState, setTableState] = createSignal([]);

  // listen to events
  getUserDataEventApi(setUserDataEvent);

  createEffect(() => {
    const { event_data } = userDataEvent();
    if (event_data && !isObjEmpty(event_data)) {
      mutate((users) => [...users, event_data]);
      refetch();
    }
  });

  createEffect(() => {
    if (!data.loading) {
      // populate table state
      setTableState(data());
    }
  });

  const searchInput = (e) => {
    const value = e.target.value?.trim();
    const tableData = data();
    if (value) {
      const filteredData = tableData.filter(
        (tableValues) =>
          tableValues.user_name.includes(value) ||
          tableValues.email.includes(value) ||
          tableValues.ref_code.includes(value)
      );
      setTableState(filteredData);
    } else {
      setTableState(tableData);
    }
  };

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
          <Header
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
            searchInput={searchInput}
          />
          {/* <!-- ===== Header End ===== --> */}

          {/* <!-- ===== Main Content Start ===== --> */}
          <main>
            <div class="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:gap-7.5">
                <Show when={!user.loading} fallback={<Card detail="no user" />}>
                  <For each={user()}>
                    {(userCard) => (
                      <Card title={userCard.title} detail={userCard.detail} />
                    )}
                  </For>
                </Show>
              </div>
              <div className="col-span-12 xl:col-span-8 mt-4 md:mt-6">
                <Show when={!data.loading} fallback={<h1>No Users</h1>}>
                  <Table table={tableState()} />
                </Show>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
