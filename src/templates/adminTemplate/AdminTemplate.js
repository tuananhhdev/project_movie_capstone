import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Header } from "antd/es/layout/layout";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

const AdminTemplate = () => {
  const [collapsed, setCollapsed] = useState(false);
  const nav = useNavigate();

  const location = useLocation();
  
  console.log(location);
  const { user } = useSelector((state) => state.userSlice);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  // kieerm tra quyen nguoi dung
  useEffect(() => {
    if (user) {
      if (user.maLoaiNguoiDung != "QuanTri") {
        window.location.href = "https://www.google.com/";
      }
    } else {
      // chưa đăng nhập nên không có dữ liệu trên redux
      nav("/login");
    }
  }, [location.pathname]);
  return (
    <Layout className="min-h-screen">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[location.pathname]}
          items={[
            {
              key: "/admin/user_manage",
              icon: <UserOutlined />,
              label: <Link to={"/admin/user_manage"}>Quản lý người dùng</Link>,
            },
            {
              key: "/admin",
              icon: <VideoCameraOutlined />,
              label: <Link to={"/admin"}>Quản lý phim</Link>,
            },
            {
              key: "/admin/create_movie",
              icon: <VideoCameraOutlined />,
              label: <Link to={"/admin/create_movie"}>Tạo phim</Link>,
            },
            {
              key: "/admin/order_manage",
              icon: <UploadOutlined />,
              label: <Link to={"/admin/order_manage"}>Quản lý đặt vé</Link>,
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminTemplate;
