import { TriangleAlert, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../../../components/ui/Button';
import { useLockoutTimer } from '../hooks/useLockoutTimer';

export function AccountLocked() {
  const { formattedTime } = useLockoutTimer();

  return (
    <div className="w-full max-w-md mx-auto flex flex-col items-center text-center p-4 justify-center min-h-screen sm:min-h-0">
      {/* Icono */}
      <div className="w-16 h-16 bg-[#D5E1DE] rounded-full flex items-center justify-center mb-4 shrink-0">
        <TriangleAlert size={32} className="text-[#014A24]" strokeWidth={1.5} />
      </div>

      {/* Título */}
      <h1 className="text-xl sm:text-2xl font-bold text-[#014A24] mb-2 tracking-tight">
        Cuenta Bloqueada Temporalmente
      </h1>

      <p className="text-gray-500 mb-5 text-xs sm:text-sm max-w-sm">
        Ha alcanzado el límite de 5 intentos fallidos de <span className="font-semibold text-[#1A3626]">inicio de sesión</span>.
      </p>

      {/* Contador*/}
      <div className="w-full bg-[#D5E1DE]  rounded-[10px] p-7 mb-4  shadow-sm">
        <div className="flex items-center justify-center gap-2 mb-1">
          <Clock size={16} className="text-[#1A3626]" />
          <p className="text-xs font-medium text-gray-600">Tu cuenta estará bloqueada por:</p>
        </div>

        <p className="text-2xl sm:text-3xl font-bold text-[#1A3626] mb-1 tracking-wider">{formattedTime}</p>

        <p className="text-[11px] text-gray-500 max-w-xs mx-auto leading-tight">
          Podrás volver a intentar iniciar sesión después de este tiempo.
        </p>
      </div>

      {/* Mensajes */}
      <div className="w-full bg-[#D5E1DE] rounded-[10px] p-4 mb-4  text-left shadow-sm">
        <h3 className="text-xs font-bold text-gray-800 mb-2">¿Qué puedo hacer?</h3>
        <ul className="text-xs text-gray-600 space-y-1.5 list-disc pl-4 marker:text-gray-400">
          <li>Espere a que el contador llegue a cero.</li>
          <li>Verifique que sus credenciales sean las correctas.</li>
          <li>Use la opción de recuperación de contraseña.</li>
          <li>Contacte al administrador si necesita soporte técnico.</li>
        </ul>
      </div>

      <Link to="/recover-password" className="w-full mb-4">
        <Button className="w-full text-sm font-medium py-2.5 h-auto transition-all">
          ¿Olvidaste tu contraseña?
        </Button>
      </Link>

      {/* Footer minimalista */}
      <div className="text-xs text-gray-500 mt-2">
        <p>¿No tienes cuenta? <span className="font-medium text-[#1A3626]">Comunícate con el administrador.</span></p>
      </div>
    </div>
  );
}