import { Reveal } from './Reveal';

const SKILLS = [
  { category: 'Digital Twin', tech: 'Real-time sensor fusion, IoT data pipelines, state synchronisation, virtual model design' },
  { category: 'Computer Vision', tech: 'OpenCV, MediaPipe, pose estimation, image preprocessing, feature extraction, CNN classification' },
  { category: 'ML / Deep Learning', tech: 'scikit-learn, XGBoost, LightGBM, TensorFlow, PyTorch, Keras, CNN, ResNet, Stacked Ensembles' },
  { category: 'Explainable AI', tech: 'SHAP, LIME, interpretable model development, clinical and sports risk reporting frameworks' },
  { category: 'MLOps & Infra', tech: 'MLflow, Weights & Biases, Docker, FastAPI, GitHub Actions CI/CD, AWS EC2, AWS S3, Supabase' },
  { category: 'Programming', tech: 'Python (Expert), MATLAB, R, SQL, C++, Bash, Git, Streamlit, Tableau, Power BI' },
];

const LEADERSHIP = [
  { role: 'Department President', org: 'St. Joseph\'s College (Autonomous)' },
  { role: 'Chief Technology Officer', org: 'Innovation & Entrepreneurship Development Cell' },
  { role: 'Founder, FOSS Ambassador Club', org: 'Trained 200+ students on open-source technologies' },
];

const CERTS = [
  'Google Data Analytics Professional',
  'Meta Data Analyst Professional',
  'IBM Machine Learning with Python',
  'Microsoft Power BI Data Analyst (PL-300)',
  'Python and Statistics for Financial Analysis',
];

export default function About() {
  return (
    <section id="about" className="relative z-10 bg-[#0a0a0a] text-white px-5 sm:px-8 md:px-10 py-24 md:py-32">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <p className="text-[14px] uppercase tracking-widest text-white/40 mb-3">Background & Skills</p>
          <h2
            className="text-white mb-12"
            style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(32px, 5vw, 48px)', lineHeight: 1.15 }}
          >
            Engineering intelligence with explainability.
          </h2>
        </Reveal>

        <div className="mb-20">
          <Reveal>
            <p className="text-[12px] uppercase tracking-widest text-white/40 mb-8">Experience & Education</p>
          </Reveal>
          
          <div className="relative border-l border-white/20 ml-3 md:ml-6 space-y-12">
            <Reveal delay={0.1}>
              <div className="relative pl-8 md:pl-12">
                <div className="absolute w-3 h-3 bg-emerald-400 rounded-full -left-[6.5px] top-1.5 shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
                <h3 className="text-white text-[20px] font-medium" style={{ fontFamily: 'var(--font-heading)' }}>
                  AI/ML Engineer Intern
                </h3>
                <p className="text-emerald-400/80 text-[14px] mt-1 font-mono">Meganous Innovations Pvt. Ltd. | 2025 – 2026</p>
                <ul className="text-white/70 text-[15px] leading-relaxed mt-4 space-y-2 list-disc list-inside marker:text-emerald-500/50">
                  <li>Architected <strong>PREHAB 2.0</strong>, a production-grade athlete digital twin platform.</li>
                  <li>Built an automated ETL data pipeline for high-frequency wearable sensor streams.</li>
                  <li>Engineered the computer vision module enabling 30 FPS real-time pose estimation.</li>
                  <li>Reduced model inference latency by <strong>25%</strong> via Bayesian hyperparameter tuning.</li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="relative pl-8 md:pl-12">
                <div className="absolute w-3 h-3 bg-white/40 rounded-full -left-[6.5px] top-1.5" />
                <h3 className="text-white text-[20px] font-medium" style={{ fontFamily: 'var(--font-heading)' }}>
                  Integrated M.Sc., Computer Science (Data Science)
                </h3>
                <p className="text-white/50 text-[14px] mt-1 font-mono">St. Joseph's College (Autonomous), MG University | 2021 – 2026</p>
                <ul className="text-white/70 text-[15px] leading-relaxed mt-4 space-y-2 list-disc list-inside marker:text-white/30">
                  <li>Specialized in Machine Learning, Computer Vision, and Statistical Modelling.</li>
                  <li>Capstone dissertation graded and externally examined as a production-deployed AI-driven digital twin platform.</li>
                  <li>Active college athlete (Football, Badminton) balancing rigorous academics with sports.</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mb-20">
          <Reveal>
            <p className="text-[12px] uppercase tracking-widest text-white/40 mb-6">Technical Arsenal</p>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {SKILLS.map((skill, i) => (
              <Reveal key={skill.category} width="100%" delay={0.05 * (i % 2)}>
                <div className="border border-white/10 bg-white/[0.02] p-5 rounded-xl h-full">
                  <h4 className="text-white text-[16px] mb-2 font-medium" style={{ fontFamily: 'var(--font-heading)' }}>
                    {skill.category}
                  </h4>
                  <p className="text-white/50 text-[13px] leading-relaxed">{skill.tech}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-12">
          <Reveal delay={0.1}>
            <div>
              <p className="text-[12px] uppercase tracking-widest text-white/40 mb-5">Leadership</p>
              <div className="flex flex-col gap-5">
                {LEADERSHIP.map((l) => (
                  <div key={l.role}>
                    <div className="text-white text-[16px] font-medium" style={{ fontFamily: 'var(--font-heading)' }}>
                      {l.role}
                    </div>
                    <div className="text-white/50 text-[14px] mt-1">{l.org}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div>
              <p className="text-[12px] uppercase tracking-widest text-white/40 mb-5">Certifications</p>
              <div className="flex flex-wrap gap-2">
                {CERTS.map((c) => (
                  <span key={c} className="text-[13px] border border-white/15 bg-white/5 text-white/70 rounded-full px-4 py-1.5">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
