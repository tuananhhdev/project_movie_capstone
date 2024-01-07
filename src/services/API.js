import { API } from "./configServ";
export const listAPI = {
  get_banner: () => API.get("/api/QuanLyPhim/LayDanhSachBanner"),
  // phim
  get_rap: () => API.get("/api/QuanLyRap/LayThongTinHeThongRap"),

  // lay danh sach phim
  get_list_film: () => API.get("/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP09"),

  // phim theo rạp
  get_film_theater: (maHeThongRap) =>
    API.get(
      `/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=GP09`
    ),
  //movie-details
  detail_film: (maPhim) =>
    API.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`),

  // login
  login: (data) => API.post("/api/QuanLyNguoiDung/DangNhap", data),
  // admin
  get_movie: () => API.get("/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01"),

  delete_movie: (maPhim) =>
    API.delete(`/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`),

  addMovie: (data) => {
    return API.post("/api/QuanLyPhim/ThemPhimUploadHinh", data);
  },
};
