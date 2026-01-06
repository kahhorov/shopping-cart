import { Link } from "react-router-dom";
import { FiAlertTriangle } from "react-icons/fi";
import { HiArrowLongLeft } from "react-icons/hi2";

function PageNotFound() {
  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center bg-slate-950">
      {/* 🔵 BLUE GLOW */}
      <div
        className="
          absolute -top-40 -left-40
          w-[500px] h-[500px]
          bg-blue-600/40
          rounded-full
          blur-[120px]
          animate-[pulse_6s_ease-in-out_infinite]
        "
      />

      {/* 🔴 RED GLOW */}
      <div
        className="
          absolute -bottom-40 -right-40
          w-[500px] h-[500px]
          bg-red-600/40
          rounded-full
          blur-[120px]
          animate-[pulse_8s_ease-in-out_infinite]
        "
      />

      {/* 🧊 CONTENT CARD */}
      <div
        className="
          relative z-10
          w-[92%] max-w-xl
          bg-white/95 backdrop-blur-xl
          rounded-2xl
          shadow-2xl
          px-8 py-10
          text-center
          animate-[float_5s_ease-in-out_infinite]
        "
      >
        {/* ICON */}
        <div className="flex justify-center mb-6">
          <div className="p-4 rounded-full bg-gradient-to-br from-red-500 to-blue-500 text-white shadow-lg">
            <FiAlertTriangle size={36} />
          </div>
        </div>

        <h1 className="text-5xl font-extrabold text-slate-900 mb-2">404</h1>

        <h2 className="text-2xl font-semibold text-slate-700">
          Sahifa topilmadi
        </h2>

        <p className="mt-4 text-slate-500 leading-relaxed">
          Siz izlayotgan sahifa mavjud emas yoki o‘chirilgan bo‘lishi mumkin.
          Iltimos, manzilni tekshiring yoki bosh sahifaga qayting.
        </p>

        {/* ACTION */}
        <Link
          to="/"
          className="
            inline-flex items-center gap-2 mt-8
            px-6 py-3
            rounded-xl
            bg-gradient-to-r from-blue-600 to-red-600
            text-white font-medium
            shadow-lg
            transition
            hover:scale-[1.03] hover:shadow-xl
          "
        >
          <HiArrowLongLeft size={20} />
          Bosh sahifaga qaytish
        </Link>
      </div>

      {/* 🔧 FLOAT ANIMATION */}
      <style>
        {`
          @keyframes float {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }
        `}
      </style>
    </div>
  );
}

export default PageNotFound;
