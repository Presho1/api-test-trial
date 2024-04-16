import { FaceBookSocial, IGSocial, LOGO, LinkedinSocial, XSocial, YoutubeSocial } from "../assets/icons"


const Footer = () => {
  return (
    <div>
        <footer className='flex justify-around items-center bg-[#F4F4F4] pt-12 pb-12'>
            <div className="">
                <LOGO/>
                <p className='mb-6 mt-4'> Sri Lanka's first & largest platform designed to create <br/> an online marketplace exclusively for RENT </p>
                <div className='flex'>
                    <IGSocial/>
                    <XSocial/>
                    <YoutubeSocial/>
                    <FaceBookSocial/>
                    <LinkedinSocial/>
                </div>
            </div>

            <div className='flex'>
                <div className="pr-20">
                    <h5 className='text-[#E93740] font-bold leading-[19.2px] text-[16px] mb-4'>Navigation</h5>
                    <p className='font-normal text-[14px] leading-[19.6px] mb-4'>About Us </p>
                    <p className='font-normal text-[14px] leading-[19.6px] mb-4'>Blog</p>
                    <p className='font-normal text-[14px] leading-[19.6px] mb-4'>Terms of Use</p>
                    <p className='font-normal text-[14px] leading-[19.6px]'>Privacy Policy</p>
                </div>  
                <div className="pr-20">
                    <h5 className='text-[#E93740] font-bold leading-[19.2px] text-[16px] mb-4'>Featured Locations</h5>
                    <p className='font-normal text-[14px] leading-[19.6px] mb-4'>Kandy</p>
                    <p className='font-normal text-[14px] leading-[19.6px] mb-4'>Anuradhapura</p>
                    <p className='font-normal text-[14px] leading-[19.6px] mb-4'>Badulla</p>
                    <p className='font-normal text-[14px] leading-[19.6px] mb-4'>Colombo</p>
                    <p className='font-normal text-[14px] leading-[19.6px]'>Kaluthara</p>
                </div>
                <div className="pr-20">
                    <h5 className='text-[#E93740] font-bold leading-[19.2px] text-[16px] mb-4'>Help</h5>
                    <p className='font-normal text-[14px] leading-[19.6px] mb-4'>FAQ</p>
                    <p className='font-normal text-[14px] leading-[19.6px]'>Contact Us</p>
                </div>
                <div>
                    <h5 className='text-[#E93740] font-bold leading-[19.2px] text-[16px] mb-4'>Subscribe to Our Newsletter</h5>
                    <p className='font-normal text-[14px] leading-[24px] pb-3'>Stay updated with the latest listings and <br/>rental tips.</p>
                    <input
                        id="email address"
                        type="email"
                        placeholder="Email Address"
                        className="text-sm font-normal leading-[15px] border border-[#CCCCCC] bg-transparent w-[275px] h-[15px] rounded-[47px] px-4 py-4 outline-none text-[#494949]"
                    />
                    <br/>
                    <button className="text-sm font-medium text-white rounded-[47px] w-[275px] px-12 py-3 bg-[#E93740] mt-4 ">Subscribe</button>
                </div>
            </div>
      </footer>
    </div>
  )
}

export default Footer