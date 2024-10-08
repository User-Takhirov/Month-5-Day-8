import React from "react";
import { useParams } from "react-router-dom";
import { Cards } from "../../data/Cards";
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
      {/* {data && (
        <div className="container">
          <div className={style.block}>
            <div>
              <img src={data.img} alt="#" />
            </div>
            <div className={style.content}>
              <div className={style.TitleBlock}>
                <div>
                  <h2 className={style.title}>{data.title}</h2>
                  <p className={style.ganre}>{data.text}</p>
                </div>
                <div className={style.imgs}>
                  <img src={data.listening} alt="#" />
                  <img src={star4} alt="#" />
                  <img src={comments} alt="#" />
                </div>
              </div>
              <p className={style.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.{" "}
              </p>
              <div className={style.miniContent}>
                <div>
                  <h3 className={style.miniTitle}>Муаллиф</h3>
                  <p className={style.miniText}>Kevin Smiley</p>
                </div>
                <div>
                  <h3 className={style.miniTitle}>Нашриёт</h3>
                  <p className={style.miniText}>Wepress Inc.</p>
                </div>
                <div>
                  <h3 className={style.miniTitle}>Йил</h3>
                  <p className={style.miniText}>1999</p>
                </div>
              </div>
              <hr className="dottedhr" />
            </div>
          </div>
        </div>
      )} */}
      {data && (
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            distinctio sunt impedit eum perferendis aliquam provident nemo,
            officia ratione illo eius dicta recusandae debitis totam ducimus
            fugit neque mollitia autem?
          </p>
          <h1>{data.title}</h1>
        </div>
      )}
    </>
  );
};
