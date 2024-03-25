import heroImage from "../../assets/hero-image.png";
const Hero = () => {
  return (
    <div className="container mx-auto mt-5 px-2">
      <div
        className="hero h-[600px] rounded-2xl"
        style={{
          backgroundImage:
            `url(${heroImage})`,
        }}
      >
        <div className="hero-content text-center">
          <div className="">
            <h1 className="mb-7 text-2xl md:text-4xl lg:text-5xl font-bold text-white">Discover an exceptional cooking <br/> class tailored for you</h1>
            <p className="mb-10 text-white text-sm md:text-lg">
                Learn and Master Basic Programming,  Data Structures, Algorithm, OOP, Database and solve 500+ coding 
                problems to become an exceptionally well world-class Programmer.
            </p>
            <div className="flex justify-center gap-4 md:gap-5">
            <button className="btn bg-[#0be58a] hover:bg-[#76fdc4] border-none rounded-3xl px-3 md:px-6 text-lg font-bold">Explore Now</button>
            <button className="border rounded-3xl text-lg hover:text-[#0be58a] font-bold px-3 md:px-6 text-white">Our Feedback</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
