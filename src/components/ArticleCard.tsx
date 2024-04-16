import { ARTICLE2 } from "../assets/images"


export const ArticleCard = () => {
  return (
    <div className="flex items-start gap-4">
        <div>
            <img src={ARTICLE2} alt="" />
        </div>
        <div className="flex flex-col justify-start">
            <h3 className="text-[#E93740] text-[14px] leading-[14px] font-bold mb-0">May 7, 2023</h3>
            <h2 className="text-[20px] leading-[30px] font-bold pt-4 mb-0">Car Rental Hacks for a Smooth Journey</h2>
            <h3 className="text-[#8B8B8B] text-[16px] leading-[24px] font-normal pt-4 mb-0">Learn insider tips for getting the best deals and making<br/> the most of your rental car experience.</h3>
        </div>
    </div>
  )
}
