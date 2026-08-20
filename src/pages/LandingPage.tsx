import heroImage from "@/assets/hero-image.png";

export default function LandingPage() {
  return (
    <header className="relative min-h-screen flex items-center">
      <img
        src={heroImage}
        alt="PDDL laboratory"
        className="absolute inset-0 w-full h-full object-cover"      
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent flex items-center px-16">

        <div className="relative max-w-xl px-16 text-white">
            <h1 className="text-5xl font-extrabold leading-tight mb-4">
              Welcome to <br />PDDL Laboratory Portal
            </h1>

            <p className="text-lg mb-8 opacity-90">
              Your Health, Our Priority: Secure Online Results
            </p>
            <button className="bg-green-700 hover:bg-green-800 transition-colors text-white pl-6 pr-5 py-3 rounded-full font-semibold flex items-center gap-2">
              View Lab Results
              <svg
                xmlns="https://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4">
                  <path d="M9 18l6-6-6-6" />
              </svg>
            </button>

        </div>

      </div>

    </header>
  );
}