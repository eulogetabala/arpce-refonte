"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Globe, Clock } from 'lucide-react';
import Image from 'next/image';

const Call = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-red-600 rounded-2xl overflow-hidden shadow-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            {/* Contenu textuel */}
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 lg:p-12"
            >
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Phone className="w-8 h-8 text-yellow-400" />
                  <h2 className="text-3xl md:text-4xl font-bold text-yellow-400">
                    APPEL GRATUIT !
                  </h2>
                </div>

                <h3 className="text-2xl md:text-3xl font-semibold text-white leading-tight">
                  LE CENTRE D&apos;ÉCOUTE<br />DES CONSOMMATEURS
                </h3>

                <div className="text-5xl font-bold text-white flex items-center space-x-2">
                  <span className="text-green-500">50</span>
                  <span>50</span>
                </div>

                <div className="flex items-center space-x-3 text-white">
                  <Clock className="w-6 h-6" />
                  <div>
                    <span className="text-sm uppercase">HORAIRE</span>
                    <p className="text-2xl font-bold">08H À 17H</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 text-white">
                  <Globe className="w-6 h-6" />
                  <a 
                    href="http://linfoduconsommateur.arpce.cg" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm hover:underline"
                  >
                    http://linfoduconsommateur.arpce.cg
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative h-full min-h-[300px] lg:min-h-[400px]"
            >
              <div className="absolute inset-0">
                <Image
                  src="/assets/images/call.jpg"
                  alt="Centre d'écoute ARPCE"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute bottom-0 right-0 p-4">
                <Image
                  src="/assets/images/logo_arpce.png"
                  alt="Logo ARPCE"
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Call;
