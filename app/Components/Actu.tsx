"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const actualites = [
  {
    id: 1,
    title: "Réunion de travail entre l'ARPCE et les armateurs de Pointe noire et du kouillou",
    image: "/assets/images/4.jpg",
    date: "15 Mars 2024",
  },
  {
    id: 2,
    title: "Qualité des services mobiles : L'ARPCE constate des avancées significatives chez Airtel",
    image: "/assets/images/6.jpg",
    date: "12 Mars 2024",
  },
  {
    id: 3,
    title: "Audit de la qualité des services des opérateurs : MTN Congo présente à l'ARPCE son plan d'amélioration",
    image: "/assets/images/11.jpg",
    date: "10 Mars 2024",
  },
  {
    id: 4,
    title: "Communications électroniques : Le FASUCE effectue l'évaluation semestrielle des projets de l'exercice 2024-2025",
    image: "/assets/images/4.jpg",
    date: "08 Mars 2024",
  },
  {
    id: 5,
    title: "Éduquer pour mieux consommer : immersion des élèves au centre d'écoute de l'ARPCE",
    image: "/assets/images/6.jpg",
    date: "05 Mars 2024",
  },
];

const grandsDossiers = [
  {
    id: 1,
    title: "Fibre Optique",
    image: "/assets/images/9.jpg",
    description: "Développement de l'infrastructure numérique au Congo",
  },
  {
    id: 2,
    title: "Numérotation",
    image: "/assets/images/10.jpg",
    description: "Gestion et attribution des ressources en numérotation",
  },
  {
    id: 3,
    title: "Point d'échange internet",
    image: "/assets/images/11.jpg",
    description: "Interconnexion des réseaux au Congo",
  },
];

function Actu() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Actualités */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-between items-center mb-8"
          >
            <h2 className="text-4xl font-bold text-gray-800">ACTUALITÉS</h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-2 bg-red-700 text-white rounded-lg hover:bg-red-800 transition"
            >
              Plus d&apos;actualités
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {actualites.map((actu, index) => (
              <motion.div
                key={actu.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={actu.image}
                    alt={actu.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-red-700 mb-2">{actu.date}</p>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-red-700 transition-colors">
                    {actu.title}
                  </h3>
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="text-red-700 font-medium flex items-center gap-2"
                  >
                    Lire la suite
                    <ArrowRight size={16} />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section Grands Dossiers */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-800 mb-8"
          >
            GRANDS DOSSIERS
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {grandsDossiers.map((dossier, index) => (
              <motion.div
                key={dossier.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative h-80 group cursor-pointer overflow-hidden rounded-xl"
              >
                <Image
                  src={dossier.image}
                  alt={dossier.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="absolute bottom-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{dossier.title}</h3>
                    <p className="text-white/80 mb-4">{dossier.description}</p>
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2 text-white font-medium"
                    >
                      En savoir plus
                      <ArrowRight size={16} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Actu;
