import BrandOne from '../assets/brand/brand-01.svg';
import BrandTwo from '../assets/brand/brand-02.svg';
import BrandThree from '../assets/brand/brand-03.svg';
import BrandFour from '../assets/brand/brand-04.svg';
import BrandFive from '../assets/brand/brand-05.svg';

const Table = () => {
  return (
    <div class="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 class="mb-6 text-xl font-semibold text-black">
        Users
      </h4>

      <div class="flex flex-col">
        <div class="grid grid-cols-3 rounded-sm bg-gray-100 sm:grid-cols-5">
          <div class="p-2.5 xl:p-5">
            <h5 class="text-sm font-medium uppercase xsm:text-base">
              Source
            </h5>
          </div>
          <div class="p-2.5 text-center xl:p-5">
            <h5 class="text-sm font-medium uppercase xsm:text-base">
              Visitors
            </h5>
          </div>
          <div class="p-2.5 text-center xl:p-5">
            <h5 class="text-sm font-medium uppercase xsm:text-base">
              Revenues
            </h5>
          </div>
          <div class="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 class="text-sm font-medium uppercase xsm:text-base">
              Sales
            </h5>
          </div>
          <div class="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 class="text-sm font-medium uppercase xsm:text-base">
              Conversion
            </h5>
          </div>
        </div>

        <div class="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-5">
          <div class="flex items-center gap-3 p-2.5 xl:p-5">
            <div class="flex-shrink-0">
              <img src={BrandOne} alt="Brand" />
            </div>
            <p class="hidden text-black sm:block">Google</p>
          </div>

          <div class="flex items-center justify-center p-2.5 xl:p-5">
            <p class="text-black">3.5K</p>
          </div>

          <div class="flex items-center justify-center p-2.5 xl:p-5">
            <p class="text-meta-3">$5,768</p>
          </div>

          <div class="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p class="text-black">590</p>
          </div>

          <div class="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p class="text-meta-5">4.8%</p>
          </div>
        </div>

        <div class="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-5">
          <div class="flex items-center gap-3 p-2.5 xl:p-5">
            <div class="flex-shrink-0">
              <img src={BrandTwo} alt="Brand" />
            </div>
            <p class="hidden text-black sm:block">
              Twitter
            </p>
          </div>

          <div class="flex items-center justify-center p-2.5 xl:p-5">
            <p class="text-black">2.2K</p>
          </div>

          <div class="flex items-center justify-center p-2.5 xl:p-5">
            <p class="text-meta-3">$4,635</p>
          </div>

          <div class="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p class="text-black">467</p>
          </div>

          <div class="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p class="text-meta-5">4.3%</p>
          </div>
        </div>

        <div class="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-5">
          <div class="flex items-center gap-3 p-2.5 xl:p-5">
            <div class="flex-shrink-0">
              <img src={BrandThree} alt="Brand" />
            </div>
            <p class="hidden text-black sm:block">Github</p>
          </div>

          <div class="flex items-center justify-center p-2.5 xl:p-5">
            <p class="text-black">2.1K</p>
          </div>

          <div class="flex items-center justify-center p-2.5 xl:p-5">
            <p class="text-meta-3">$4,290</p>
          </div>

          <div class="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p class="text-black">420</p>
          </div>

          <div class="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p class="text-meta-5">3.7%</p>
          </div>
        </div>

        <div class="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-5">
          <div class="flex items-center gap-3 p-2.5 xl:p-5">
            <div class="flex-shrink-0">
              <img src={BrandFour} alt="Brand" />
            </div>
            <p class="hidden text-black sm:block">Vimeo</p>
          </div>

          <div class="flex items-center justify-center p-2.5 xl:p-5">
            <p class="text-black">1.5K</p>
          </div>

          <div class="flex items-center justify-center p-2.5 xl:p-5">
            <p class="text-meta-3">$3,580</p>
          </div>

          <div class="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p class="text-black">389</p>
          </div>

          <div class="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p class="text-meta-5">2.5%</p>
          </div>
        </div>

        <div class="grid grid-cols-3 sm:grid-cols-5">
          <div class="flex items-center gap-3 p-2.5 xl:p-5">
            <div class="flex-shrink-0">
              <img src={BrandFive} alt="Brand" />
            </div>
            <p class="hidden text-black sm:block">
              Facebook
            </p>
          </div>

          <div class="flex items-center justify-center p-2.5 xl:p-5">
            <p class="text-black">1.2K</p>
          </div>

          <div class="flex items-center justify-center p-2.5 xl:p-5">
            <p class="text-meta-3">$2,740</p>
          </div>

          <div class="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p class="text-black">230</p>
          </div>

          <div class="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p class="text-meta-5">1.9%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;