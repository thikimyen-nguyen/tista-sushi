import { Outlet } from "react-router-dom";
import { Footer } from "../Footer";
import { Header } from "../Header";
import style from "./index.module.css";

export function Layout() {
  return (
    <div className="mx-auto">
      <div className={style.pageWrapper}>
        <Header />
        <div className={style.pageBody}>
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}
