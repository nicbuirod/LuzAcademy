import React from "react";
import MenuAdmin from "../components/menu-admin/MenuAdmin";
import { Footer } from "../components/footer";
const Menu = () => {
  const admin = localStorage.getItem("admin") === "true";
  return (
    <div>
      {admin && <MenuAdmin />}
      <Footer />
    </div>
  );
};

export default Menu;
