import React from "react";

const Footer = () => {
  const dataPartner = [
    {
      link: "https://www.cgv.vn/",
      img: "../img/partner/1.png",
    },
    {
      link: "https://www.bhdstar.vn/",
      img: "../img/partner/2.png",
    },
    {
      link: "https://www.galaxycine.vn/",
      img: "../img/partner/4.png",
    },
    {
      link: "http://cinestar.com.vn/",
      img: "../img/partner/5.png",
    },
    {
      link: "https://lottecinemavn.com/LCHS/index.aspx",
      img: "../img/partner/6.png",
    },
    {
      link: "https://www.megagscinemas.vn/",
      img: "../img/partner/7.png",
    },
    {
      link: "http://ddcinema.vn/",
      img: "../img/partner/8.png",
    },
    {
      link: "https://www.betacinemas.vn/home.htm",
      img: "../img/partner/9.png",
    },
    {
      link: "https://touchcinema.com/",
      img: "../img/partner/10.png",
    },
    {
      link: "https://cinemaxvn.com/",
      img: "../img/partner/11.png",
    },
    {
      link: "hhttps://starlight.vn/",
      img: "../img/partner/12.png",
    },
    {
      link: "https://www.dcine.vn/",
      img: "../img/partner/13.png",
    },
    {
      link: "https://zalopay.vn/",
      img: "../img/partner/14.png",
    },
    {
      link: "https://www.payoo.vn/",
      img: "../img/partner/15.png",
    },
    {
      link: "https://portal.vietcombank.com.vn/Pages/Home.aspx?devicechannel=default",
      img: "../img/partner/16.png",
    },
    {
      link: "https://www.agribank.com.vn/",
      img: "../img/partner/17.png",
    },
    {
      link: "https://www.vietinbank.vn/web/home/vn/index.html",
      img: "../img/partner/18.png",
    },
    {
      link: "https://www.indovinabank.com.vn/",
      img: "../img/partner/19.png",
    },
    {
      link: "https://webv3.123go.vn/",
      img: "../img/partner/20.png",
    },
    {
      link: "https://laban.vn/",
      img: "../img/partner/21.png",
    },
  ];
  const renderPartner = () => {
    return dataPartner.map((item) => {
      return (
        <div key={item.link} className="col-3 p-1">
          <a href={item.link}>
            <img
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
              }}
              src={item.img}
            />
          </a>
        </div>
      );
    });
  };
  return (
    <div style={{ background: "#212121" }}>
      <footer className="text-center text-lg-start text-light container">
        {/* Section: Social media */}
        <section className="row p-4 ">
          <div className="col-6 col-sm d-flex justify-content-center justify-content-lg-center">
            <div className="me-5 d-none d-lg-block"></div>
          </div>

          {/* Right */}
        </section>

        {/* Section: Social media */}
        {/* Section: Links  */}
        <section className=" border-bottom">
          <div className="container text-center text-md-start my-2">
            <div className="mx-auto my-1 text-center"></div>
            {/* Grid row */}
            <div className="row mt-3">
              {/* Grid column */}

              {/* Grid column */}
              <div className="col-md-12 col-lg-3 mx-auto text-center">
                <h6
                  className="text-uppercase fw-bold"
                  style={{
                    transform: "translateX(-118px)",
                  }}>
                  TIX
                </h6>
                <div className="flex text-gray-500">
                  <div className="me-10">
                    <a href="" className="hover:text-white duration-500">
                      FAQ
                    </a>
                    <br />
                    <a href="" className="hover:text-white duration-500">
                      Brand GuideLines
                    </a>
                    <br />
                  </div>
                  <div>
                    <a href="" className="hover:text-white duration-500">
                      Thỏa thuận sử dụng
                    </a>
                    <br />
                    <a href="" className="hover:text-white duration-500">
                      Chính sách bảo mật
                    </a>
                  </div>
                </div>
              </div>
              {/* Grid column */}
              <div className="col-sm-6 col-md-4 col-lg-3 mx-auto text-center">
                {/* Links */}
                <h6 className="text-uppercase fw-bold">Đối tác</h6>
                <div className="row mt-5">{renderPartner()}</div>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-sm-6 col-md-4 col-lg-3 mx-auto text-center">
                {/* Links */}
                <h6 className="text-uppercase fw-bold">mobile app</h6>
                <i class="fa-brands fa-apple text-gray-500 text-3xl mr-3 mt-3"></i>
                <i class="fa-brands fa-android text-gray-500 text-3xl"></i>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-sm-12 col-md-4 col-lg-3 mx-auto text-center">
                {/* Links */}
                <h6 className="text-uppercase fw-bold">social</h6>
                <i
                  class="fa-brands fa-facebook text-primary text-3xl mt-3"
                  style={{
                    transform: "translateX(-20px)",
                  }}></i>
                <img
                  width="30"
                  height="30"
                  src="../img/imgzalo.png"
                  alt="zalo"
                  style={{
                    transform: "translateX(185px)translateY(-32px)",
                  }}
                />
              </div>
            </div>
          </div>
        </section>
        <div className="p-4 flex">
          <div>
            <img src="../img/footer_copy_left.jpg" alt="" />
          </div>
          <div className="ms-60">
            <p
              className="text-left mb-4"
              // style={{
              //   transform: "translateY(-70px)translateX(-390px)",
              // }}
            >
              TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION
            </p>
            <p
              className="text-left"
              // style={{
              //   transform: "translateY(-60px)translateX(180px)",
              // }}
            >
              Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ
              Chí Minh, Việt Nam. <br /> Giấy chứng nhận đăng ký kinh doanh số:
              0101659783, <br /> đăng ký thay đổi lần thứ 30, ngày 22 tháng 01
              năm 2020 do Sở kế hoạch và đầu tư Thành phố Hồ Chí Minh cấp.{" "}
              <br /> Số Điện Thoại (Hotline): 1900 545 436
            </p>
          </div>
          <div>
            <img
              className="ms-52 me-5"
              alt=""
              src="http://demo1.cybersoft.edu.vn/static/media/daThongBao-logo.cb85045e.png"
              width="150"
              height="150"
              style={{}}></img>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
