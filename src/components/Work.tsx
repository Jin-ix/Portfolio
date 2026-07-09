import { Reveal } from './Reveal';

const OTHER_PROJECTS = [
  {
    title: "Alzheimer's Detection from MRI",
    desc: 'Fine-tuned ResNet-50 on ADNI MRI dataset achieving 89% classification accuracy; custom augmentation reduced overfitting by 15%. Modeled as a virtual neurological-state representation.',
    tech: 'PyTorch, ResNet-50, Transfer Learning',
    href: 'https://github.com/Jin-ix/Alzheimer-s-disease-prediction-from-MRI',
  },
  {
    title: 'Parkinson\'s Detection via Voice',
    desc: 'Stacked ensemble scoring 94% F1 on 20+ acoustic biomarkers, outperforming baselines by 12%. REST API running at sub-200ms latency. Published at NSCETIT 2026.',
    tech: 'Python, scikit-learn, SHAP, FastAPI',
    href: 'https://github.com/Jin-ix/Parkinson-s-Disease-Detection-Using-Voice-Biomarkers',
  },
  {
    title: 'Knee Osteoporosis Classification',
    desc: 'CNN-based automated X-ray screening achieving 91% sensitivity; reduced manual clinical review time by 60%.',
    tech: 'CNN, PyTorch, Clinical Imaging',
    href: 'https://github.com/Jin-ix/Improving-Early-Detection-of-Knee-Osteoporosis',
  },
  {
    title: 'AgroHub — Smart Agriculture',
    desc: 'Crop recommendation engine with 88% accuracy fusing soil NPK sensor data with live weather APIs.',
    tech: 'Python, Streamlit, Predictive Modelling',
    href: 'https://github.com/Jin-ix/AgroHub',
  },
  {
    title: 'Hand Recognition',
    desc: 'Real-time hand gesture recognition system utilizing computer vision for intuitive human-computer interaction.',
    tech: 'Computer Vision, OpenCV, Python',
    href: 'https://github.com/Jin-ix/Hand-Recognition',
  },
  {
    title: 'AI Assisted Matrimony',
    desc: 'AI-driven matchmaking platform leveraging machine learning to intelligently align user profiles and preferences.',
    tech: 'Machine Learning, Web, AI',
    href: 'https://github.com/Jin-ix/Matrimony',
  },
];

const STATS = [
  { value: '92%', label: 'Injury prediction accuracy' },
  { value: '1.2M+', label: 'Biometric data points processed' },
  { value: '<1s', label: 'Inference Latency' },
  { value: 'Live', label: 'Production deployment' },
];

const TAGS = ['YOLOv8', 'Graph Neural Networks', 'Reinforcement Learning', 'SHAP', 'FastAPI', 'Supabase'];

export default function Work() {
  return (
    <section id="work" className="relative z-10 bg-[#0a0a0a] text-white px-5 sm:px-8 md:px-10 py-24 md:py-32">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <p className="text-[14px] uppercase tracking-widest text-white/40 mb-3">Selected Work</p>
          <h2
            className="text-white mb-6"
            style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(32px, 5vw, 48px)', lineHeight: 1.15 }}
          >
            PREHAB 2.0 — a digital twin for elite athletes.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-white/70 text-[17px] leading-relaxed max-w-3xl mb-10">
            A production-grade digital twin fusing real-time IMU wearable data, CV-based biomechanical output, and predictive ML scores into a single synchronised physical-to-digital representation. Architected during my AI/ML engineering internship at Meganous Innovations, the platform processes 1.2M+ real-time biometric data points and surfaces SHAP-based clinical explanations in a live dashboard, increasing stakeholder adoption by 35%.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="flex flex-wrap gap-x-12 gap-y-6 mb-10">
            {STATS.map((s) => (
              <div key={s.label}>
                <div
                  className="text-white"
                  style={{ fontFamily: 'var(--font-heading)', fontSize: '32px', fontWeight: 600 }}
                >
                  {s.value}
                </div>
                <div className="text-[12px] uppercase tracking-wide text-white/40 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="flex flex-wrap gap-2 mb-10">
            {TAGS.map((t) => (
              <span
                key={t}
                className="text-[13px] border border-white/20 bg-white/5 text-white/80 rounded-full px-4 py-1.5"
              >
                {t}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <a
            href="https://github.com/Jin-ix/Player-Digital-Twin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border border-white/20 bg-white/10 hover:bg-white/20 text-white rounded-full text-[14px] px-6 py-2.5 transition-colors"
          >
            View Source on GitHub
          </a>
        </Reveal>

        <div className="h-px bg-white/10 my-20" />

        <Reveal>
          <p className="text-[14px] uppercase tracking-widest text-white/40 mb-8">Research & Technical Projects</p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {OTHER_PROJECTS.map((p, i) => (
            <Reveal key={p.title} width="100%" delay={0.1 * (i % 3)}>
              <div
                className="group flex flex-col justify-between block border border-white/10 bg-white/[0.02] rounded-2xl p-6 hover:bg-white/[0.04] hover:border-white/30 transition-all duration-300 h-full"
              >
                <div>
                  <h3 className="text-white text-[18px] mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                    {p.title}
                  </h3>
                  <p className="text-white/60 text-[14px] leading-relaxed mb-6">{p.desc}</p>
                </div>
                <div>
                  <p className="text-[12px] text-white/40 uppercase tracking-widest mb-4">{p.tech}</p>
                  <div className="flex flex-wrap gap-2">
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white rounded-md text-[12px] px-3 py-1.5 transition-colors"
                    >
                      GitHub Source
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
