"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home, Terminal, AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-40 bg-cover bg-center"
        style={{ backgroundImage: "url('/404-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black z-0" />

      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 text-center px-6"
      >
        <div className="inline-flex items-center justify-center p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-6">
          <AlertTriangle className="w-8 h-8 text-cyan-400 animate-pulse" />
        </div>
        
        <h1 className="text-7xl md:text-9xl font-black text-white mb-2 tracking-tighter">
          404
        </h1>
        
        <div className="font-mono text-cyan-400 mb-8 space-y-2">
          <p className="text-lg md:text-xl uppercase tracking-[0.2em]">Neural Path Not Found</p>
          <p className="text-xs opacity-60">ERROR_CODE: 0x000404_CONNECTION_TERMINATED</p>
        </div>

        <p className="max-w-md mx-auto text-gray-400 mb-10 text-sm md:text-base leading-relaxed">
          The requested coordinate does not exist in the current sector. 
          The system has logged this anomaly for further investigation.
        </p>

        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 mx-auto px-8 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-full font-bold transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)]"
          >
            <Home className="w-4 h-4" />
            RETURN TO BASE
          </motion.button>
        </Link>
      </motion.div>

      {/* Decorative Terminal Lines */}
      <div className="absolute bottom-10 left-10 hidden lg:block">
        <div className="font-mono text-[10px] text-cyan-900 space-y-1">
          <p>{`> TRACING_PATH... FAILED`}</p>
          <p>{`> ANALYZING_SECTOR... EMPTY`}</p>
          <p>{`> REBOOTING_CORE... READY`}</p>
        </div>
      </div>
    </main>
  );
}