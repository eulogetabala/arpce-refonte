"use client";

import { motion } from "framer-motion";
import { Users, Building2, Phone } from "lucide-react";

const cibles = [
  {
    icon: Building2,
    title: "Investisseur Télécoms et/ou Postal",
    description: "Vous avez un projet pour le Congo ? Découvrez les opportunités d'investissement dans les secteurs des Postes et des Communications Électroniques.",
    style: {
      card: "bg-white",
      text: "text-gray-800",
      description: "text-gray-600",
      icon: "bg-red-700",
      iconColor: "text-white",
      button: "bg-red-700 text-white hover:bg-red-800"
    },
    delay: 0,
  },
  {
    icon: Users,
    title: "Opérateur & Acteur du secteur",
    description: "Accédez aux informations essentielles pour les opérateurs et acteurs des Postes et des Communications Électroniques au Congo.",
    style: {
      card: "bg-red-700",
      text: "text-white",
      description: "text-white/90",
      icon: "bg-white",
      iconColor: "text-red-700",
      button: "bg-white text-red-700 hover:bg-gray-100"
    },
    delay: 0.2,
  },
  {
    icon: Phone,
    title: "Usager des services",
    description: "Tout ce que vous devez savoir en tant qu'utilisateur de la Téléphonie, de la Poste et de l'Internet au Congo-Brazzaville.",
    style: {
      card: "bg-green-700",
      text: "text-white",
      description: "text-white/90",
      icon: "bg-white",
      iconColor: "text-green-700",
      button: "bg-white text-green-700 hover:bg-gray-100"
    },
    delay: 0.4,
  },
];

function Cible() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            ACCÈS CIBLÉS
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Sélectionnez votre profil pour accéder aux informations qui vous concernent
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {cibles.map((cible, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: cible.delay }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className={`rounded-2xl shadow-xl overflow-hidden group ${cible.style.card}`}
            >
              <div className="p-8 h-full flex flex-col">
                <div className="mb-6">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 ${cible.style.icon} rounded-full flex items-center justify-center shadow-lg`}
                  >
                    <cible.icon size={32} className={cible.style.iconColor} />
                  </motion.div>
                </div>
                <h3 className={`text-xl font-bold ${cible.style.text} mb-4`}>
                  {cible.title}
                </h3>
                <p className={`${cible.style.description} mb-6 flex-grow`}>
                  {cible.description}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`inline-flex items-center px-4 py-2 rounded-lg font-medium text-sm group ${cible.style.button}`}
                >
                  En savoir plus
                  <svg
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Cible;
