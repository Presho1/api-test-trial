import { HEART } from "../assets/icons"
import { PROFILE, PROPERTY } from "../assets/images"


const PropertyCard = () => {
  return (
        <div className="">
            <div className="">
                <img className="w-full h-[325px] rounded-t-lg object-cover" src={PROPERTY} alt="" />
            </div>
            <div className="border rounded-b-lg">
                <div className="p-6 border-b">
                    <h3 className="text-[#E93740] font-['Plus Jakarta Sans'] text-[20px] leading-[36px] font-medium">85,000 LKR <span className="text-[#1C1C1C] text-[16px]">/Month</span></h3>
                    <h2 className="text-[24px] font-['Plus Jakarta Sans'] leading-[36px] font-semibold">Luxury villa in Rego Park</h2>
                    <div className="grid grid-cols-3 gap-[37px]">
                        <div className="border-[#E6E6E6] font-['Plus Jakarta Sans'] text-[16px] leading-[24px] font-normal border-r"><span className="">3 Bedrooms</span></div>
                        <div className="border-[#E6E6E6] font-['Plus Jakarta Sans'] text-[16px] leading-[24px] font-normal border-r">2 Bathrooms</div>
                        <div className="font-['Plus Jakarta Sans'] text-[16px] leading-[24px] font-normal">2500 Square FT</div>
                    </div>
                </div>
                <div className="flex justify-between items-center p-6">
                    <div className="flex items-center gap-4">
                        <div>
                            <img src={PROFILE} alt="" />
                        </div>
                        <div>
                            <h4 className="text-[20px] font-['Plus Jakarta Sans'] leading-[28px] font-semibold">Anne Liza</h4>
                            <h4 className="text-[14px] font-['Plus Jakarta Sans'] leading-[24px] font-normal text-[#676767]">Property Seller</h4>
                        </div>
                    </div>
                    <div>
                        <HEART/>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default PropertyCard