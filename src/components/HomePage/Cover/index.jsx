
import Banner from "../../../assets/images/cover.jpg";
import "./index.css";
import BannerTwo from "../../../assets/images/hinh3.webp";
import image2 from "../../../assets/images/bgremove2.png";
import image3 from "../../../assets/images/removebg.png";


export function MainCover() {
  return (
    <div className="relative h-56 sm:h-80 md:h-96 overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center animate-zoomIn"
      style={{ backgroundImage: `url(${Banner})` }}
    ></div>
    <div className="relative flex items-center justify-end right-10 md:right-32 lg:right-64 h-full">
      <h1 className="font-styling text-primary text-2xl md:text-4xl lg:text-6xl">Delight in Every Bite!</h1>
    </div>
  </div>
  );
}
export function CoverTwo() {
  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${BannerTwo})` }}
      ></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <img src={image2} alt="tista sushi maki roll"/>
      </div>
     
    </div>
  );
}
export function CoverThree() {
  return (
    <div className="relative h-screen">
     
      <div className="absolute inset-0 flex items-center justify-center">
        <img src={image3} alt="sushi maki roll" className="max-w-full max-h-full animate-spin" />
      </div>
    </div>
  );
}