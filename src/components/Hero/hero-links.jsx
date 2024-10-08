import React from "react";
import { Catalog } from "../../data/Catalog";
import { Banner } from "../Banner";
export const HeroLinks = () => {
  return (
    <>
      <div>
        <div className="container">
          <div className="flex gap-5 items-center mb-20">
            <div className="w-[307px] bg-[#edf2f6] flex flex-col py-[8px] rounded-b-[8px] rounded-bl-[8px]">
              {Catalog.map((item) => (
                <div
                  className="flex py-[8px] items-center gap-[10px] pl-[18px]"
                  key={item.id}
                >
                  <img src={item.img} alt="#" />
                  <a
                    className="text-[#070c11] font-[500] leading-[130%] text-[16px]"
                    href="#"
                  >
                    {item.title}
                  </a>
                </div>
              ))}
            </div>
            <div>
              <Banner />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
