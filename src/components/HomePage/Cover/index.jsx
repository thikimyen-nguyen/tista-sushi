
import Banner from "../../../assets/images/cover.jpg";
import "./index.css";


export function Cover() {
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
