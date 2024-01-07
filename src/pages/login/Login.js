import React from "react";
import * as loginAnimation from "./../../assets/animations/login_animate.json";
import Lottie from "react-lottie";
import { useFormik } from "formik";
import * as Yup from "yup";
import { listAPI } from "../../services/API";
import { message } from "antd";
import { setLocal } from "../../utils/Local";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../redux/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const {
    handleSubmit,
    handleBlur,
    handleChange,
    // setValues,
    errors,
    touched,
    values,
    // resetForm,
  } = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    onSubmit: (values) => {
      // console.log(values);
      listAPI
        .login(values)
        .then((res) => {
          // console.log(res);
          messageApi.open({
            type: "success",
            content: res.data.message,
          });
          setLocal(res.data.content);
          // localStorage.setItem(
          //   "user_token",
          //   JSON.stringify()
          // );
          //
          // navigate("/");

          setTimeout(() => {
            navigate("/");
          }, 1500);
          dispacth(setUser(res.data.content));
        })
        .catch((err) =>
          messageApi.open({
            type: "error",
            content: err.response.data.content,
          })
        );
    },
    validationSchema: Yup.object({
      taiKhoan: Yup.string().required("Vui lòng không bỏ trống"),
      matKhau: Yup.string().required("Vui lòng không bỏ trống"),
    }),
  });
  // thông báo
  const [messageApi, contextHolder] = message.useMessage();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loginAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      {contextHolder}
      <div className="h-screen flex justify-center items-center">
        <div className="container">
          <div className="grid grid-cols-2">
            <div className="col-left">
              <Lottie options={defaultOptions} height={400} width={400} />
            </div>
            <div className="col-right space-y-10">
              <h2 className="font-bold text-3xl text-center uppercase">
                Đăng nhập movie
              </h2>
              <form
                action="submit"
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <div className="space-y-5 ">
                  <div>
                    <label
                      htmlFor="taiKhoan"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Tài khoản
                    </label>
                    <input
                      type="text"
                      id="taiKhoan"
                      name="taiKhoan"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="Vui lòng nhập tài khoản"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.taiKhoan}
                    />
                    {errors.taiKhoan && touched.taiKhoan ? (
                      <p className="text-xs text-red-600 py-1">
                        {errors.taiKhoan}
                      </p>
                    ) : null}
                  </div>
                  <div>
                    <label
                      htmlFor="matKhau"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Mật khẩu
                    </label>
                    <input
                      type="password"
                      id="matKhau"
                      name="matKhau"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="Vui lòng nhập mật khẩu"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.matKhau}
                    />
                    {errors.matKhau && touched.matKhau ? (
                      <p className="text-xs text-red-600 py-1">
                        {errors.matKhau}
                      </p>
                    ) : null}
                  </div>
                </div>
                <button
                  type="submit"
                  className="py-2 px-5 text-white bg-black rounded-lg hover:bg-slate-500 duration-500 "
                >
                  Đăng nhập
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
