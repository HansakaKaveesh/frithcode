"use client"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/legacy/image";
import client1 from "../../public/Men.jpg";
import client2 from "../../public/Women.jpg";
import client3 from "../../public/Men.jpg";

export default function Testimonials() {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Duration of animation
            easing: "ease-in-out", // Easing type
            once: true, // Ensures animation happens only once
            offset: 100, // Trigger offset for animations
        });
    }, []);

    const testimonials = [
        {
            id: 1,
            name: "Sachith Gunasekara",
            feedback: "Thank you so much for everyones hardwork and dedication. Even through your rough times. I appreciate it!",
            image: client1,
        },
        {
            id: 2,
            name: "Sarah Thompson",
            feedback: "Amazing work! The team was responsive and attentive to our needs. We couldn’t be happier with the final product.",
            image: client2,
        },
        {
            id: 3,
            name: "Michael Lee",
            feedback: "Professional, reliable, and incredibly talented. FrithCode delivered on every promise and helped grow our online presence.",
            image: client3,
        },
    ];

    return (
        <section className="py-16 px-8 bg-white dark:bg-gray-800">
            <div className="text-center mb-12" data-aos="fade-up">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Words from Our Clients</h2>
                <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-xl mx-auto">
                    See what our clients have to say about working with us. We’re proud to have made a difference for these amazing people.
                </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={testimonial.id}
                        className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
                        data-aos="zoom-in"
                        data-aos-delay={`${index * 100}`} // Adds delay for staggered animations
                    >
                        <div className="flex flex-col items-center text-center">
                            <div className="relative w-24 h-24 mb-4">
                                <Image
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-full"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{testimonial.name}</h3>
                            <p className="text-gray-600 dark:text-gray-400 mt-3">{testimonial.feedback}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
