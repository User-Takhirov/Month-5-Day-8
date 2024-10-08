import React from "react";
import { useParams } from "react-router-dom";
import { Cards } from "../../data/Cards";
import gidro from "../../assets/img/largegid.svg";
import heart from "../../assets/img/heart.svg";
import line from "../../assets/img/line.svg";

export const HomeDetail = () => {
  const [data, setData] = React.useState({});
  const { id } = useParams();

  React.useEffect(() => {
    const itemData = Cards.find((data) => data.id === id);
    if (itemData) {
      setData(itemData);
    }
  }, []);
  return (
    <>
      {data && (
        <div className="container ">
          <div className="mt-[90px] flex gap-5">
            <div className="cursor-pointer">
              <img src={gidro} alt="#" />
            </div>
            <div className="w-[750px]">
              <h1 className="font-[700] text-[36px] leading-[130%] text-[#070c11] mb-[30px]">
                {data.title}
              </h1>
              <div className="border-[2px] border-[#eaeaf0] pt-[30px] pr-[30px] pb-[30px] pl-[30px] rounded-[10px] mb-[30px]">
                <div className="flex justify-between mb-5">
                  <div>
                    <img src={data.star} alt="#" />
                  </div>
                  <div className="flex gap-[10px]">
                    <img src={heart} alt="#" />
                    <img src={line} alt="#" />
                  </div>
                </div>
                <div className="flex justify-between">
                  <div>
                    <div className="flex gap-2 items-center">
                      <p className="font-[700] leading-[130%] text-[16px] line-through text-[#838688]">
                        {data.Pprice} ₽
                      </p>
                      <img src={data.discount} alt="#" />
                    </div>
                    <p className="font-[700] text-[32px] leading-[130%] text-[#070c11]">
                      {data.Cprice} ₽
                    </p>
                  </div>
                  <div className="flex gap-[10px]">
                    <button className="font-[700] text-[16px] leading-[130%] text-[#fff] py-[14px] px-[75px] bg-[#4878a6] border-[2px] cursor-pointer border-[#4878a6]">
                      В корзину
                    </button>
                    <button className="font-[700] cursor-pointer text-[16px] leading-[130%] text-[#4878a6] py-[14px] px-[54px] border-[2px] border-[#4878a6]">
                      Купить в 1 клик
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="w-[365px]">
                  <h3 className="font-[700] text-[16px] leading-[130%] text-[#070c11] mb-[10px]">
                    Доставка
                  </h3>
                  <p className="font-[500] text-[16px] leading-[120%] text-[#070c11]">
                    Доставим по Санкт-Петербургу в течение 2 часов и бесплатно.
                    Стоимость доставки в другие города уточняйте у менеджера.
                  </p>
                </div>
                <div className="w-[365px]">
                  <h3 className="font-[700] text-[16px] leading-[130%] text-[#070c11] mb-[10px]">
                    Оплата
                  </h3>
                  <p className="font-[500] text-[16px] leading-[120%] text-[#070c11]">
                    Принимаем к оплате как наличный, так и безналичный расчёт.
                    Возможна оплата электронными кошельками.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
