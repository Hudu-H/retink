import { Divide } from "hamburger-react";
import Sidebar from "./Sidebar";
import { useState, useEffect } from "react";

const SidebarMobile = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.classList.add("blur");
    } else {
      document.body.classList.remove("blur");
    }
  }, [open]);

  return (
    <div className="hamburger-menu">
      <Divide toggle={setOpen} toggled={open} />
      {open && (
        <div className="sidebar.mobile-nav">
          <Sidebar toggle={() => setOpen(false)} />
        </div>
      )}
    </div>
  );
};

export default SidebarMobile;
