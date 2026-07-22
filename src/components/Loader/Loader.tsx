import { motion } from "framer-motion";

export function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="relative h-16 w-16">
          <span className="absolute inset-0 rounded-full border-2 border-gold-500/20" />
          <span className="absolute inset-0 rounded-full border-2 border-transparent border-t-gold-400 animate-spin" />
          <img
            src="/assets/favicon.jpg"
            alt="GALZVIRT"
            className="absolute inset-0 m-auto h-9 w-9 rounded-sm object-cover"
          />
        </div>
        <span className="font-heading text-[10px] uppercase tracking-widest3 text-gold-400/80">
          Galzvirt
        </span>
      </div>
    </motion.div>
  );
}
