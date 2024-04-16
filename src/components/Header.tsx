import { LOGO, PLUS, USER } from "../assets/icons"


const Header = () => {
  return (
    <>
    <div className='flex justify-around items-center pt-5 pb-6'>
        <div>
            <LOGO/>
        </div>

        <div className='flex'>
            <h3 className="pr-12 text-[16px] leading-[20px] font-normal">Home</h3>
            <h3 className='pr-12 text-[16px] leading-[20px] font-normal'>Rentals</h3>
            <h3 className='pr-12 text-[16px] leading-[20px] font-normal'>Categories</h3>
            <h3 className='pr-12 text-[16px] leading-[20px] font-normal'>About Us</h3>
            <h3 className='pr-12 text-[16px] leading-[20px] font-normal'>Contact</h3>
            <h3 className='pr-12 text-[16px] leading-[20px] font-normal'>Blog</h3>
        </div>

        <div className='flex'>
            <button className="flex items-center rounded-[45px] px-5 py-2.5 text-[#E93740] text-center font-medium text-[16px] leading-[14px]">
                <USER/>
                Sign in
            </button>
            <button className='flex items-center bg-[#E93740] rounded-[45px] px-5 py-2.5 ml-3 text-white text-center font-medium text-[16px] leading-[14px]'>
                <PLUS/>
                Post Listing
            </button>
        </div>
   </div>
    </>
  )
}

export default Header