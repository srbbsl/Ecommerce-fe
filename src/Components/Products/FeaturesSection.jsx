import { CiDeliveryTruck } from "react-icons/ci";
import { GiReturnArrow } from "react-icons/gi";
import { GrSecure } from "react-icons/gr";
export const FeaturesSection = () => {
  return (
    <section className='py-16 px-4 bg-white'>
        <div className='grid md:grid-cols-3 gap-8 text-center'>
            {/* Feature 1 */}
            <div className='flex flex-col items-center'>
                <div className='p-4 rounded-full mb-2'>
                    <CiDeliveryTruck size={40} className='text-xl'/>
                </div>

                <h4 className='tracking-tighter mb-2'>
                    FREE DELIVERY ALL OVER NEPAL.
                </h4>

                <p className='text-gray-600 text-sm tracking-tighter'>
                    On all orders over NPR. 50000
                </p>
            </div>

            {/* Feature 2 */}
            <div className='flex flex-col items-center'>
                <div className='p-4 rounded-full mb-2'>
                    <GiReturnArrow size={40} className='text-xl'/>
                </div>

                <h4 className='tracking-tighter mb-2'>
                    30 DAYS RETURN
                </h4>

                <p className='text-gray-600 text-sm tracking-tighter'>
                    Money back guarantee
                </p>
            </div>

            {/* Feature 3 */}
            <div className='flex flex-col items-center'>
                <div className='p-4 rounded-full mb-2'>
                    <GrSecure size={40} className='text-xl'/>
                </div>

                <h4 className='tracking-tighter mb-2'>
                    SECURE ACCOUNT
                </h4>

                <p className='text-gray-600 text-sm tracking-tighter'>
                    Secured checkout process
                </p>
            </div>

            
        </div>
    </section>
  )
}
