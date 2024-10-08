import React from "react";
import heart from "../../assets/img/heart.svg";
import line from "../../assets/img/line.svg";
import cart from "../../assets/img/cart.svg";
export const CardsDef = ({
  title,
  text,
  Cprice,
  Pprice,
  discount,
  img,
  star,
}) => {
  return (
    <>
      <div className="w-[326px] border border-[#eaeaf0] rounded-b-[8px] roundedbl-[8px] hover:translate-y-[10px] hover:shadow-2xl">
        <div className="mb-[10px]">
          <img src={img} alt="#" />
        </div>
        <div className="px-[20px] pb-[20px]">
          <div>
            <p className="mb-[10px] font-[500] text-[16px] leading-[130%] text-[#838688]">
              {text}
            </p>
            <h1 className="mb-[20px] font-[500] text-[20px] leading-[130%] text-[#070c11]">
              {title}
            </h1>
          </div>
          <img className="mb-[20px]" src={star} alt="#" />
          <div className="flex justify-between mb-[20px]">
            <div>
              <p className="line-through font-[700] text-[16px] leading-[130%] text-[#838688]">
                {Pprice} ₽
              </p>
              <p className="text-[24px] leading-[130%] font-[700] text-[#070c11] mb-[5px]">
                {Cprice} ₽
              </p>
              <img src={discount} alt="#" />
            </div>
            <div className="flex gap-[10px]">
              <img
                className="w-[48px] h-[48px] mt-auto cursor-pointer"
                src={heart}
                alt="#"
              />
              <img
                className="w-[48px] h-[48px] mt-auto cursor-pointer"
                src={line}
                alt="#"
              />
            </div>
          </div>

          <div className="flex items-center gap-[10px]">
            <button className="font-[700] text-[16px] leading-[130%] text-[#4878a6] py-[14px] px-[54px] border border-[#4878a6] roundede-[4px] text-nowrap ">
              Купить в 1 клик
            </button>
            <div>
              <img src={cart} alt="#" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
