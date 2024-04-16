import { DASH } from "../assets/icons"
import { PICTURE1, PICTURE2, PICTURE3, PICTURE4, PICTURE5, PICTURE6 } from "../assets/images"

const Locations = () => {
  return (
    <div>
        <div className="pb-[56px] pt-[100px] grid place-items-center">
            <h1 className="text-center text-[48px] text-[#1C1C1C] leading-[48px] font-bold pb-[24px]">Featured Locations</h1>
            <DASH/>
      </div>
      <div className="grid grid-cols-4 px-4 gap-[39px]">
            <div className="col-span-1">
                <img src={PICTURE1} alt="" className="w-full object-cover h-full"/>
            </div>
            <div className="col-span-2 grid grid-cols-2 gap-[35px]">
                <img src={PICTURE2} alt="" className="w-full object-cover h-full rounded-[10px]"/>
                <img src={PICTURE3} alt="" className="w-full object-cover h-full rounded-[10px]"/>
                <img src={PICTURE5} alt="" className="w-full object-cover h-full rounded-[10px]"/>
                <img src={PICTURE6} alt="" className="w-full object-cover h-full rounded-[10px]"/>
            </div>
            <div className="col-span-1">
                <img src={PICTURE4} alt="" className="w-full object-cover h-full"/>
            </div>
      </div>
    </div>
  )
}

export default Locations