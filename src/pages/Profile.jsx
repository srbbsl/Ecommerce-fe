import { MyOrders } from "./MyOrders"

export const Profile = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">

      <div className="flex-grow container mx-auto px-4 md:px-8 py-10">

        <div className="flex flex-col md:flex-row md:space-x-8 space-y-6 md:space-y-0">

          {/* Left Section */}
          <div className="md:w-1/3 lg:w-1/4 bg-white shadow-2xl rounded-2xl p-6 border border-gray-100">
            <div className="flex flex-col items-center text-center space-y-4">
              <img
                src="https://i.pravatar.cc/100"
                alt="User avatar"
                className="w-24 h-24 rounded-full shadow-md"
              />
              <div>
                <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">John Doe</h1>
                <p className="text-sm text-gray-500">john@example.com</p>
              </div>
              <button
                className="bg-red-500 w-full text-white py-2 rounded-xl hover:bg-red-600 transition-all duration-200 font-medium"
              >
                Logout
              </button>
            </div>
          </div>

          {/* Right Section: Orders table */}
          <div className="flex-1 bg-white shadow-xl rounded-2xl p-6 border border-gray-100">
            <MyOrders />
          </div>

        </div>

      </div>

    </div>
  );
}
