import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useLocation,useNavigate } from "react-router-dom";

function Header() {
  console.log("in the Header");

  const [pageState, setPageState] = useState("Sign in");
  const location = useLocation();
  const navigate=useNavigate();
  console.log(location.pathname);


  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("in the Header-useEffect");
      if (user) {
        setPageState("Profile");
      } else {
        setPageState("Sign in");
      }
    });
  }, [auth]);




  function pathMatchRoute(route) {
    return route === location.pathname;
  }

  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div>
          <img
            src="images/logos/rdc-logo-default.svg"
            alt="logo"
            className="h-5 cursor-pointer"
            onClick={()=>navigate("/")}
          />
        </div>

        <div>
          <ul className="flex space-x-10">
            <li
              className={
                `cursor-pointer py-3 text-sm font-semibold 
                ${pathMatchRoute("/") ? "text-black border-b-red-500 border-b-[3px]":"text-gray-400"}
                `}
              onClick={()=>navigate("/")}
            >
              Home
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold 
              ${pathMatchRoute("/offers")?"text-black border-b-red-500 border-b-[3px]":"text-gray-400"}
              `}
              onClick={()=>navigate("/offers")}
            >
              Offers
            </li>
            { /* THIS ROUTE WILL GO TO EITHER profile or log-in */ }
            <li
              className={`cursor-pointer py-3 text-sm font-semibold 
              ${(pathMatchRoute("/sign-in") || pathMatchRoute("/profile")) ? "text-black border-b-red-500 border-b-[3px]":"text-gray-400"}
              `}
              onClick={()=>navigate("/profile")} 
            >
              {pageState}
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default Header;
