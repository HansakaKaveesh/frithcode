export default function Services() {
  return (
      <section className="relative py-16 px-8 bg-cover bg-center"
      style={{ backgroundImage: 'url("service.jpg")' }}>
          <div className="absolute inset-0 bg-blue-950 opacity-60"></div>
          <div className="relative text-center mb-12 text-white">
        <h2 className="text-3xl font-bold">Services We Provide</h2>
        <p className="mt-4 max-w-xl mx-auto">
          Discover the wide range of services we offer to help your business grow and succeed in the digital world.
        </p>
      </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                  <div className="text-blue-600 mb-4">
                      <svg className="w-12 h-12 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2a10 10 0 100 20 10 10 0 000-20zM11 15H9V9h2v6zm4 0h-2v-4h2v4z" />
                      </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-2">Web Development</h3>
                  <p className="text-gray-600 text-center">
                      Building high-quality websites tailored to your business needs with a focus on performance and user experience.
                  </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                  <div className="text-green-600 mb-4">
                      <svg className="w-12 h-12 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2a10 10 0 100 20 10 10 0 000-20zM11 15H9V9h2v6zm4 0h-2v-4h2v4z" />
                      </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-2">Mobile App Development</h3>
                  <p className="text-gray-600 text-center">
                      Creating responsive and user-friendly mobile applications for both Android and iOS platforms.
                  </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                  <div className="text-yellow-600 mb-4">
                      <svg className="w-12 h-12 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2a10 10 0 100 20 10 10 0 000-20zM11 15H9V9h2v6zm4 0h-2v-4h2v4z" />
                      </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-2">SEO Optimization</h3>
                  <p className="text-gray-600 text-center">
                      Improving your website's visibility on search engines to attract more organic traffic and grow your audience.
                  </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                  <div className="text-purple-600 mb-4">
                      <svg className="w-12 h-12 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2a10 10 0 100 20 10 10 0 000-20zM11 15H9V9h2v6zm4 0h-2v-4h2v4z" />
                      </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-2">UI/UX Design</h3>
                  <p className="text-gray-600 text-center">
                      Designing user interfaces that are intuitive, aesthetically pleasing, and aligned with your brand.
                  </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                  <div className="text-indigo-600 mb-4">
                      <svg className="w-12 h-12 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2a10 10 0 100 20 10 10 0 000-20zM11 15H9V9h2v6zm4 0h-2v-4h2v4z" />
                      </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-2">Digital Marketing</h3>
                  <p className="text-gray-600 text-center">
                      Promoting your business through digital channels to increase brand awareness and reach potential customers.
                  </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                  <div className="text-red-600 mb-4">
                      <svg className="w-12 h-12 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2a10 10 0 100 20 10 10 0 000-20zM11 15H9V9h2v6zm4 0h-2v-4h2v4z" />
                      </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-2">E-commerce Solutions</h3>
                  <p className="text-gray-600 text-center">
                      Providing comprehensive e-commerce solutions to help you build and grow your online store.
                  </p>
              </div>
          </div>
      </section>
  );
}
