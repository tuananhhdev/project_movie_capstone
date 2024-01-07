// import React, { useEffect, useState } from "react";
import { Rate, Tabs } from "antd";
import nhabanu from "./../../assets/nha-ba-nu.jpg";
import "./MovieDetails.css";
import { useEffect, useState } from "react";
import { listAPI } from "../../services/API";
import { Link, useLocation, useParams } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import moment from "moment";
const MovieDetails = () => {
  const [movieId, setMovied] = useState([]);
  const { maPhim } = useParams();
  useEffect(() => {
    listAPI
      .detail_film(maPhim)
      .then((res) => setMovied(res.data.content))
      .catch((err) => console.log(err));
  }, [maPhim]);
  console.log(movieId);
  const {
    hinhAnh,
    tenPhim,
    moTa,
    danhGia,
    ngayKhoiChieu,
    trailer,
    heThongRapChieu,
  } = movieId;
  const handleRatingChange = (value) => {
    // Handle the rating change if needed
    console.log("Rating:", value);
  };
  return (
    <div className="bg-gray-600 dark:bg-gray-700 ">
      <div className=" container my-5">
        {movieId && (
          <div className="grid lg:grid-cols-12 sm:grid-cols-1 space-y-4 text-white">
            <div className=" lg:col-span-4 sm:col-span-full ">
              <img
                src={hinhAnh}
                alt=""
                className="block w-full  rounded-lg my-5"
              />
            </div>
            <div className="md:col-span-8 sm:col-span-full  mx-5 flex flex-col justify-center items-baseline space-y-5">
              <h2 className="font-bold text-2xl mb-2 animate-pulse">
                {tenPhim}
              </h2>
              <p className="text-white leading-7 text-justify md:w-2/3 sm:w-full">
                {moTa}
              </p>
              <div className=" flex text-white text-base font-medium">
                <p>Ngày khởi chiếu: </p>
                <span className="ml-10">
                  {moment(ngayKhoiChieu).format("DD-MM-YYYY")}
                </span>
              </div>
              <div className=" flex flex-row text-white text-base font-medium">
                <p className="mt-10">Đánh giá: </p>
                <div className="w-28 h-28 ml-12">
                  <CircularProgressbar
                    value={danhGia * 10}
                    text={`${danhGia}/10`}
                    strokeWidth={10}
                    styles={buildStyles({
                      textSize: "12px",
                      pathTransitionDuration: 2,
                      pathColor: `#ff8, ${danhGia / 10})`,
                      textColor: "#ff8", // Text color
                      trailColor: "#d6d6d6",
                      backgroundColor: "#3e98c7",
                    })}
                  />
                </div>
              </div>

              <div className="sub-btn my-4">
                <a
                  href={trailer}
                  className="btn font-medium text-white text-base bg-green-500 px-3 py-2 rounded uppercase mr-4">
                  Xem trailer
                </a>
                <Link
                  to={`/ticket/${tenPhim}/12h`}
                  className="btn font-medium text-white text-base bg-green-500 px-3 py-2 rounded uppercase mr-4">
                  Đặt vé ngay
                </Link>
              </div>
            </div>
          </div>
        )}

        <div className="bg-white mt-5 w-full">
          <Tabs
            defaultActiveKey="1"
            tabPosition="left"
            style={{
              border: "1px solid #8080806e",
            }}>
            {(heThongRapChieu || []).map((item, index) => (
              <Tabs.TabPane
                tab={
                  <img
                    src={item.logo}
                    className="w-10"
                    alt={`Logo ${index + 1}`}
                  />
                }
                key={index + 1}></Tabs.TabPane>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
