import Image from 'next/image';
import teamImage from '../../public/About.png'; // Update the path to your image

export default function About() {
    return (
        <section className="py-12 px-20 bg-white flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 text-center md:text-left">
                <h2 className="text-3xl font-bold mb-4">About FrithCode</h2>
                <p className="text-gray-600 max-w-2xl mx-auto md:mx-0 mb-8">
                    FrithCode is dedicated to empowering businesses through exceptional web development services. Our mission is to create stunning, functional websites that enhance online presence and drive success in the digital landscape.
                </p>
                <div className="flex flex-col md:flex-row justify-start gap-8">
                    <div>
                        <h3 className="text-xl font-semibold">2024 Years in Business</h3>
                        <p>Since our inception, we have focused on quality and customer satisfaction, building lasting relationships with clients across various industries.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">4 Core Values</h3>
                        <p>Integrity, Innovation, Customer Focus, and Collaboration are the pillars of our company culture, guiding us in every project we undertake.</p>
                    </div>
                </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
                <Image src={teamImage} alt="Team working together" className="rounded-lg" width={500} height={500} />
            </div>
        </section>
    );
}
