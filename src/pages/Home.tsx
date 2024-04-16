import { ARROW_DOWN, MAP, SEARCH } from "../assets/icons"
import Articles from "../components/Articles"
import Categories from "../components/Categories"
import Insights from "../components/Insights"
import Listings from "../components/Listings"
import Locations from "../components/Locations"


const Home = () => {
  return (
    <>
    <div className="bg-[url('./home-cover-image.png')] bg-cover pb-[316px]">
        <div>
            <div className="">
                <h1 className="text-[64px] font-extrabold leading-[72px] text-center pt-[180px]">Discover Your <span className="text-[#E93740]">Perfect Rental</span></h1>
                <p className="text-center pt-[32px] leading-[48px] font-normal text-[32px]">Rent Cars, Houses, and Items in Just a Few Clicks</p>
            </div>
            <div className="text-center ">
                <div className="flex justify-center pt-[48px] pb-[24px]">
                    <div className="flex border rounded-[55px] px-6 py-2.5 mr-[16px] bg-[#E93740]">
                        <button className="text-[16px] leading-[24px] font-normal text-white">Places</button>
                    </div>
                    <div className="flex border rounded-[55px] px-6 py-2.5 mr-[16px] bg-white">
                        <button className="text-[16px] leading-[24px] font-normal">Rides</button>
                    </div>
                    <div className="flex border rounded-[55px] px-6 py-2.5 bg-white">
                        <button className="text-[16px] leading-[24px] font-normal">Things</button>
                    </div>
                </div>
                <form className="flex justify-center items-center bg-[#fff] rounded-[80px] w-[794px] h-[96px] mx-auto pl-8 pr-5">
                    <div className="flex w-full h-full gap-6">
                        <div className="flex items-center w-1/2">
                            <SEARCH/>
                            <input 
                            type="text"
                            placeholder="Search for cars, houses, and more.."
                            className="pl-3 w-[263px] text-left outline-none"
                            />
                        </div>
                        <div className="w-[1px] h-[100%] bg-[#E6E6E6]"></div>
                        <div className="flex items-center w-1/2">
                            <MAP/>
                            <input 
                            type="text"
                            placeholder='Select Location'
                            className="pl-3 outline-none"
                            />
                            <ARROW_DOWN/>
                        </div>
                    </div>
                    <button className="bg-[#E93740] rounded-full grid place-items-center h-[55px] w-[55px] min-h-[55px] min-w-[55px]">
                        <SEARCH color="#FFFFFF"/>
                    </button>
                </form>
                
            </div>
        </div>
    </div>
    <Categories/>
    <Listings/>
    <Insights/>
    <Locations/>
    <Articles/>
    </>
  )
}

export default Home