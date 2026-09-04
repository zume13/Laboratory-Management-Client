import buildingPhoto from "@/assets/PDDL-Building.png";

export default function AboutUs() {
    return (
        <section id="aboutUs" className="flex flex-col md:flex-row items-center gap-16 max-w-7xl mx-auto px-16 py-16">
            <img 
                src={buildingPhoto}
                alt="PDDL Diagnostic Laboratory Building"
                className="flex-1 w-full rounded-2xl shadow-lg object-cover"
            />

            <div className="flex-[1.6] text-left">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    About PDDL Diagnostic Laboratory
                </h2>

                <p className="text-gray-600 leading-relaxed mb-4">
                    Established in 1895 by NBI Pathologist Dr. Nieto M. Salvador, PDDL
                    Diagnostic Laboratory has built a century-long legacy of providing
                    accurate and reliable diagnostic healthcare to the community.
                    Originally known as the New Pampanga Diagnostic Laboratory before
                    adopting its current standalone brand in 2014, our centralized
                    facility operates from a single, highly focused location
                    strategically situated at 442 MacArthur Highway in San Fernando,
                    directly across from JBL Hospital. By operating without external
                    branches, we guarantee that every test is processed in-house under
                    the direct supervision of our dedicated leadership.
                </p>

                <p className="text-gray-600 leading-relaxed">
                    We offer a comprehensive suite of diagnostic services—ranging from
                    general hematology and complete blood counts to advanced
                    histopathology, clinical microscopy, and special medical
                    examinations. Behind every analysis is a lean, highly specialized
                    team comprising our head pathologist, medical technologist, and
                    skilled phlebotomists who deliver personalized care to every
                    patient. As part of our ongoing commitment to accessible
                    healthcare, PDDL is bridging our historic roots with modern
                    digital innovation. We have evolved beyond traditional, easily
                    damaged paper records and inconvenient return trips, providing our
                    patients with a secure digital portal to access their verified
                    medical results instantly and effortlessly.
                </p>
            </div>
        </section>
    );
}