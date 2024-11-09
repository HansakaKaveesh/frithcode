// src/components/About.js
export default function About() {
    return (
        <section className="py-12 px-6 bg-white text-center">
            <h2 className="text-3xl font-bold mb-4">About FrithCode</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">FrithCode is dedicated to empowering businesses through exceptional web development services.</p>
            <div className="flex flex-col md:flex-row justify-center gap-8">
                <div>
                    <h3 className="text-xl font-semibold">2024 Years in Business</h3>
                    <p>Focused on quality and customer satisfaction.</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold">4 Core Values</h3>
                    <p>Integrity, Innovation, Customer Focus, Collaboration.</p>
                </div>
            </div>
        </section>
    );
}
