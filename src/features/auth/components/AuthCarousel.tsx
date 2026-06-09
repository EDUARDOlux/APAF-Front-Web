import { useState, useEffect } from 'react';
import { Button } from '../../../components/ui/Button';
import { BarChart2 } from 'lucide-react';

//Estructura de las diapositivas
interface SlideData {
    id: number;
    cardTitle: string;
    cardSubtitle: string;
    cardValue: string;
    cardLabel: string;
    imagePath: string;
}

const SLIDES: SlideData[] = [
    {
        id: 1,
        cardTitle: "Toma el control de tus datos",
        cardSubtitle: "Visualiza, analiza y gestiona el riesgo financiero en un solo lugar.",
        cardValue: "$350.40",
        cardLabel: "Cartera vigente",
        imagePath: "/src/assets/ImageLogin.png",
    },
    {
        id: 2,
        cardTitle: "Federación Centro Sur",
        cardSubtitle: "Monitoreo de morosidad, sucursales y proyecciones financieras.",
        cardValue: "3.34%",
        cardLabel: "IMOR",
        imagePath: "/src/assets/ImageLogin2.png",
    }
];

export function AuthCarousel() {
    const [current, setCurrent] = useState(0);

    // Autoplay (5 segundos)
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-full text-white p-6 w-full max-w-2xl">

            {/* --- TARJETA PRINCIPAL DIVIDIDA --- */}
            <div className="relative bg-white rounded-[10px] shadow-2xl w-full mb-16 flex flex-col sm:flex-row min-h-[340px] transition-all duration-500">

                {/* Izquierdo */}
                <div className="w-full sm:w-1/2 p-8 flex flex-col justify-center items-start">
                    <h3 className="text-3xl font-extrabold mb-4 leading-tight text-[#1A3626]">
                        {SLIDES[current].cardTitle}
                    </h3>
                    <p className="text-gray-500 text-sm mb-8 leading-relaxed pr-4">
                        {SLIDES[current].cardSubtitle}
                    </p>
                    <Button type="button" className="rounded-full px-6 bg-[#1A3626] hover:bg-[#1A3626]/90">
                        Más información
                    </Button>
                </div>

                {/* Derecho*/}
                <div className="w-full sm:w-1/2  relative">
                    <img
                        src={SLIDES[current].imagePath}
                        alt="Visualización de datos"
                        className="w-full h-full object-cover rounded-[10px]"
                    />
                </div>

                {/* --- TARJETA FLOTANTE (ESTADISTICAS) --- */}
                <div className="absolute -bottom-6 right-8 bg-white p-4 rounded-2xl shadow-xl  border-[#1A3626] border-2 flex items-center gap-4 z-10 transition-all duration-500">
                    <div className="w-20 h-10 bg-gray-50 rounded-lg flex items-center justify-center">
                        <BarChart2 className="w-5 h-5 text-gray-700" />
                    </div>
                    <div>
                        <p className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">
                            {SLIDES[current].cardLabel}
                        </p>
                        <p className="text-xl font-bold text-gray-900 leading-none mt-1">
                            {SLIDES[current].cardValue}
                        </p>
                    </div>
                </div>
            </div>

            {/* Texto */}
            <div className="text-center mt-4">
                <h2 className="text-4xl font-bold mb-4">Bienvenido a APAF</h2>
                <p className="text-gray-200 text-sm leading-relaxed opacity-90 max-w-md mx-auto">
                    Plataforma inteligente para la gestión y análisis de cartera de crédito.
                </p>
            </div>

            {/* Navegador*/}
            <div className="flex gap-2 mt-10">
                {SLIDES.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${current === index ? "w-8 bg-white" : "w-2 bg-white/40 hover:bg-white/60"
                            }`}
                        aria-label={`Ir a la diapositiva ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}