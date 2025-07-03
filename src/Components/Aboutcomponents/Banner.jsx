import Visual from "../../assets/Building.jpg";

const Banner = () => {
  return (
    <section className="relative bg-teal-800 text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${Visual}')`,
        }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center justify-center text-center min-h-[350px] sm:min-h-[400px] md:min-h-[500px]">
        <div className="w-full md:w-5/6 lg:w-3/4 flex flex-col justify-center items-center p-4 sm:p-6 rounded-lg">
          <p className="text-sm font-medium bg-gray-700 bg-opacity-70 rounded-md py-1 px-3 w-fit text-white uppercase tracking-wide mb-4">
            Our Mission
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight mb-4 max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl">
            To create welcoming, well-maintained, and thoughtfully designed
            living spaces where residents feel proud to call home.
          </h1>

          <button className="mt-6 sm:mt-8 bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-300 shadow-lg transform hover:scale-105">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
