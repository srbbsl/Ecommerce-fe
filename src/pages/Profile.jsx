import { MyOrders } from "./MyOrders"

export const Profile = () => {
  return (
    <div className="flex flex-col min-h-screen">

      <div className="flex-grow container mx-auto p-4 md:p-6">

        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">

          {/* Left Section */}
          <div className="md:w-1/3 lg:w-1/4 shadow-xl rounded-lg p-6">
            <h1 className="text-2xl md:text-3xl font-bold">John Doe</h1>
            <p className="text-lg text-gray-600">John@example.com</p>
            <button
              className="bg-red-500 w-full text-white py-1 px-4 rounded hover:bg-red-600 font-medium"
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
