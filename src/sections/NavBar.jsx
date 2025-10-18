import { asset } from "../utils/asset"; 
const NavBar = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-2">
      <img src={asset("/images/nav-logo.svg")} className="scale-90" alt="Logo" />
      <img src={asset("/images/menu.svg")} className="w-10" alt="Menu" />
    </nav>
  );
};

export default NavBar;
