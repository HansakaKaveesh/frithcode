// src/components/Portfolio.js
export default function Portfolio() {
    return (
        <section className="py-12 px-6 text-center bg-white">
            <h2 className="text-3xl font-bold mb-4">Our Recent Projects</h2>
            <p className="text-gray-600 mb-8">Explore our portfolio to see the diverse range of projects we’ve completed.</p>
            <div className="flex flex-wrap justify-center gap-6">
                {/* Add images or project cards here */}
                <div className="w-60 h-40 bg-gray-200 rounded-lg"></div>
                <div className="w-60 h-40 bg-gray-200 rounded-lg"></div>
                <div className="w-60 h-40 bg-gray-200 rounded-lg"></div>
            </div>
        </section>
    );
}
