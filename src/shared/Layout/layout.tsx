import { Outlet } from "@tanstack/react-router";

const Layout = () => {
  return (
    <div>
      <h1>Layout Component</h1>
      <p>This is the layout component.</p>
      <Outlet />
    </div>
  );
};

export default Layout;
