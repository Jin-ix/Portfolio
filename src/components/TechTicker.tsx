import { motion } from 'framer-motion';

const KEYWORDS = [
  'PyTorch', 'Computer Vision', 'YOLOv8', 'Digital Twins', 'XGBoost', 
  'Docker', 'AWS', 'FastAPI', 'MLOps', 'Explainable AI', 'SHAP', 'Scikit-Learn'
];

export default function TechTicker() {
  return (
    <div className="w-full overflow-hidden bg-emerald-500 py-3 border-y border-emerald-400">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 25,
        }}
      >
        {/* Duplicate the array twice to create a seamless loop */}
        {[...KEYWORDS, ...KEYWORDS, ...KEYWORDS, ...KEYWORDS].map((word, i) => (
          <div key={i} className="flex items-center mx-4">
            <span className="text-black font-bold text-[16px] uppercase tracking-widest" style={{ fontFamily: 'var(--font-heading)' }}>
              {word}
            </span>
            <span className="mx-4 text-black/50 text-[20px]">•</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
