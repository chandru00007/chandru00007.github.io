import { motion } from "framer-motion";
import { owner, interests } from "./data";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
});

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#050816] px-6">
      <div className="max-w-5xl mx-auto">
        <motion.p
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-[#aaa6c3] text-sm uppercase tracking-widest"
        >
          Who am I?
        </motion.p>
        <motion.h2
          variants={fadeUp(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-white font-black text-4xl sm:text-5xl mt-2"
        >
          About Me.
        </motion.h2>

        <div className="mt-12 grid md:grid-cols-2 gap-10 items-start">
          {/* Bio card */}
          <motion.div
            variants={fadeUp(0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-[#151030] rounded-2xl p-8 border border-white/10 hover:border-[#915EFF]/40 transition-colors"
          >
            <div className="text-5xl mb-4">👨‍💻</div>
            <p className="text-[#aaa6c3] leading-relaxed whitespace-pre-line text-base">
              {owner.bio}
            </p>
            <a
              href={owner.github}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-block text-[#915EFF] font-semibold hover:underline"
            >
              See my projects →
            </a>
          </motion.div>

          {/* Interests grid */}
          <motion.div
            variants={fadeUp(0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h3 className="text-white font-bold text-xl mb-6">
              What I&apos;m Interested In
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {interests.map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ scale: 1.04 }}
                  className="flex flex-col items-center gap-2 bg-[#151030] rounded-xl p-4 border border-white/10 hover:border-[#915EFF]/40 transition-colors cursor-default"
                >
                  <span className="text-3xl">{item.icon}</span>
                  <span className="text-[#aaa6c3] text-xs text-center font-medium">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Quick stats */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { value: "∞",    label: "Things to learn" },
                { value: "100%", label: "Passion for code" },
                { value: "🌍",   label: "World explorer" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center bg-[#151030] rounded-xl p-4 border border-white/10"
                >
                  <div className="text-2xl font-black text-[#915EFF]">{stat.value}</div>
                  <div className="text-[#aaa6c3] text-xs mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
