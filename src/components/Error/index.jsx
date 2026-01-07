import { toast } from "react-toastify";
import { useEffect } from "react";
import UseGetApi from "../../hooks/UseGet";

function Error() {
  const { error, data, loading } = UseGetApi();

  useEffect(() => {
    if (error) {
      toast.error("Nimadur xato ketti");
    }
  }, [error]);

  if (data || loading || !error) return null;

  return (
    <div className="select-none fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black">
      {/* 🔵 KO‘K ENERGIYA */}
      <div
        className="
          absolute w-[160%] h-[160%]
          bg-[conic-gradient(at_center,_#2563eb,_#3b82f6,_#60a5fa,_#2563eb)]
          animate-[spin_14s_linear_infinite]
          blur-[140px] opacity-45
        "
      />

      {/* 🔴 QIZIL ENERGIYA */}
      <div
        className="
          absolute w-[150%] h-[150%]
          bg-[conic-gradient(at_center,_#dc2626,_#ef4444,_#f87171,_#dc2626)]
          animate-[spin_20s_linear_infinite_reverse]
          blur-[160px] opacity-10
        "
      />
      <div
        className="
          absolute w-[120%] h-[120%]
          bg-[radial-gradient(circle,_rgba(255,255,255,0.12)_0%,_transparent_60%)]
          animate-[pulse_6s_ease-in-out_infinite]
        "
      />
      <div
        className="
          relative z-10
          w-[92%] max-w-3xl
          rounded-[2.5rem]
          bg-black/20 backdrop-blur-2xl
          shadow-[0_30px_80px_rgba(0,0,0,0.45)]
          px-10 py-12
          text-center
          animate-[float_4s_ease-in-out_infinite]
        "
      >
        <h2 className="text-5xl font-extrabold bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent mb-6">
          XATOLIK
        </h2>

        <p className="text-gray-200 text-xl leading-relaxed">{error}</p>

        <div className="mt-6 text-sm text-gray-400">
          Server bilan aloqa uzildi yoki so'rov bajarilmadi
        </div>
      </div>

      <style>
        {`
          @keyframes float {
            0%, 100% {
              transform: translateY(0) scale(1);
            }
            50% {
              transform: translateY(-14px) scale(1.02);
            }
          }
        `}
      </style>
    </div>
  );
}

export default Error;
