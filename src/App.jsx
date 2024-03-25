import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Heading from "./components/Heading/Heading";
import CookingRecipes from "./components/CookingRecipes/CookingRecipes";
import Carts from "./components/Carts/Carts";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleWantToCook = (cook) => {
    if (cartItems.length >= 1) {
      if (cartItems[cartItems.length - 1].recipe_id === cook.recipe_id) {
        toast.error("This recipe is already in your cart!");
      } else {
        const newCartItems = [...cartItems, cook];
        setCartItems(newCartItems);
        toast.success("Added to cart successfully!");
      }
    } else {
      const newCartItems = [...cartItems, cook];
      setCartItems(newCartItems);
      toast.success("Added to cart successfully!");

    }
  };

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Heading></Heading>
      <div className="container mx-auto mt-5 px-2 flex flex-col md:flex-col lg:flex-row gap-10 md:gap-5 lg:gap-10">
        <div className="md:w-[50%] lg:w-[65%] grid md:grid-cols-1 lg:grid-cols-2 self-center gap-5 md:gap-10 lg:gap-3">
          <CookingRecipes handleWantToCook={handleWantToCook}></CookingRecipes>
        </div>
        <div className="w-full md:w-[45%] lg:w-[35%] mx-auto">
          <Carts cartItems={cartItems}></Carts>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
