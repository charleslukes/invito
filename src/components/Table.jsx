import { For } from "solid-js";

const Table = (props) => {
  return (
    <div class="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 class="mb-6 text-xl font-semibold text-black">Users</h4>

      <div class="flex flex-col">
        <div class="grid grid-cols-3 rounded-sm bg-gray-100 sm:grid-cols-4">
          <div class="p-2.5 xl:p-5">
            <h5 class="text-sm font-medium uppercase xsm:text-base">
              Username
            </h5>
          </div>
          <div class="p-2.5 text-center xl:p-5">
            <h5 class="text-sm font-medium uppercase xsm:text-base">Email</h5>
          </div>
          <div class="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 class="text-sm font-medium uppercase xsm:text-base">
              Referral Code
            </h5>
          </div>
          <div class="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 class="text-sm font-medium uppercase xsm:text-base">
              Created At
            </h5>
          </div>
        </div>

        <For each={props?.table}>
          {(data, i) => {
            const isLast = props.table.length - 1 === i;
            return (
              <div
                class={`grid grid-cols-3 ${
                  isLast ? "" : "border-b border-stroke"
                } sm:grid-cols-4`}
              >
                <div class="flex items-center gap-3 p-2.5 xl:p-5">
                  <p class="text-black">{data.user_name}</p>
                </div>

                <div class="flex items-center justify-center p-2.5 xl:p-5">
                  <p class="text-meta-3">{data.email}</p>
                </div>

                <div class="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                  <p class="text-black">{data.ref_code}</p>
                </div>

                <div class="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                  <p class="text-meta-5">{data.createdAt}</p>
                </div>
              </div>
            );
          }}
        </For>
      </div>
    </div>
  );
};

export default Table;
