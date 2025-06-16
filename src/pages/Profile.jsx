import { MyOrders } from "./MyOrders"

export const Profile = () => {
  return (
    <div className="border-5 border-red-600 flex flex-col min-h-screen">

      <div className="border-4 border-green-400 flex-grow p-4 md:p-6">

        <div className="border-3 border-purple-500 flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">

          {/* Left Section */}
          <div className="md:w-1/3 lg:w-1/4 shadow-xl rounded-lg p-6">
            <h1 className="text-2xl md:text-3xl font-bold">John Doe</h1>
            <p className="text-lg text-gray-600">John@example.com</p>
            <button
              className="bg-red-500 w-full text-white py-2 px-4 rounded hover:bg-red-600"
            >
                Logout
            </button>
          </div>

          {/* Right Section: Orders tabel */}
          <div>
            <MyOrders />
          </div>

        </div>  

      </div>  
      
    </div>
    
  )
}
