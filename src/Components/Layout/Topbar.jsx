import { IoLogoInstagram } from 'react-icons/io';
import { TbBrandMeta } from 'react-icons/tb';
import { RiTwitterXLine } from 'react-icons/ri';


export const Topbar = () => {
  return (
    <div className="bg-yellow-600 text-white">
        <div className="container mx-auto flex justify-between p-1">
            <div className="hidden md:flex space-x-4">
                <a href='#' className="hover:text-amber-900">
                    <IoLogoInstagram className='h-5 w-5'/>
                </a>
                <a href='#' className="hover:text-amber-900">
                    <TbBrandMeta className='h-5 w-5'/>
                </a>
                <a href='#' className="hover:text-amber-900">
                    <RiTwitterXLine className='h-4 w-4'/>
                </a>
            </div>
            <div className='text-center flex-grow'>
                <span>We deliver all over Nepal</span>
            </div>
            <div className='hidden md:block'>
                <a href='tel: +977-9849585858' className='hover:text-amber-900'>
                    tel: +977-9849585858
                </a>
            </div>
        </div>
    </div>
  )
}
