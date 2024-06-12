
import Banner from "../../assets/images/cover.jpg";
import "./index.css";


export function Cover() {
  return (
    <div className="relative h-52 md:h-64 lg:h-80 overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center animate-zoomIn"
      style={{ backgroundImage: `url(${Banner})` }}
    ></div>
    <div className="relative flex items-center justify-center h-full bg-black bg-opacity-50">
      <h1 className="text-white text-lg">Welcome to Tista Sushi</h1>
    </div>
  </div>
  );
}
