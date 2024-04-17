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
            <div className="flex items-center px-[30px] py-[15px]">
                <USER/>
                <button className="pl-2  text-[#E93740] text-center font-medium text-[16px] leading-[14px]">Sign in</button>
            </div>
            <div className="flex items-center border rounded-[55px] bg-[#E93740] px-[30px] py-[15px]">
                <PLUS/>
                <button className="pl-2 text-white text-center font-medium text-[16px] leading-[14px]">Post Listing</button>
            </div>
        </div>
   </div>
    </>
  )
}

export default Header