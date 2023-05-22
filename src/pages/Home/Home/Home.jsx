import useTitle from "../../../hooks/useTitle";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import ShopCategory from "../ShopCategory/ShopCategory";
import Payments from "./Payments";
import Marquee from "react-fast-marquee";

const Home = () => {
    useTitle("Home");
    return (
      <div>
        <Banner />
        <Gallery />
        <ShopCategory />

        {/* Review section */}
        <section className="mb-8">
          <h2 className="text-5xl text-center font-bold mb-4">Most Reviews</h2>
          <div className="max-w-5xl mx-auto rounded-lg shadow-md p-8">
            <div className="mb-4">
              <h3 className="text-lg font-semibold">User Feedback</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="bg-gray-200 p-4 rounded-lg">
                  <p className="text-black">
                    "I purchased a mickey mouse and frozen dolls from here.
                    The quality is too much good.So you guys should definitely buy from here."
                  </p>
                  <p className="mt-2 text-gray-500">- Mrs Namjoon</p>
                </div>
              </div>
              <div>
                <div className="bg-gray-200 p-4 rounded-lg">
                  <p className="text-gray-700">
                    "The dolls I buy everytime from here,it always provide my satisfaction.My children loves those so much"
                  </p>
                  <p className="mt-2 text-gray-500">- Enna Williamson</p>
                </div>
              </div>
            </div>
            <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
              Leave Your Feedback
            </button>
          </div>
        </section>

        {/* Stats section */}
        <section className="mb-8 text-center">
          <div className="stats stats-vertical lg:stats-horizontal shadow">
            <div className="stat">
              <div className="stat-title">Total Products</div>
              <div className="stat-value">100</div>
              <div className="stat-desc">January 1st - June 1st</div>
            </div>

            <div className="stat">
              <div className="stat-title">Seller</div>
              <div className="stat-value">10</div>
              <div className="stat-desc">↘︎ 40 (22%)</div>
            </div>

            <div className="stat">
              <div className="stat-title">Daily Visitors</div>
              <div className="stat-value">1K</div>
              <div className="stat-desc">↗︎ 90 (14%)</div>
            </div>
          </div>
        </section>

        {/* Delivery & partners */}
        <section className="mb-8">
          <h2 className="text-5xl text-center font-bold mb-4">
            Delivery & Payments
          </h2>
          <div className="max-w-7xl mx-auto rounded-lg shadow-md p-8">
            <p className="text-white text-center">
              Welcome to our website where you can find any types of disney dolls which is as like as your expectation.We provide quality based authentic products.The customer needs is the main priority to us.
            </p>
            <div className="mt-6 flex justify-between">
              <div>
                <h3 className="text-lg font-semibold">Delivery Partners</h3>
                <ul className="mt-2">
                  <li className="text-white">Fast &amp; Reliable Shipping</li>
                  <li className="text-white">
                    Free Shipping on Orders over $70
                  </li>
                  <li className="text-white">Express Delivery Option</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Payment Partners</h3>
                <ul className="mt-2">
                  <li className="text-white">Secure Online Payments</li>
                  <li className="text-white">Multiple Payment Methods</li>
                  <li className="text-white">Easy Returns &amp; Refunds</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <Marquee>
          <Payments />
        </Marquee>
      </div>
    );
};

export default Home;