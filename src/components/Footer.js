// src/components/Footer.js
export default function Footer() {
    return (
        <footer className="py-12 px-6 bg-blue-900 text-white text-center dark:bg-blue-800 dark:text-gray-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                    <h3 className="font-bold text-lg mb-3">About Us</h3>
                    <p className="text-sm text-gray-300 dark:text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula orci quis risus
                        mollis.
                    </p>
                </div>
                <div>
                    <h3 className="font-bold text-lg mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm text-gray-300 dark:text-gray-400">
                        <li className="hover:text-yellow-400 cursor-pointer">Home</li>
                        <li className="hover:text-yellow-400 cursor-pointer">About</li>
                        <li className="hover:text-yellow-400 cursor-pointer">Services</li>
                        <li className="hover:text-yellow-400 cursor-pointer">Contact</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold text-lg mb-3">Follow Us</h3>
                    <ul className="flex justify-center gap-6">
                        <li className="text-xl hover:text-yellow-400 cursor-pointer">Facebook</li>
                        <li className="text-xl hover:text-yellow-400 cursor-pointer">Twitter</li>
                        <li className="text-xl hover:text-yellow-400 cursor-pointer">Instagram</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold text-lg mb-3">Contact Us</h3>
                    <p className="text-sm text-gray-300 dark:text-gray-400">Email: info@example.com</p>
                    <p className="text-sm text-gray-300 dark:text-gray-400">Phone: +123 456 7890</p>
                </div>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-4">
                <p className="text-sm text-gray-300 dark:text-gray-400">&copy; 2024 Your Website. All Rights Reserved.</p>
            </div>
        </footer>
    );
}
