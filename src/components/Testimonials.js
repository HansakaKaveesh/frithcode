import Image from "next/legacy/image";
import client1 from '../../public/About.png';
import client2 from '../../public/About.png';
import client3 from '../../public/About.png';

export default function Testimonials() {
    const testimonials = [
        {
            id: 1,
            name: 'Alex Johnson',
            feedback: 'FrithCode exceeded our expectations with their expertise and dedication. Our website looks stunning and functions perfectly!',
            image: client1,
        },
        {
            id: 2,
            name: 'Sarah Thompson',
            feedback: 'Amazing work! The team was responsive and attentive to our needs. We couldn’t be happier with the final product.',
            image: client2,
        },
        {
            id: 3,
            name: 'Michael Lee',
            feedback: 'Professional, reliable, and incredibly talented. FrithCode delivered on every promise and helped grow our online presence.',
            image: client3,
        },
    ];

    return (
        <section className="py-16 px-8 bg-white dark:bg-gray-800">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Words from Our Clients</h2>
                <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-xl mx-auto">
                    See what our clients have to say about working with us. We’re proud to have made a difference for these amazing people.
                </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {testimonials.map((testimonial) => (
                    <div
                        key={testimonial.id}
                        className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
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
