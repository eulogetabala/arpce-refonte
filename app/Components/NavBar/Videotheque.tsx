"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Download, MapPin, Book, Radio } from "lucide-react";

const videos = [
  {
    id: 1,
    title: "Le FASUCE un outil efficace au service du développement",
    thumbnail: "/assets/images/1.jpg",
    category: "Développement",
    duration: "3:45",
  },
  {
    id: 2,
    title: "Qualité de service des opérateurs télécoms",
    thumbnail: "/assets/images/2.jpg",
    category: "Télécommunications",
    duration: "4:20",
  },
  {
    id: 3,
    title: "La fibre optique au Congo",
    thumbnail: "/assets/images/3.jpg",
    category: "Infrastructure",
    duration: "5:15",
  }
];

const resources = [
  {
    id: 1,
    title: "Zones de Couverture Réseaux",
    description: "Consultez la carte interactive des réseaux de télécommunications",
    icon: MapPin,
    color: "bg-green-600",
    link: "#",
  },
  {
    id: 2,
    title: "Livre Blanc",
    description: "Des postes, des télécommunications et de l'économie numérique",
    icon: Book,
    color: "bg-red-700",
    link: "#",
  },
  {
    id: 3,
    title: "Qualité de Service",
    description: "Rapports sur la qualité des réseaux mobiles",
    icon: Radio,
    color: "bg-blue-600",
    link: "#",
  }
];

function Videotheque() {
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null);

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">VIDÉOTHÈQUE</h2>
          <p className="text-gray-600 text-lg">
            Découvrez nos contenus multimédias et ressources documentaires
          </p>
        </motion.div>

        {/* Section Vidéos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
              onMouseEnter={() => setHoveredVideo(video.id)}
              onMouseLeave={() => setHoveredVideo(null)}
            >
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                <motion.div
                  initial={false}
                  animate={{
                    scale: hoveredVideo === video.id ? 1.2 : 1,
                    opacity: hoveredVideo === video.id ? 1 : 0.8,
                  }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center cursor-pointer">
                    <Play size={32} className="text-white ml-1" />
                  </div>
                </motion.div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-sm text-white/80 bg-red-600 px-3 py-1 rounded-full">
                    {video.category}
                  </span>
                  <h3 className="text-xl font-semibold text-white mt-2">
                    {video.title}
                  </h3>
                  <span className="text-sm text-white/80 mt-1 block">
                    {video.duration}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section Ressources */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <motion.a
              key={resource.id}
              href={resource.link}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className={`${resource.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                <resource.icon className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-red-700 transition-colors">
                {resource.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {resource.description}
              </p>
              <div className="flex items-center text-red-700 font-medium">
                <Download size={20} className="mr-2" />
                Télécharger
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Videotheque; 