import React from "react";
import { Logo } from "../../assets/icon/logo";
import { Search } from "../../assets/icon/search";
import { Eyes } from "../../assets/icon/eyes";
import { Heart } from "../../assets/icon/heart";
import { Laning } from "../../assets/icon/laning";
import { Cart } from "../../assets/icon/cart";
import { Navbar } from "../../components/Navbar";
export const Header = () => {
  return (
    <>
      <div className="MainBlock">
        <div className="container">
          <div className="MainBlock py-[10px] flex items-center justify-between">
            <div>
              <Logo />
            </div>
            <ul className="flex items-center gap-[20px]">
              <li>
                <a
                  className="font-[500] text-[16px] leading-[100%] text-[#070c11]"
                  href="tel:+7 (812) 660-50-54"
                >
                  +7 (812) 660-50-54
                </a>
              </li>
              <li>
                <a
                  className="font-[500] text-[16px] leading-[100%] text-[#070c11]"
                  href="tel:+7 (958) 111-95-03"
                >
                  +7 (958) 111-95-03
                </a>
              </li>
              <li>
                <a
                  className="font-[500] text-[16px] leading-[100%] text-[#838688]"
                  href="#"
                >
                  Пн-вс: с 10:00 до 21:00
                </a>
              </li>
            </ul>
            <div className="flex items-center gap-2 cursor-pointer">
              <div>
                <Search />
              </div>
              <div className="flex gap-5 items-center">
                <div className="flex">
                  <Eyes />
                  <Heart />
                  <Laning />
                  <Cart />
                </div>
                <button className="py-4 px-[26px] rounded-[4px] bg-[#2a5275] font-[500] text-[16px] leading-[100%] text-white">
                  Войти
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <Navbar />
      </div>
    </>
  );
};
