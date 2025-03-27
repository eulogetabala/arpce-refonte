"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Search } from 'lucide-react'

function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  const topMenuItems = [
    { name: 'Actualités', href: '/actualites' },
    { name: 'Textes fondamentaux', href: '/textes-fondamentaux' },
    { name: 'Textes de référence', href: '/textes-reference' },
    { name: 'Cartographie', href: '/cartographie' },
    { name: 'Contacts', href: '/contacts' },
  ]

  const mainMenuItems = [
    { name: 'Accueil', href: '/', icon: '🏠' },
    { 
      name: 'À propos', 
      href: '/a-propos',
      subItems: [
        { name: 'Notre Histoire', href: '/a-propos/histoire' },
        { name: 'Notre Mission', href: '/a-propos/mission' },
        { name: 'Notre Équipe', href: '/a-propos/equipe' },
      ]
    },
    { 
      name: 'Opérateurs et Prestataires', 
      href: '/operateurs',
      subItems: [
        { name: 'Télécommunications', href: '/operateurs/telecom' },
        { name: 'Services Postaux', href: '/operateurs/postal' },
      ]
    },
    { 
      name: 'Observatoires', 
      href: '/observatoires',
      subItems: [
        { name: 'Marché Télécom', href: '/observatoires/telecom' },
        { name: 'Services Postaux', href: '/observatoires/postal' },
      ]
    },
    { 
      name: 'Publications', 
      href: '/publications',
      subItems: [
        { name: 'Rapports', href: '/publications/rapports' },
        { name: 'Études', href: '/publications/etudes' },
      ]
    },
    { 
      name: 'Médiathèque', 
      href: '/mediatheque',
      subItems: [
        { name: 'Photos', href: '/mediatheque/photos' },
        { name: 'Vidéos', href: '/mediatheque/videos' },
      ]
    },
    { name: 'Culture du numérique', href: '/culture-numerique' },
  ]

  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  return (
    <nav className="w-full">
      {/* Top Bar */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-24">
            {/* Logo et titre */}
            <motion.div 
              className="flex items-center space-x-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/">
                <Image
                  src="/assets/images/logo_arpce.png"
                  alt="ARPCE Logo"
                  width={80}
                  height={80}
                  className="h-16 w-auto"
                  priority
                />
              </Link>
              <div className="text-left">
                <h1 className="text-[#8AB73A] text-sm font-medium">AGENCE DE RÉGULATION DES POSTES ET</h1>
                <h1 className="text-[#8AB73A] text-sm font-medium">DES COMMUNICATIONS ÉLECTRONIQUES</h1>
                <h2 className="text-[#B84530] text-sm">République du Congo</h2>
              </div>
            </motion.div>

            {/* Menu supérieur */}
            <div className="sm:hidden md:flex items-center">
              <div className="flex space-x-6">
                {topMenuItems.map((item) => (
                  <motion.div
                    key={item.name}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Link
                      href={item.href}
                      className="text-white bg-[#B84530] px-4 py-2 text-sm font-medium rounded hover:bg-[#a03d2b] transition-colors"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bouton menu mobile */}
            <div className="md:hidden">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-gray-700 hover:text-[#B84530]"
              >
                <span className="sr-only">Menu</span>
                {!isOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Menu principal */}
      <div className="bg-[#4A4A4A]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="sm:hidden md:flex justify-between items-center h-12">
            {/* Items du menu principal */}
            <div className="flex space-x-6">
              {mainMenuItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <Link
                    href={item.href}
                    className="text-white hover:text-[#8AB73A] text-sm font-medium flex items-center space-x-1"
                  >
                    <span>{item.name}</span>
                    {item.subItems && (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>

                  {/* Sous-menu */}
                  {item.subItems && hoveredItem === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50"
                    >
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            {/* Bouton de recherche */}
            <button className="text-white hover:text-[#8AB73A]">
              <Search size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 py-2 space-y-1">
              {/* Menu supérieur en mobile */}
              {topMenuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-[#B84530] hover:bg-gray-50"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Séparateur */}
              <div className="border-t border-gray-200 my-2"></div>

              {/* Menu principal en mobile */}
              {mainMenuItems.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.subItems && (
                    <div className="pl-6">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default NavBar
