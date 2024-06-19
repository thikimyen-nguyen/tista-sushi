import logo from "../../assets/images/logo.webp";
import { PrimaryButton } from "../Buttons";
export function Footer() {
  function handleOrderButton() {
    window.location.href = "https://tista-sushi.orderintelligence.no/";
  }
  return (
    <footer className="text-center bg-gray text-white">
      <a href="/">
        {" "}
        <img src={logo} alt="holidaze logo" className="w-64 m-auto py-10" />
      </a>
      <nav>
        <ul className="flex justify-center">
          <li className="p-4 hover:underline">
            <a href="#about">ABOUT US</a>
          </li>

          <li className="p-4 hover:underline">
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </nav>
      <PrimaryButton label="ORDER NOW" onClick={handleOrderButton} />
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
            viewBox="0 0 512 512"
          >
            <path
              fill="#d73800"
              d="M240.3 396.8c3.3 5.1 9.1 8.5 15.7 8.5s12.4-3.4 15.8-8.5L382 226.6c14.8-22.9 23.4-48.1 23.4-77.3C405.3 64.9 339 0 256 0S106.7 64.9 106.7 149.3c0 29.2 8.6 54.4 23.4 77.3zM256 64c47.1 0 85.3 38.2 85.3 85.3s-38.2 85.3-85.3 85.3s-85.3-38.2-85.3-85.3S208.9 64 256 64m109.4 259.5L256 469.3L146.6 323.5c-37.4 19.6-61.3 48.9-61.3 81.8C85.3 464.2 161.7 512 256 512s170.7-47.8 170.7-106.7c0-32.9-23.9-62.2-61.3-81.8"
            />
          </svg>
          <a
            href="https://www.google.com/maps/place/Tista+Sushi/@59.1210181,11.3793512,16z/data=!3m1!4b1!4m6!3m5!1s0x464412dd19ebdb45:0x9f2c80054580135d!8m2!3d59.1210181!4d11.3793512!16s%2Fg%2F11gbkxj6j9?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 hover:underline"
          >
            Walkers gate 4, 1771 Halden
          </a>{" "}
        </div>
      </div>
      <p className="my-5">
        &copy; 2024 Powered by{" "}
        <a
          class="email"
          href="mailto:contact@orderintelligence.no"
          className="text-primary hover:underline"
        >
          Order Intelligence
        </a>
      </p>
    </footer>
  );
}
