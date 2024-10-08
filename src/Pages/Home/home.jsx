import React from "react";
import { HeroLinks } from "../../components/Hero";
import { Cards } from "../../data/Cards";
import { CardsDef } from "../../components/Cards";
import { Link } from "react-router-dom";
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
        <div className="grid grid-cols-4 ">
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
    </>
  );
};
