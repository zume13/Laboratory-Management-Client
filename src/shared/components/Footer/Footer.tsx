function MapPinIcon() {
    return (
        <svg 
        xmlns="https://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-4 h-4 flex-shrink-0 mt-0.5">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
        </svg>
    );
}

function PhoneIcon() {
    return (
        <svg 
        xmlns="https://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-4 h-4 flex-shrink-0">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
        </svg>
    );
}

function MailIcon() {
    return (
        <svg 
        xmlns="https://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-4 h-4 flex-shrink-0">
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
    );
}

function ClockIcon() {
    return (
        <svg 
        xmlns="https://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-4 h-4 flex-shrink-0 mt-0.5">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v614 2" />
        </svg>
    );
}

export default function Footer() {
    return (
        <footer id="contactUs" className="bg-green-800 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divite-white/20 px-16 py-12"> 
                <div className="pr-8">
                    <h4 className="font-semibold text-lg mb-4">
                        Contact Us
                    </h4>

                    <div className="flex gap-3 mb-3">
                        <MapPinIcon />
                        <p className="text-sm text-white/90">
                            PDDL Disgnostic Laboratory
                            <br />
                            442 MacArthur Highway in San Fernando
                        </p>
                    </div>

                    <div className="flex items-center gap-3 mb-3">
                        <PhoneIcon />
                        <p className="text-sm text-white/90">(045) 961 0455</p>
                    </div>

                    <div className="flex items-center gap-3 mb-3">
                        <MailIcon />
                        <p className="text-sm text-white/90">pddldiagnoslaboratory@gmail.com</p>
                    </div>

                    <div className="flex gap-3">
                        <ClockIcon />
                        <p className="text-sm text-white/90">
                            Mon - Sat: 5:00 AM - 6:00 PM
                            <br />
                            Sun - 5:00 AM - 12:00 PM
                        </p>
                    </div>
                </div>

                <div className="px-0 md:px-8 pt-8 md:pt-0">
                    <h4 className="font-semibold text-lg mb-4">Our Location</h4>
                    <iframe
                        title="PDDL Diagnostic Laboratory location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3853.225919559987!2d120.6824532117519!3d15.035615285443532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396f70c4af02d15%3A0x38cfb1990929c423!2sPDDL%20Diagnostic%20Laboratory!5e0!3m2!1sen!2sph!4v1789819308785!5m2!1sen!2sph"
                        className="w-full h-40 rounded-lg border-0"
                        loading="lazy"
                        referrerPolicy="strict-origin-when-cross-origin"
                    />
                </div>

                <div className="pl-0 md:pl-8 pt-8 md:pt-0">
                    <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
                    <ul className="text-sm space-y-2 text-white/90">
                        <li><a href="#home" className="hover:text-white">Home</a></li>
                        <li><a href="#aboutUs" className="hover:text-white">About Us</a></li>
                        <li><a href="#services" className="hover:text-white">Services</a></li>
                        <li><a href="#aboutUs" className="hover:text-white">About PDDL</a></li>
                    </ul>

                    <div className="border-t border-white/20 my-4" />

                    <ul className="text-sm space-y-2 text-white/90">
                        <li><a href="/tos" className="hover:text-white">Terms of Service</a></li>
                        <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
                        <li><a href="/staff-access" className="text-white/50 hover:text-white/80">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-white/20 px-16 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/70">
                <p>© 2026 PDDL Diagnostic Laboratory. All rights reserved.</p>
                <p>
                    <a href="/privacy" className="hover:text-white">Privacy Policy</a>
                    {" "}|{" "}
                    <a href="/tos" className="hover:text-white">Terms of Service</a>
                </p>
            </div>
        </footer>
    );
}