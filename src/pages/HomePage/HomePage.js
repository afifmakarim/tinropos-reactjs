import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import Navbar from "../../components/Navbar/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Layout>
        <Sidebar />
        <Outlet />
      </Layout>
    </>
  );
}
