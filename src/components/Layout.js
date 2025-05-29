// src/components/Layout.js
import React from "react";
import Navbar from "./Navbar";
import Header from "./PageHeader"; // 이미지 포함된 헤더
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Header />
      <Outlet />
    </>
  );
}
