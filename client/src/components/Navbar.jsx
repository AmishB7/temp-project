import { useState } from "react";
import Image from "./Image";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";


const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-customLightBlue w-full pl-8 pr-8 h-16 md:h-20 flex items-center justify-between">
      {/* LOGO */}
      <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
        <Image src="/logo.png" alt="website Logo" w={32} h={32} />
        <span>Nepali News Portal</span>
      </Link>

      {/* HAMBURGER MENU */}
      <div className="flex items-center gap-4 md:gap-8 xl:gap-12">

        {/* LOGIN BUTTON */}
        <SignedOut>
          <Link to="/login">
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
              Login 
            </button>
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>

      </div>

      
     {/* LINK LIST FOR BOTH VIEWS */}
<div
  className={`w-auto py-3 px-6 flex flex-row items-center justify-center gap-6 font-medium text-base absolute top-16 rounded-md shadow-lg z-50 transition-all ease-in-out ${
    open ? "right-4" : "-right-[100%]"
  }`}
>
  <Link to="/" onClick={() => setOpen(false)} className="hover:text-blue-800">
    Home
  </Link>
  <Link to="/posts?sort=trending" onClick={() => setOpen(false)} className="hover:text-blue-800">
    Trending
  </Link>
  <Link to="/posts?sort=popular" onClick={() => setOpen(false)} className="hover:text-blue-800">
    Most Popular
  </Link>
  <Link to="/" onClick={() => setOpen(false)} className="hover:text-blue-800">
    About
  </Link>
</div>

    </div>
  );
};

export default Navbar;
