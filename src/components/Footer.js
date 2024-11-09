// src/components/Footer.js
export default function Footer() {
    return (
        <footer className="py-8 px-6 bg-blue-900 text-white text-center">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                    <h3 className="font-bold">About Us</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div>
                    <h3 className="font-bold">Quick Links</h3>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold">Follow Us</h3>
                    <ul className="flex gap-2 justify-center">
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold">Contact Us</h3>
                    <p>Email: info@example.com</p>
                    <p>Phone: +123 456 7890</p>
                </div>
            </div>
            <p className="mt-6">&copy; 2024 Your Website. All Rights Reserved.</p>
        </footer>
    );
}
