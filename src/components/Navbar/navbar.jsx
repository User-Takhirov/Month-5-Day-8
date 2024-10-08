import React from "react";
import { Link } from "react-router-dom";
import { Bar } from "../../assets/icon/bar";
export const Navbar = () => {
  return (
    <>
      <div className=" bg-[#0e1821]">
        <div className="container">
          <div className="flex gap-[24px]">
            <div>
              <div className="flex items-center gap-[10px]  py-[14px] bg-[#243c53] pr-[121px] pl-[20px]">
                <a href="#">
                  <Bar />
                </a>
                <Link className="font-[500] text-[16px]  text-white" to={"/"}>
                  Каталог товаров
                </Link>
              </div>
            </div>
            <div className="flex gap-[40px] py-[22px]">
              <Link
                className="font-[500] text-[16px] text-white leading-[100%] "
                to={"about"}
              >
                О компании
              </Link>
              <Link
                className="font-[500] text-[16px] text-white leading-[100%] "
                to={"/sale"}
              >
                Акции
              </Link>
              <Link
                className="font-[500] text-[16px] text-white leading-[100%] "
                to={"/credit"}
              >
                Рассрочка 0|0|18
              </Link>
              <Link
                className="font-[500] text-[16px] text-white leading-[100%] "
                to={"/service"}
              >
                Сервис и гарантия
              </Link>
              <Link
                className="font-[500] text-[16px] text-white leading-[100%] "
                to={"/dropshipping"}
              >
                Опт/дропшиппинг
              </Link>
              <Link
                className="font-[500] text-[16px] text-white leading-[100%] "
                to={"/contact"}
              >
                Контакты
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
