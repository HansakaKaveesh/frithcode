// src/components/OurServices.js
const OurServices = () => {
  const services = [
    { title: "Custom Online Stores", description: "Design tailored e-commerce websites with unique features to meet your business needs and attract more customers." },
    { title: "Seamless Integrations", description: "Integrate payment gateways, shipping solutions, and third-party tools for a smooth e-commerce experience." },
    { title: "Scalable Solutions", description: "Build scalable e-commerce platforms that grow with your business, ensuring long-term success." }
  ];

  return (
    <section className="bg-gray-100 py-16 px-8 dark:bg-gray-800">
      <h2 className="text-4xl font-bold text-center text-blue-800 dark:text-blue-400 mb-12">Our E-Commerce Solutions</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl rounded-lg p-8 transform hover:scale-105 transition-all"
          >
            <h3 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-300">{service.title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
