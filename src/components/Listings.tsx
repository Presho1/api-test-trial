import { ARROW_RIGHT, DASH } from "../assets/icons"
import PropertyCard from "./PropertyCard"


const Listings = () => {
  return (
    <div>
      <div className="pb-[56px] grid place-items-center">
        <h1 className="text-center text-[48px] text-[#1C1C1C] leading-[48px] font-bold pb-[24px]">Featured Listings</h1>
        <DASH/>
      </div>
      <div className="flex justify-center pb-[56px]">
        <div className="flex border rounded-[55px] px-4 py-2.5 mr-[34px] bg-[#E93740]">
          <button className="text-[16px] leading-[24px] font-normal text-white">All Items (5125)</button>
        </div>
        <div className="flex border rounded-[55px] px-4 py-2.5 mr-[34px] bg-[#E8E8E8]">
          <button className="text-[16px] leading-[24px] font-normal">Residential Spaces (64)</button>
        </div>
        <div className="flex border rounded-[55px] px-4 py-2.5 mr-[34px] bg-[#E8E8E8]">
          <button className="text-[16px] leading-[24px] font-normal">Sports Venues</button>
        </div>
        <div className="flex border rounded-[55px] px-4 py2.5 mr-[34px] bg-[#E8E8E8]">
           <button className="text-[16px] leading-[24px] font-normal">Meeting Spaces</button>
        </div>
        <div className="flex border rounded-[55px] px-4 py-2.5 mr-[34px] bg-[#E8E8E8]">
          <button className="text-[16px] leading-[24px] font-normal">Vans & Buses</button>
        </div>
        <div className="flex border rounded-[55px] px-4 py-2.5 mr-[34px] bg-[#E8E8E8]">
          <button className="text-[16px] leading-[24px] font-normal">Cars & SUVs </button>
        </div>
        <div className="flex border rounded-[55px] px-4 py-2.5 mr-[34px] bg-[#E8E8E8]">
          <button className="text-[16px] leading-[24px] font-normal">Lorries & Industrial Vehicles</button>
        </div>
        <div className="flex items-center border rounded-[55px] px-4 py-2.5 mr-[34px] bg-[#E8E8E8]">
          <ARROW_RIGHT/>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-8 px-6">
        <PropertyCard/>
        <PropertyCard/>
        <PropertyCard/>
        <PropertyCard/>
        <PropertyCard/>
        <PropertyCard/>
      </div>
      <div className="flex justify-center pt-[48px] pb-[100px]">
        <div className="flex border rounded-[55px] px-4 py-2.5 mr-[34px] bg-[#E93740]">
          <button className="text-[16px] leading-[24px] font-normal text-white">Load More</button>
        </div>
      </div>
    </div>
  )
}

export default Listings