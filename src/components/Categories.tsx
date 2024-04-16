import { DASH, DOLLAR, EVENT, HOUSE_ICON, LOADING_ICON, THUMB_UP } from "../assets/icons"


const Categories = () => {
  return (
    <div className=" pt-[100px] pb-[100px]">
      <div className="pb-[64px] grid place-items-center">
        <h1 className="text-center text-[48px] text-[#1C1C1C] leading-[48px] font-bold pb-[24px]">Browse From Top Categories</h1>
        <DASH/>
      </div>
      <div className="flex justify-center">
        <div className="flex border rounded-[55px] pl-1 py-2 pr-[38px] mr-[62px]">
          <THUMB_UP/>
          <button className="pl-[20px]">Holiday Rentals</button>
        </div>
        <div className="flex border rounded-[55px] pl-1 py-2 pr-[38px] mr-[62px]">
          <HOUSE_ICON/>
          <button className="pl-[20px]">Residential Spaces</button>
        </div>
        <div className="flex border rounded-[55px] pl-1 py-2 pr-[38px] mr-[62px]">
          <EVENT/>
          <button className="pl-[20px]">Event Spaces</button>
        </div>
        <div className="flex border rounded-[55px] pl-1 py-2 pr-[38px] mr-[62px]">
          <DOLLAR/>
           <button className="pl-[20px]">Commercial Properties</button>
        </div>
        <div className="flex border rounded-[55px] pl-1 py-2 pr-[38px] mr-[62px]">
          <LOADING_ICON/>
          <button className="pl-[20px]">More</button>
        </div>
      </div>
    </div>
  )
}

export default Categories