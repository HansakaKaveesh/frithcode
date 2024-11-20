import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
<div className="relative bg-blue-800 text-white dark:bg-blue-900">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: 'url("/Aboutus.jpg")',
    }}
  ></div>

  {/* Blue Transparent Overlay */}
  <div className="absolute inset-0 bg-blue-900 bg-opacity-50 dark:bg-opacity-70"></div>

  {/* Overlay Content */}
  <div className="relative container mx-auto min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] lg:min-h-[90vh] py-24 sm:py-28 md:py-36 lg:py-60 text-center flex flex-col justify-center">
    <h1 className="text-3xl md:text-4xl font-bold text-white dark:text-gray-100">Story of FrithCode Technologies</h1>
    <p className="mt-4 text-base md:text-lg">
      <Link href="/" className="text-blue-300 hover:underline dark:text-blue-400">Home</Link> &gt; About Us
    </p>
  </div>
</div>



      {/* About Section */}
      <div className="container mx-auto py-12 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-gray-200 mb-12">
          About FrithCode Technologies
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image Section */}
          <div className="relative h-full w-full overflow-hidden rounded-lg shadow-md">
            <Image
              src="/Analytic.jpg"
              alt="Analytics"
              width={500}
              height={300}
              className="h-full w-full object-cover rounded-lg transform hover:scale-105 transition-transform duration-500 ease-in-out"
            />
          </div>

          {/* Text Section */}
          <div className="text-gray-700 dark:text-gray-300">
            <p className="text-base md:text-lg leading-relaxed mb-6">
              We are an award-winning, multi-disciplinary web designing/development, digital,
              and social media marketing agency in Sri Lanka. We integrate creativity, 
              proven marketing strategies, and cutting-edge technologies to deliver powerful 
              results that drive the growth of brands.
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              Interested in partnering with us? We’d love to hear from you! Say hello to get 
              to know what we can do for your brand.
            </p>
          </div>
        </div>
      </div>

     {/* Vision and Mission Section */}
{/* Vision and Mission Section */}
<div className="bg-gray-50 py-16 md:py-20 dark:bg-gray-800">
  <div className="container mx-auto max-w-full sm:max-w-md lg:max-w-3xl xl:max-w-4xl px-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 text-center">
      {/* Vision */}
      <div className="bg-white shadow-lg p-8 rounded-lg transform hover:scale-105 transition-transform duration-300 dark:bg-gray-700 dark:text-white">
        <h3 className="text-xl md:text-2xl font-bold text-blue-700 dark:text-blue-400 mb-6">Our Vision</h3>
        <p className="text-base md:text-lg text-gray-600 leading-relaxed dark:text-gray-300">
          Our vision is to operate as a worldwide web solution provider through 100% 
          customer satisfaction while providing creative, unique, and effective websites.
        </p>
      </div>

      {/* Mission */}
      <div className="bg-white shadow-lg p-8 rounded-lg transform hover:scale-105 transition-transform duration-300 dark:bg-gray-700 dark:text-white">
        <h3 className="text-xl md:text-2xl font-bold text-blue-700 dark:text-blue-400 mb-6">Our Mission</h3>
        <p className="text-base md:text-lg text-gray-600 leading-relaxed dark:text-gray-300">
          Our mission is to furnish the best web solution to customers by conceptualizing 
          their ideas and transforming them into the latest web designing technology.
        </p>
      </div>
      
    </div>
  </div>
</div>



      {/* Board of Directors Section */}
<div className="container mx-auto py-20 px-6 md:px-12 flex flex-col items-center">
  <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-16">Board of Directors</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 justify-center">
    <div className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 dark:bg-gray-800 dark:text-white">
      <Image
        src="/Director1.jpg"
        alt="Director 1"
        width={250}
        height={250}
        className="mx-auto mb-6 rounded-full border-4 border-gray-200 dark:border-gray-600"
        style={{ objectFit: 'cover' }}
      />
      <h4 className="mt-4 text-2xl font-semibold text-gray-800 dark:text-gray-100">Hashan Thuduhena</h4>
      <p className="text-md text-gray-600 dark:text-gray-300">Founder & CEO</p>
    </div>
    <div className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 dark:bg-gray-800 dark:text-white">
      <Image
        src="/Director2.jpg"
        alt="Director 2"
        width={250}
        height={250}
        className="mx-auto mb-6 rounded-full border-4 border-gray-200 dark:border-gray-600"
        style={{ objectFit: 'cover' }}
      />
      <h4 className="mt-4 text-2xl font-semibold text-gray-800 dark:text-gray-100">Achini Perera</h4>
      <p className="text-md text-gray-600 dark:text-gray-300">Director</p>
    </div>

    <div className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 dark:bg-gray-800 dark:text-white">
      <Image
        src="/Director2.jpg"
        alt="Director 2"
        width={250}
        height={250}
        className="mx-auto mb-6 rounded-full border-4 border-gray-200 dark:border-gray-600"
        style={{ objectFit: 'cover' }}
      />
      <h4 className="mt-4 text-2xl font-semibold text-gray-800 dark:text-gray-100">Achini Perera</h4>
      <p className="text-md text-gray-600 dark:text-gray-300">Director</p>
    </div>
  </div>
</div>


    </div>
  );
};

export default About;
