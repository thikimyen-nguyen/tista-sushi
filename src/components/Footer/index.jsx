import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.webp";
import { PrimaryButton } from "../Buttons";
export function Footer() {
  return (
    <footer className="text-center bg-lightOrange text-black">
      <a href="/" >
        {" "}
        <img src={logo} alt="holidaze logo" className="w-64 m-auto" />
      </a>
      <nav>
        <ul className="flex justify-center">
          <li className="p-4 hover:underline">
            <NavLink to="/contact">About Us</NavLink>
          </li>
          <li className="p-4 hover:underline hover:text-primary">
            <NavLink to="/contact">Gallery</NavLink>
          </li>
          <li className="p-4 hover:underline">
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
      <PrimaryButton label="Order Online"/>
      <div className=" flex justify-center my-5">
        <div className="flex items-center p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 256 256"
          >
            <path
              fill="#d73800"
              d="M144.27 45.93a8 8 0 0 1 9.8-5.66a86.22 86.22 0 0 1 61.66 61.66a8 8 0 0 1-5.66 9.8a8.2 8.2 0 0 1-2.07.27a8 8 0 0 1-7.73-5.93a70.35 70.35 0 0 0-50.33-50.34a8 8 0 0 1-5.67-9.8m-2.33 41.8c13.79 3.68 22.65 12.55 26.33 26.34A8 8 0 0 0 176 120a8.2 8.2 0 0 0 2.07-.27a8 8 0 0 0 5.66-9.8c-5.12-19.16-18.5-32.54-37.66-37.66a8 8 0 1 0-4.13 15.46m72.43 78.73l-47.11-21.11l-.13-.06a16 16 0 0 0-15.17 1.4a8 8 0 0 0-.75.56L126.87 168c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16 16 0 0 0 1.32-15.06v-.12L89.54 41.64a16 16 0 0 0-16.62-9.52A56.26 56.26 0 0 0 24 88c0 79.4 64.6 144 144 144a56.26 56.26 0 0 0 55.88-48.92a16 16 0 0 0-9.51-16.62"
            />
          </svg>
          +1233445678
        </div>
        <div className="flex items-center p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 20 20"
          >
            <g fill="#d73800">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0 0 16 4H4a2 2 0 0 0-1.997 1.884" />
              <path d="m18 8.118l-8 4l-8-4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2z" />
            </g>
          </svg>
          tistasushi@gmail.com
        </div>
      </div>
      <p className="my-5">&copy; 2024 Tista Sushi. All rights reserved.</p>
    </footer>
  );
}
