import { Route, Routes } from "react-router-dom";
import UserTemplate from "./templates/userTemplate/UserTemplate";
import HomePage from "./pages/HomePage/HomePage";
import Login from "./pages/login/Login";
import AdminTemplate from "./templates/adminTemplate/AdminTemplate";
import MovieManage from "./pages/MovieManage/MovieManage";
import Page404 from "./pages/Page404";
import UserManage from "./pages/UserManage/UserManage";
import OrderManage from "./pages/OrderMange/OrderManage";
import AddMovie from "./pages/MovieManage/AddMovie";
import MovieDetails from "./pages/MovieDetails/MovieDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<UserTemplate />}>
          {/* index giúp hiển thị vị trí ngang cấp cha */}
          <Route index element={<HomePage />} />
          <Route element={<MovieDetails />} path="/movie-details/:maPhim" />
        </Route>
        <Route element={<Login />} path="/login" />
        <Route element={<AdminTemplate />} path="/admin">
          <Route index element={<MovieManage />} />
          <Route element={<UserManage />} path="user_manage" />
          <Route element={<AddMovie />} path="create_movie" />
          <Route element={<OrderManage />} path="order_manage" />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;

// trang admin quản lý người dùng
//
// chi tiết phim
// đặt vé
