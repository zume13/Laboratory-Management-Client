import instantDeliveryIcon from "@/assets/services-icons/instant-delivery.png";
import precisionEquipmentIcon from "@/assests/services-icons/precision-equipment.png";
import certifiedProfessionalsIcon from "@/assets/services-icons/certified-professionals.png";
import hematologyIcon from "@/assets/services-icons/hematology.png";
import clinicalChemistryIcon from "@/assets/services-icons/clinical-chemistry.png";
import serologyIcon from "@/assets/services-icons/serology.png";
import clinicalMicroscopyIcon from "@/assets/services-icons/clinical-microscopy.png";
import hispathologyIcon from "@/assets/services-icons/histopathology.png";
import specialExaminationIcon from "@/assets/services-icons/special-examination.png";
import ServiceCard from "@/shared/components/ServicesCards/ServicesCards";

const reasons = [
    { icon: instantDeliveryIcon, title: "Instant Delivery", description: "Save a trip to the clinic and view your verified results online instantly." },
    { icon: precisionEquipmentIcon, title: "Precision Equipment", description: "State-of-the-art automated machines ensuring the highest standard of accuracy." },
    { icon: certifiedProfessionalsIcon, title: "Certified Professionals", description: "Handled exclusively by highly trained, board-certified Medical Technologists." },
];

const services = [
    { icon:hematologyIcon, title: "Hematology", description: "Complete blood counts, blood typing, and comprehensive blood disorder analysis." },
    { icon: clinicalChemistryIcon, title: "Clinical Chemistry", description: "Evaluation of metabolic panels, organ function, and vital biochemical markers." },
    { icon: serologyIcon, title: "Serology", description: "infectious disease screening, antibody detection, and immune system profiling." },
    { icon: clinicalMicroscopyIcon, title: "Clinical Microscopy", description: "Detailed routine urinalysis, fecalysis, and microscopic examination of body fluids." },
    { icon: hispathologyIcon, title: "Hispathology", description: "Microscopic analysis of surgical biopsies and tissue sample for accurate disease diagnosis."  },
    { icon: specialExaminationIcon, title: "Special Examination", description: "Advance, specialize diagnostic testing tailored for specific and complex clinical requirements." }
];

export default function Services() {
    return (
        <section id="services">
            {/* Why choose us */}
            <div className="relative -mt-16 mx-16 bg-white rounded-2xl shadow-lg px-10 py-8 z-10">
                <h2 className="text-center text-lg font-bold  text-gray-900 mb-6">
                    Why Choose PDDL Diagnostic Laboratory?
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 divide-x divide-gray-200">
                    {reasons.map((reason) => ( 
                        <div key={reason.title} className="flex items-start gap-3 px-6">
                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                                <img src={reason.icon} alt="" className="w-5 h-5 object-contain" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900 text-sm">{reason.title}</h3>
                                <p className="text-gray-500 text-xs mt-1 leading-relaxed">{reason.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Services Offered */}
            <div className="px-16 py-16">
                <h2 className="text-center text-2xl font-bold text-gray-900 mb-2">
                    Service Offered
                </h2>
                <div className="w-16 h-1 bg-green-600 mx-auto mb-10" />

                <div>
                    {services.map ((service) => (
                        <ServiceCard 
                            key={service.title}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}