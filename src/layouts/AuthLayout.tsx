import React from 'react';
import { AuthCarousel } from '../features/auth/components/AuthCarousel';

interface AuthLayoutProps {
    children: React.ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
    return (
        <div className="min-h-screen w-full flex flex-col lg:flex-row bg-white">

            {/* Izquierdo*/}
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-8 lg:p-24 relative">
                {/* Contenedor*/}
                <div className="w-full max-w-md">
                    {children}
                </div>
            </div>

            {/*  Derecho*/}
            <div className="hidden lg:flex w-1/2 bg-[#014A24] items-center justify-center relative overflow-hidden">
                {/* Círculo */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />

                {/* Carrusel */}
                <AuthCarousel />
            </div>
        </div>
    );
}