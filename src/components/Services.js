export default function Services() {
    const services = [
      { name: 'Web Development', icon: '🌐' },
      { name: 'UI/UX Design', icon: '🎨' },
      { name: 'Graphics Design', icon: '🖌️' },
      { name: 'Data Security', icon: '🔒' },
      { name: 'Digital Marketing', icon: '📢' },
    ];
  
    return (
      <section className="bg-blue-900 text-white text-center py-10">
        <h2 className="text-3xl font-bold">Services We Provide</h2>
        <div className="flex flex-wrap justify-center mt-8 space-x-6">
          {services.map(service => (
            <div key={service.name} className="bg-white text-blue-900 p-4 rounded shadow-md">
              <span className="text-4xl">{service.icon}</span>
              <p>{service.name}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  