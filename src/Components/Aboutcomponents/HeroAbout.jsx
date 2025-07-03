import MainVisual from "../../assets/Image.jpg";
import SecondaryVisual from "../../assets/Building.jpg";

const HeroAbout = () => {
  return (
    <section className="bg-white py-32 px-4 sm:px-6 lg:px-8 font-jost">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Images */}
        <div className="flex flex-col sm:flex-row gap-6 lg:w-1/2 w-full">
          {/* Main Image */}
          <div className="relative w-full sm:w-1/2 lg:w-2/3 aspect-[3/4] overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
            <img
              src={MainVisual}
              alt="Happy couple on a balcony"
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/600x800/A0AEC0/FFFFFF?text=Image+Not+Found";
              }}
            />
          </div>

          <div className="relative w-full sm:w-1/2 lg:w-1/3 aspect-[3/4] overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out sm:mt-12 lg:mt-0">
            <img
              src={SecondaryVisual}
              alt="Modern building exterior"
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/400x600/CBD5E0/FFFFFF?text=Image+Not+Found";
              }}
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <p className="text-sm font-medium bg-gray-200 bg-opacity-70 rounded-md py-1 px-3 w-fit text-black uppercase tracking-wide mb-4">
            About us
          </p>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 leading-tight mb-6">
            Welcome to Residem
          </h1>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-6">
            At Residem, we believe that home is more than just a place – it's
            where your story unfolds. Located in the heart of New York, our
            apartments are designed to offer a perfect blend of modern living,
            convenience, and community. Whether you're a young professional, a
            growing family, or someone looking to downsize, we provide a living
            experience that fits your lifestyle.
          </p>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Located in the heart of New York, our apartments are designed to
            offer a perfect blend of modern living, convenience, and community.
            Whether you're a young professional, a growing family, or someone
            looking to downsize, we provide a living experience that fits your
            lifestyle.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroAbout;
