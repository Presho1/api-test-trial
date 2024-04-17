import { DASH } from "../assets/icons"
import { ARTICLE1 } from "../assets/images"
import { ArticleCard } from "./ArticleCard"

const Articles = () => {
  return (
    <div>
        <div className="pb-[56px] pt-[100px] grid place-items-center">
            <h1 className="text-center text-[48px] font-['Plus Jakarta Sans'] text-[#1C1C1C] leading-[48px] font-bold pb-[24px]">Important Articles</h1>
            <DASH/>
        </div>
        <div className="grid grid-cols-2 gap-8 pb-[100px] pl-6">
            <div className="col-span-1">
                <img src={ARTICLE1} alt="" className="w-full object-cover"/>
                <div>
                    <h3 className="text-[#E93740] text-[14px] font-['Plus Jakarta Sans'] leading-[14px] font-bold pt-4">February 4, 2023</h3>
                    <h2 className="text-[20px] font-['Plus Jakarta Sans'] leading-[30px] font-bold pt-2">Top Tips for Finding the Perfect Rental</h2>
                    <h3 className="text-[#8B8B8B] text-[16px] font-['Plus Jakarta Sans'] leading-[24px] font-normal pt-2">Discover expert advice on how to find the ideal rental property that meets your needs and budget.</h3>
                </div>
            </div>
            <div>
                <div className="col-span-1 flex flex-col gap-6">
                    <ArticleCard/>
                    <ArticleCard/>
                    <ArticleCard/>
                    <ArticleCard/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Articles