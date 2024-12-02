// src/components/WhyChooseUs.js
import Image from 'next/image';

const WhyChooseUs = () => {
  const features = [
    { src: "/Services/custom-design.png", title: "Custom Design", description: "Tailored website designs that reflect your unique brand and goals, making your online presence truly stand out." },
    { src: "/Services/secure.png", title: "Secure & Fast", description: "Our websites are highly optimized, secure, and provide a seamless user experience, ensuring both speed and safety." },
    { src: "/Services/support.png", title: "Ongoing Support", description: "We provide reliable support to ensure your website remains up-to-date and performs optimally at all times." }
  ];

  return (
    <section className="py-16 px-8 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-4xl font-bold text-center text-blue-800 dark:text-blue-400 mb-12">Why Choose Us?</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {features.map((item, index) => (
          <div
            key={index}
            className="text-center bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow rounded-lg p-8 transform hover:scale-105"
          >
            <div className="relative w-20 h-20 mx-auto">
              <Image src={item.src} alt={item.title} fill className="object-contain" />
            </div>
            <h3 className="text-2xl font-semibold mt-6 text-blue-600 dark:text-blue-300">{item.title}</h3>
            <p className="mt-4 text-gray-700 dark:text-gray-300">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
