import SiteHeader from "@/components/shared/site-header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="border-grid flex flex-1 flex-col min-h-screen">
      <div className="flex flex-1 flex-col">
        <Outlet />
      </div>
      <div className="flex justify-center">Footer</div>
    </div>
  );
};

export default AppLayout;
