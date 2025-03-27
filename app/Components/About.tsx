"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 space-y-16">
      {/* 🔴 SECTION - LE MOT DU DIRECTEUR GÉNÉRAL */}
      <motion.div
        className="flex flex-col md:flex-row items-center md:items-start gap-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Texte à gauche */}
        <motion.div
          className="md:w-1/2 space-y-4"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-red-700">LE MOT DU DIRECTEUR GÉNÉRAL</h3>
          <p className="text-gray-700 leading-relaxed">
            À la pointe de notre engagement, la prise en compte de l&apos;intérêt des utilisateurs, 
            que ce soit l&apos;ouverture à la concurrence des marchés ou encore la connectivité pour tous...
          </p>
          <motion.button
            className="px-6 py-2 bg-red-700 text-white rounded-lg hover:bg-red-800 transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            En savoir plus
          </motion.button>
        </motion.div>

        {/* Image à droite */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Image
            src="/assets/images/dg-3.jpg"
            alt="Directeur Général"
            width={600}
            height={400}
            className="w-full h-auto rounded-lg shadow-lg"
            priority
          />
        </motion.div>
      </motion.div>

      {/* 🟢 SECTION - NOTRE VISION */}
      <motion.div
        className="bg-green-700 text-white py-12 px-6 text-center rounded-lg shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        whileHover={{ scale: 1.02 }}
      >
        <h3 className="text-2xl font-bold">NOTRE VISION</h3>
        <p className="mt-4 text-lg leading-relaxed max-w-3xl mx-auto">
          Faire entrer le Congo dans le Top 5 des pays africains leaders des Postes et Communications Électroniques.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
