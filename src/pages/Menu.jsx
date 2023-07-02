import React from "react";
import MenuAdmin from "../components/menu-admin/MenuAdmin";

const Menu = () => {
  const admin = localStorage.getItem("admin") === "true";
  return <div>{admin && <MenuAdmin />}</div>;
};

export default Menu;
