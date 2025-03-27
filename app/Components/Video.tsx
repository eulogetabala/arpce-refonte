"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Download, MapPin, Book, Radio, AlertCircle } from "lucide-react";
import Image from "next/image";

// Types
interface Video {
  id: number;
  title: string;
  thumbnail: string;
  category: string;
  duration: string;
  videoUrl?: string;
}

interface Resource {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  link: string;
}

const videos: Video[] = [
  {
    id: 1,
    title: "Le FASUCE un outil efficace au service du développement",
    thumbnail: "/assets/images/11.jpg",
    category: "Développement",
    duration: "3:45",
    videoUrl: "https://example.com/video1.mp4",
  },
  {
    id: 2,
    title: "Qualité de service des opérateurs télécoms",
    thumbnail: "/assets/images/6.jpg",
    category: "Télécommunications",
    duration: "4:20",
    videoUrl: "https://example.com/video2.mp4",
  },
  {
    id: 3,
    title: "La fibre optique au Congo",
    thumbnail: "/assets/images/9.jpg",
    category: "Infrastructure",
    duration: "5:15",
    videoUrl: "https://example.com/video3.mp4",
  }
];

const resources: Resource[] = [
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

const VideoCard: React.FC<{ video: Video; isHovered: boolean; onHover: (id: number | null) => void }> = ({
  video,
  isHovered,
  onHover,
}) => {
  const [error, setError] = useState<boolean>(false);

  const handleImageError = () => {
    setError(true);
  };

  const handlePlayClick = () => {
    if (video.videoUrl) {
      // Ici, vous pouvez implémenter la logique de lecture de la vidéo
      console.log(`Playing video: ${video.videoUrl}`);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative group"
      onMouseEnter={() => onHover(video.id)}
      onMouseLeave={() => onHover(null)}
    >
      <div className="relative aspect-video rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />
        {error ? (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <AlertCircle className="text-gray-400" size={32} />
          </div>
        ) : (
          <Image
            src={video.thumbnail}
            alt={video.title}
            fill
            className="object-cover"
            onError={handleImageError}
            priority
          />
        )}
        <motion.div
          initial={false}
          animate={{
            scale: isHovered ? 1.2 : 1,
            opacity: isHovered ? 1 : 0.8,
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handlePlayClick}
            className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center cursor-pointer"
          >
            <Play size={32} className="text-white ml-1" />
          </motion.button>
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <span className="text-sm text-white/80 bg-red-600 px-3 py-1 rounded-full">
            {video.category}
          </span>
          <h3 className="text-xl font-semibold text-white mt-2 line-clamp-2">
            {video.title}
          </h3>
          <span className="text-sm text-white/80 mt-1 block">
            {video.duration}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const ResourceCard: React.FC<{ resource: Resource }> = ({ resource }) => {
  return (
    <motion.a
      href={resource.link}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all group"
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
      <motion.div
        whileHover={{ x: 5 }}
        className="flex items-center text-red-700 font-medium"
      >
        <Download size={20} className="mr-2" />
        Télécharger
      </motion.div>
    </motion.a>
  );
};

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
          {videos.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              isHovered={hoveredVideo === video.id}
              onHover={setHoveredVideo}
            />
          ))}
        </div>

        {/* Section Ressources */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Videotheque; 