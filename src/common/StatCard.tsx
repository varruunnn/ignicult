import React from "react";
import { motion } from "framer-motion";

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  bgGradient?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  icon,
  label,
  value,
  bgGradient = "from-[#2A2A2A] to-[#202020]",
}) => {
  return (
    <motion.div
      className={`bg-gradient-to-b ${bgGradient} p-5 rounded-2xl shadow-lg border border-gray-800 relative overflow-hidden h-full`}
      whileHover={{
        y: -5,
        boxShadow:
          "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)",
      }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <div className="absolute top-0 right-0 opacity-10 text-6xl p-2">
        {icon}
      </div>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-400 text-sm">{label}</p>
          <h2 className="text-2xl font-bold mt-1">{value}</h2>
        </div>
      </div>
    </motion.div>
  );
};

export default StatCard;