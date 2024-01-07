import { Carousel } from "antd";
import React, { useEffect, useState } from "react";
import { listAPI } from "../../services/API";
import { useDispatch } from "react-redux";
import { disableLoading, enableLoading } from "../../redux/LoadingSlice";
// import ModalVideo from "react-modal-video";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} before:content-[""]`}
      style={{
        ...style,
        display: "block",
        insetInlineEnd: "30px",
        color: "white",
        fontSize: "40px",
      }}
      onClick={onClick}
    >
      <i className="fa-solid fa-angle-right" />
    </div>
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} before:content-[""]`}
      style={{
        ...style,
        display: "block",
        zIndex: 1,
        insetInlineStart: "20px",
        fontSize: "40px",
        color: "white",
      }}
      onClick={onClick}
    >
      <i className="fa-solid fa-angle-left" />
    </div>
  );
}
const Banner = () => {
  // set trang thai loading ban daau

  const dispatch = useDispatch();
  const [banner, setBanner] = useState([]);
  const [isOpenModal, setOpenModal] = useState(false);

  useEffect(() => {
    dispatch(enableLoading());
    listAPI
      .get_banner()
      .then((res) => {
        setBanner(res.data.content);
        dispatch(disableLoading());
      })
      .catch((err) => {
        console.log(err);
        dispatch(disableLoading());
      });
    // .finally(() => {
    //   dispatch(disableLoading);
    // });
  }, []);
  console.log(banner);

  const setting = {
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <Carousel {...setting} arrows={true}>
        {banner.map((item, index) => (
          <div key={index} className="h-[500px]">
            <img src={item.hinhAnh} alt="" className="w-full bg-center" />
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default Banner;
