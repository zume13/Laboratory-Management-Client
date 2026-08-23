interface CardProps {
    icon: string;
    title: string;
    description: string;
}

export default function ServicesCards({ icon, title, description }: CardProps) {
    return (
        <div className="bg-white border border-gray-200 rounded-xl p-6 text-left transition-transform hover:-translate-y-1 hover:shadow-lg">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <img src={icon} alt="" className="w-6 h-6 object-contain" />
            </div>
            <h3 className="text-green-700 font-semibold text-base mb-2">{title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
        </div>
    );
}