import { motion } from "framer-motion";
import { skills } from "./data";

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#0d0b1f] px-6">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[#aaa6c3] text-sm uppercase tracking-widest"
        >
          My Toolkit
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-white font-black text-4xl sm:text-5xl mt-2"
        >
          Tech Stack.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-[#aaa6c3] max-w-lg"
        >
          Always expanding — here&apos;s what I work with regularly and experiment with on
          weekends.
        </motion.p>

        <div className="mt-12 flex flex-wrap gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
              whileHover={{ scale: 1.1, y: -4 }}
              className="flex items-center gap-2 px-5 py-3 rounded-full border border-white/10 bg-[#151030] hover:border-[#915EFF]/60 transition-colors cursor-default"
            >
              <span
                className="w-3 h-3 rounded-full flex-shrink-0"
                style={{ background: skill.color }}
              />
              <span className="text-[#aaa6c3] text-sm font-medium">{skill.name}</span>
            </motion.div>
          ))}
        </div>

        {/* "Always learning" banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 p-6 bg-gradient-to-r from-[#915EFF]/20 to-[#151030] rounded-2xl border border-[#915EFF]/20"
        >
          <p className="text-[#dfd9ff] font-semibold text-lg">
            🚀 &nbsp;"Every week I pick up something new."
          </p>
          <p className="text-[#aaa6c3] text-sm mt-2">
            Currently exploring: WebAssembly, edge computing, and AI-powered developer tools.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
