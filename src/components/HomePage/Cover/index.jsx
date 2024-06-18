import Banner from "../../../assets/images/cover.jpg";
import "./index.css";
import BannerTwo from "../../../assets/images/hinh3.webp";
import image2 from "../../../assets/images/sushidishbgremove.png";
import { SecondaryButton } from "../../Buttons";

export function MainCover() {
  return (
    <div className="relative h-56 sm:h-80 md:h-96 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center animate-zoomIn"
        style={{ backgroundImage: `url(${Banner})` }}
      ></div>
      <div className="relative flex items-center justify-end right-10 md:right-32 lg:right-64 h-full">
        <h1 className="font-styling text-primary text-2xl md:text-4xl lg:text-6xl">
          Delight in Every Bite!
        </h1>
      </div>
    </div>
  );
}
export function CoverTwo() {
  function handleOrderButton() {
    window.location.href = "https://tista-sushi.orderintelligence.no/";
  }
  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${BannerTwo})` }}
      ></div>
       <div className="absolute w-full top-10 flex items-center justify-center">
        {" "}
        <h1 className="my-5 text-center pt-10 ">
          THE TASTE OF TRUE SUSHI!
        </h1>
       
      </div>
      <div className="absolute inset-0 flex items-center justify-center top-44">
        <img
          src={image2}
          alt="tista sushi maki roll"
          style={{ width: "400px" }}
          className="animate-zoomIn"
        />
      </div>
      <div className="absolute w-full bottom-16 flex flex-col items-center justify-center">
        {" "}
        <p className="my-5 text-center">
          Enjoy your favorite sushi from the comfort of your home with our easy
          and convenient online ordering.
        </p>
        <div className="text-center">
          <SecondaryButton label="Order Now" onClick={handleOrderButton} />
        </div>
      </div>
    </div>
  );
}

