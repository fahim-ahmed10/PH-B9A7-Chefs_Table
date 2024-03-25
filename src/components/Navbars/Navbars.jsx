import search from "../../assets/icons8-search.svg";
import profile from "../../assets/icons8-male-user-24.png";
const Navbars = () => {
  return (
    <div className="container mx-auto px-0">
      <div className="navbar bg-base-100 px-2">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden pl-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-[#655f74]"
            >
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Recipe</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Search</a>
              </li>
              <button className="relative top-[22px] left-[67px] pointer">
                <img
                  className="h-4 w-full block md:hidden"
                  src={search}
                  alt=""
                />
              </button>
              <input
                className="bg-[#f3f3f4] px-3 py-1 rounded-2xl mr-3 text-[#585167] font-normal block md:hidden"
                type="text"
                placeholder="Search"
              />
            </ul>
          </div>
          <a className="text-lg md:text-2xl font-bold">Recipe Calories</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-[#655f74] text-lg font-normal">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Recipe</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Search</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="relative left-7">
            <img className="h-4 w-full hidden md:block" src={search} alt="" />
          </div>
          <div>
            <input
              className="bg-[#f3f3f4] pl-8 pr-2 py-1 rounded-2xl mr-3 text-[#585167] font-normal hidden md:block"
              type="text"
              placeholder="Search"
            />
          </div>
          <div>
            <img
              className="h-7.5 w-full bg-[#0be58a] p-1 rounded-full"
              src={profile}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbars;
