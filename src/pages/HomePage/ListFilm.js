import { Button, Card, Carousel, Image } from "antd";
import React, { useEffect, useState } from "react";
import { listAPI } from "../../services/API";
// import YouTube from "react-youtube";
import { useDispatch } from "react-redux";
import { disableLoading, enableLoading } from "../../redux/LoadingSlice";
import MovieItem from "./MovieItem";
import { NavLink } from "react-router-dom";

const ListFilm = () => {
  const [listFilm, setListFilm] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(enableLoading());
    listAPI
      .get_list_film()
      .then((res) => {
        setListFilm(res.data.content);
        // dispatch(disableLoading());
      })
      .catch((err) => {
        console.log(err);
        // dispatch(disableLoading());
      });
  }, []);
  const contentStyle = {
    margin: 0,
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  console.log(listFilm);
  const setting = {
    autoplay: true,
  };
  return (
    <div
      style={{
        transform: "translateY(-50px)",
      }}>
      {/* <div className="findMovie text-black text-xl  bg-white py-3 text-center rounded-lg w-50 block m-auto">
        <select>
          <option value="">Chọn phim</option>
          <option value="">Oppenheimer</option>
          <option value="">The Marvels</option>
          <option value="">Fast Charlie</option>
          <option value="">The Family Plan</option>
          <option value="">Chicken Run</option>
          <option value="">Leo</option>
          <option value="">Elemental</option>
          <option value="">Peter Pan & Wendy</option>
          <option value="">Expend4bles</option>
          <option value="">Loki</option>
        </select>
        <select>
          <option value="">Chọn rạp</option>
          <option value="">BHD Star Cineflex</option>
          <option value="">CGV</option>
          <option value="">CNS</option>
          <option value="">Galaxy</option>
          <option value="">Lotte</option>
          <option value="">MEGAGS</option>
        </select>
        <select name="" id="">
          <option value="">Ngày giờ chiếu</option>
        </select>
        <NavLink to={"/order-manage"}>
          <button className="rounded text-white text-lg duration-500 cursor-pointer hover:bg-orange-800 py-3 ms-3">
            Mua vé ngay
          </button>
        </NavLink>
      </div> */}
      <div className="max-w-screen-xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold mb-6">Danh sách phim</h2>
        <div className="grid grid-cols-4 gap-5">
          {listFilm.map((movie, index) => (
            <MovieItem
              key={movie.maPhim}
              movieId={movie.maPhim}
              image={movie.hinhAnh}
              movieName={movie.tenPhim}
              description={movie.moTa}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListFilm;


