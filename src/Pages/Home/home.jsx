import React from "react";
import { HeroLinks } from "../../components/Hero";
import { Cards } from "../../data/Cards";
import { CardsDef } from "../../components/Cards";
import { Link } from "react-router-dom";
import samakat from "../../assets/img/samakat.svg";
import watch from "../../assets/img/watch.svg";

export const Home = () => {
  return (
    <>
      <HeroLinks />
      <div className="container">
        <div className="flex mb-[40px] items-center gap-[30px]">
          <h2 className="font-[700] text-[36px] leading-[130%] text-[#070c11] ">
            Хиты продаж
          </h2>
          <p className="font-[500] mt-auto text-[16px] leading-[120%] text-[#2a5275] cursor-pointer">
            Все товары
          </p>
        </div>
        <div className="grid grid-cols-4  mb-[80px]">
          {Cards.slice(0, 4).map((item) => (
            <Link key={item.id} to={`home/detail/${item.id}`}>
              <CardsDef
                title={item.title}
                text={item.text}
                Cprice={item.Cprice}
                Pprice={item.Pprice}
                discount={item.discount}
                img={item.img}
                star={item.star}
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="container">
        <div className="flex mb-[40px] items-center gap-[30px]">
          <h2 className="font-[700] text-[36px] leading-[130%] text-[#070c11] ">
            Новинки
          </h2>
          <p className="font-[500] mt-auto text-[16px] leading-[120%] text-[#2a5275] cursor-pointer">
            Все товары
          </p>
        </div>
        <div className="grid grid-cols-4 mb-[40px]">
          {Cards.slice(4, 8).map((item) => (
            <Link key={item.id} to={`home/detail/${item.id}`}>
              <CardsDef
                title={item.title}
                text={item.text}
                Cprice={item.Cprice}
                Pprice={item.Pprice}
                discount={item.discount}
                img={item.img}
                star={item.star}
              />
            </Link>
          ))}
        </div>
        <div className="flex justify-between">
          <div className="bg-[#edf2f6] py-[4px] pl-[50px] pr-[30px] w-[640px] flex justify-between items-center rounded-[8px]">
            <h3 className="font-[700] text-[28px] leading-[120%] text-[#070c11] w-[234px]">
              Скидки до 30% на сигвеи
            </h3>
            <div>
              <img src={samakat} alt="#" />
            </div>
          </div>
          <div className="bg-[#edf2f6] py-[4px] pl-[50px] pr-[30px] w-[640px] flex justify-between items-center rounded-[8px]">
            <h3 className="font-[700] text-[28px] leading-[120%] text-[#070c11] w-[188px]">
              Неделя смарт часов
            </h3>
            <div>
              <img src={watch} alt="#" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
