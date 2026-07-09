import { Reveal } from './Reveal';

const PUBLICATIONS = [
  {
    num: '01',
    topic: 'Explainable AI for Sports Injury Risk Assessment: A SHAP-Based Analysis Reducing Black Box Mistrust in Clinical Sports Medicine.',
    venue: 'ICASET 2026, Bangalore \u2014 Published',
  },
  {
    num: '02',
    topic: 'Stacked Ensemble Framework for Parkinson\'s Detection: State-of-the-Art Results on Voice Biomarkers via Multi-Model Stacking.',
    venue: 'NSCETIT 2026 \u2014 Published',
  },
  {
    num: '03',
    topic: 'A Machine Learning Framework for Injury Risk Prediction from Wearable and Training Load Data.',
    venue: 'ICSDSA 2026, Chennai \u2014 Springer (Accepted)',
  },
  {
    num: '04',
    topic: 'Evaluating ML and Deep Learning for Heart Failure Risk Assessment (93% accuracy).',
    venue: 'AIST 2025 \u2014 Springer (Under Review)',
  },
];

export default function Research() {
  return (
    <section id="research" className="relative z-10 bg-[#ffffff] text-black px-5 sm:px-8 md:px-10 py-24 md:py-32">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <p className="text-[14px] uppercase tracking-widest text-black/40 mb-3">Peer-Reviewed Publications</p>
          <h2
            className="mb-6 text-black"
            style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(32px, 5vw, 48px)', lineHeight: 1.15 }}
          >
            Advancing Explainable AI and Digital Twins.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-black/70 text-[17px] leading-relaxed max-w-3xl mb-12">
            My research focuses on bridging the gap between high-accuracy complex models (like Deep Ensembles and GNNs) and clinical usability. I believe an AI system earns trust in high-stakes environments like healthcare and sports medicine only when it can transparently explain its reasoning.
          </p>
        </Reveal>

        <div>
          {PUBLICATIONS.map((pub, i) => (
            <Reveal key={pub.num} width="100%" delay={0.1 * i}>
              <div
                className="grid grid-cols-[3rem_1fr] sm:grid-cols-[4rem_1fr] gap-4 py-8 border-t border-black/10 last:border-b group hover:bg-black/[0.02] transition-colors duration-300"
              >
                <span className="text-black/30 text-[18px] pt-1 font-medium" style={{ fontFamily: 'var(--font-heading)' }}>
                  {pub.num}
                </span>
                <div>
                  <p className="text-[17px] sm:text-[19px] leading-relaxed text-black font-medium group-hover:text-black/80 transition-colors">
                    {pub.topic}
                  </p>
                  <p className="text-[14px] text-black/50 mt-3 uppercase tracking-wider">{pub.venue}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
