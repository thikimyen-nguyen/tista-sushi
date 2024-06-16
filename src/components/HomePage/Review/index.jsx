import image1 from "../../../assets/images/seafood-sushi-dish-with-details-simple-black-background.jpg";
import image2 from "../../../assets/images/seafood-sushi-dish-with-details-simple-black-background (3).jpg";

export function Gallery() {
  return (
    <div className="flex flex-col">
      <div className="flex">
        {" "}
        <div className="w-1/2">
          <img src={image1} alt="tista sushi maki" />
        </div>
        <div className="mx-auto align-center">
          <p>text text</p>
        </div>
      </div>
      <div className="flex ">
        <div className="w-1/2 ">
          <p>Text text</p>
        </div>
        <div className="w-1/2">
          <img src={image2} alt="tista sushi maki" />
        </div>
      </div>
    </div>
  );
}
