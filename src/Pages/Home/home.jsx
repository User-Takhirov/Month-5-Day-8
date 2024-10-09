import React from "react";
import { HeroLinks } from "../../components/Hero";
import { Cards } from "../../data/Cards";
import { CardsDef } from "../../components/Cards";
import { Link } from "react-router-dom";
import samakat from "../../assets/img/samakat.svg";
import watch from "../../assets/img/watch.svg";
import gidro from "../../assets/img/gidro.svg";
import foiz from "../../assets/img/foiz.png";

export const Home = () => {
  return (
    <>
      <HeroLinks />
      <div className="container">
        <div className="flex mb-[40px] items-center gap-[30px]">
          <h2 className="font-[700] text-[36px] leading-[130%] cursor-pointer text-[#070c11] ">
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
        <div className="flex mb-[40px] items-center gap-[30px]">
          <h2 className="font-[700] text-[36px] leading-[130%] cursor-pointer text-[#070c11] ">
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
        <div className="flex justify-between mb-[80px]">
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
        <div className="flex mb-[40px] items-center gap-[30px]">
          <h2 className="font-[700] text-[36px] leading-[130%] cursor-pointer text-[#070c11] ">
            Сигвеи
          </h2>
          <p className="font-[500] mt-auto text-[16px] leading-[120%] text-[#2a5275] cursor-pointer">
            Все товары
          </p>
        </div>
        <div className="grid grid-cols-4 mb-[80px]">
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
        <div className="flex mb-[40px] items-center gap-[30px]">
          <h2 className="font-[700] text-[36px] leading-[130%] cursor-pointer text-[#070c11] ">
            Моноколеса
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
        <div className="flex gap-5 mb-[80px]">
          <div className="flex justify-between w-[640px] py-[28px] px-[50px] bg-[#edf2f6] rounded-[8px] items-center">
            <h2 className="font-[700] text-[32px] leading-[120%] text-[#070c11] w-[275px]">
              Распродажа до — 50%
            </h2>
            <img src={foiz} alt="#" />
          </div>
          <div className="flex justify-between w-[640px] py-[28px] px-[50px] bg-[#edf2f6] rounded-[8px] items-center">
            <h2 className="font-[700] text-[24px] leading-[120%] text-[#070c11] w-[275px]">
              Smart Balance Premium по специальной цене
            </h2>
            <img src={gidro} alt="#" />
          </div>
        </div>

        <div className="flex mb-[40px] items-center gap-[30px]">
          <h2 className="font-[700] text-[36px] leading-[130%] cursor-pointer text-[#070c11] ">
            Электровелосипеды
          </h2>
          <p className="font-[500] mt-auto text-[16px] leading-[120%] text-[#2a5275] cursor-pointer">
            Все товары
          </p>
        </div>
        <div className="grid grid-cols-4 mb-[80px]">
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

        <div className="flex mb-[40px] items-center gap-[30px]">
          <h2 className="font-[700] cursor-pointer text-[36px] leading-[130%] text-[#070c11] ">
            Новости
          </h2>
          <p className="font-[500] mt-auto text-[16px] leading-[120%] text-[#2a5275] cursor-pointer">
            Все товары
          </p>
        </div>
        <div className="flex gap-[20px] mb-[80px]">
          <div className="w-[640px] rounded-[8px] bg-[#edf2f6] py-[30px] px-[50px]">
            <h2 className="font-[700] text-[28px] leading-[120%] text-[#070c11] mb-[20px] hover:text-[#2a5275]">
              Открытие нового магазина
            </h2>
            <p className="font-[500] text-[16px] leading-[120%] text-[#070c11] mb-[20px] ">
              Разнообразный и богатый опыт говорит нам, что консультация
              с широким активом требует от нас анализа анализа существующих
              паттернов поведения
            </p>
            <div className="flex justify-between items-center">
              <p className="font-[500] leading-[120%] text-[16px] text-[#838688] cursor-pointer">
                Подробнее
              </p>
              <p className="font-[500] leading-[120%] text-[16px] text-[#838688]">
                05 июня 2021
              </p>
            </div>
          </div>
          <div className="w-[640px] rounded-[8px] bg-[#edf2f6] py-[30px] px-[50px]">
            <h2 className="font-[700] text-[28px] leading-[120%] text-[#070c11] mb-[20px] hover:text-[#2a5275]">
              Открытие нового магазина
            </h2>
            <p className="font-[500] text-[16px] leading-[120%] text-[#070c11] mb-[20px] ">
              Разнообразный и богатый опыт говорит нам, что консультация
              с широким активом требует от нас анализа анализа существующих
              паттернов поведения
            </p>
            <div className="flex justify-between items-center">
              <p className="font-[500] leading-[120%] text-[16px] text-[#838688] cursor-pointer">
                Подробнее
              </p>
              <p className="font-[500] leading-[120%] text-[16px] text-[#838688]">
                05 июня 2021
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
