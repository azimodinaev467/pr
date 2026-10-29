import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

// Assets from src/assets
import tgLogo from '../assets/Group.png'
import tomaszPhoto from '../assets/ff90103dbcd4d855294602cde88bc3407371f5e0.png'
import rectBg from '../assets/Rectangle 70.png'
import atIcon from '../assets/at.svg'
import githubIcon from '../assets/github.svg'
import linkedinIcon from '../assets/linkedin.svg'

export default function Sk() {
  const { t, i18n } = useTranslation()

  // Theme state: dark / light
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark'
  })

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  const toggleTheme = () => {
    setIsDark((prev) => !prev)
  }

  const currentLang = i18n.language || 'en'

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  return (
    <div className={`w-full min-h-screen ${isDark ? 'bg-[#09090b]' : 'bg-black'} text-white flex flex-col justify-between selection:bg-gray-800 selection:text-white relative overflow-x-hidden font-['Montserrat',sans-serif] transition-colors duration-300`}>
      {/* Top Section with angled diagonal split */}
      <div className={`relative w-full flex-1 flex flex-col justify-between overflow-hidden ${isDark ? 'bg-[#09090b]' : 'bg-black'} min-h-[580px] transition-colors duration-300`}>
        {/* Angled Background (Left Side) */}
        <div 
          className={`diagonal-bg absolute inset-0 w-full h-full ${
            isDark ? 'bg-[#141416]' : 'bg-[#d7d7d7]'
          } z-0 pointer-events-none transition-colors duration-300`} 
        />

        {/* Navigation Bar */}
        <div className="relative z-20 w-full px-8 sm:px-12 md:px-20 pt-8 pb-4 flex items-center justify-between">
          {/* Logo on the left */}
          <div className="flex items-center cursor-pointer">
            <img 
              src={tgLogo} 
              alt="TG Logo" 
              className={`h-8 sm:h-9 md:h-10 w-auto object-contain transition-all duration-300 ${
                isDark ? 'filter invert' : ''
              }`} 
            />
          </div>

          {/* Nav items on the right */}
          <div className="flex items-center space-x-3 sm:space-x-6 md:space-x-8">
            <p className="text-sm font-semibold text-white tracking-wide cursor-pointer hover:text-gray-300 transition-colors hidden sm:block">
              {t('nav.about')}
            </p>
            <p className="text-sm font-semibold text-white tracking-wide cursor-pointer hover:text-gray-300 transition-colors hidden sm:block">
              {t('nav.skills')}
            </p>
            <p className="text-sm font-semibold text-white tracking-wide cursor-pointer hover:text-gray-300 transition-colors hidden sm:block">
              {t('nav.portfolio')}
            </p>

            {/* Language Switcher RU / EN */}
            <div className="flex items-center space-x-1 bg-white/10 rounded-full p-1 border border-white/20 select-none">
              <div 
                onClick={() => changeLanguage('ru')}
                className={`px-2.5 py-1 rounded-full cursor-pointer transition-all ${
                  currentLang === 'ru'
                    ? 'bg-white text-black shadow'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <p className="font-bold text-[11px] leading-none uppercase">RU</p>
              </div>
              <div 
                onClick={() => changeLanguage('en')}
                className={`px-2.5 py-1 rounded-full cursor-pointer transition-all ${
                  currentLang === 'en'
                    ? 'bg-white text-black shadow'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <p className="font-bold text-[11px] leading-none uppercase">EN</p>
              </div>
            </div>

            <div 
              onClick={toggleTheme}
              className="flex items-center space-x-1.5 bg-white/10 hover:bg-white/20 transition-all rounded-full px-3 py-1.5 cursor-pointer border border-white/20 select-none"
              title={isDark ? t('theme.light') : t('theme.dark')}
            >
              {isDark ? (
                <div className="flex items-center space-x-1.5 text-yellow-300">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                    <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4.22 2.78a1 1 0 011.414 0l.707.707a1 1 0 11-1.414 1.414l-.707-.707a1 1 0 010-1.414zm3.78 6.22a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm-2.78 4.22a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM10 16a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm-4.22-1.78a1 1 0 01-1.414 0l-.707-.707a1 1 0 111.414-1.414l.707.707a1 1 0 010 1.414zM2 10a1 1 0 011-1h1a1 1 0 110 2H3a1 1 0 01-1-1zm2.78-4.22a1 1 0 010-1.414l.707-.707a1 1 0 111.414 1.414l-.707.707a1 1 0 01-1.414 0zM10 6a4 4 0 100 8 4 4 0 000-8z" />
                  </svg>
                  <p className="text-[11px] font-bold uppercase">{t('theme.light')}</p>
                </div>
              ) : (
                <div className="flex items-center space-x-1.5 text-blue-200">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                  <p className="text-[11px] font-bold uppercase">{t('theme.dark')}</p>
                </div>
              )}
            </div>

            <div className="bg-white hover:bg-gray-200 transition-all rounded-full px-5 sm:px-6 py-2.5 cursor-pointer shadow-md">
              <p className="text-xs font-bold text-black uppercase tracking-wider">
                {t('nav.contact')}
              </p>
            </div>
          </div>
        </div>

        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-8 sm:px-12 md:px-20 flex-1 flex flex-col md:flex-row items-center justify-between pt-4 md:pt-8">
          <div className="w-full md:w-1/2 flex flex-col justify-center py-6 md:py-12 z-10">
            <p className={`text-xl sm:text-2xl font-bold tracking-tight mb-2 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-black'
            }`}>
              {t('hero.greeting')}
            </p>
            <h1 className={`text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-2 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-black'
            }`}>
              {t('hero.name')}
            </h1>
            <p className={`text-sm sm:text-base font-semibold tracking-wide mb-8 transition-colors duration-300 ${
              isDark ? 'text-[#9e9ea3]' : 'text-[#8e8e8e]'
            }`}>
              {t('hero.role')}
            </p>

            <div className="flex items-center space-x-4">
              <div className={`relative w-11 h-11 sm:w-12 sm:h-12 rounded-md flex items-center justify-center cursor-pointer hover:scale-105 transition-all duration-300 ${
                isDark 
                  ? 'bg-[#222226] border border-white/10 shadow-[2px_2px_6px_rgba(0,0,0,0.7)]'
                  : 'bg-[#c9c9c9] shadow-[2px_2px_5px_rgba(0,0,0,0.25),-1px_-1px_3px_rgba(255,255,255,0.7)]'
              }`}>
                <img 
                  src={rectBg} 
                  alt="" 
                  className={`absolute inset-0 w-full h-full object-contain pointer-events-none ${
                    isDark ? 'opacity-10 invert' : 'opacity-25'
                  }`} 
                />
                <img 
                  src={atIcon} 
                  alt="Email" 
                  className={`w-5 h-5 object-contain relative z-10 transition-all duration-300 ${
                    isDark ? 'filter invert' : ''
                  }`} 
                />
              </div>

              <div className={`relative w-11 h-11 sm:w-12 sm:h-12 rounded-md flex items-center justify-center cursor-pointer hover:scale-105 transition-all duration-300 ${
                isDark 
                  ? 'bg-[#222226] border border-white/10 shadow-[2px_2px_6px_rgba(0,0,0,0.7)]'
                  : 'bg-[#c9c9c9] shadow-[2px_2px_5px_rgba(0,0,0,0.25),-1px_-1px_3px_rgba(255,255,255,0.7)]'
              }`}>
                <img 
                  src={rectBg} 
                  alt="" 
                  className={`absolute inset-0 w-full h-full object-contain pointer-events-none ${
                    isDark ? 'opacity-10 invert' : 'opacity-25'
                  }`} 
                />
                <img 
                  src={githubIcon} 
                  alt="GitHub" 
                  className={`w-5 h-5 object-contain relative z-10 transition-all duration-300 ${
                    isDark ? 'filter invert' : ''
                  }`} 
                />
              </div>

              <div className={`relative w-11 h-11 sm:w-12 sm:h-12 rounded-md flex items-center justify-center cursor-pointer hover:scale-105 transition-all duration-300 ${
                isDark 
                  ? 'bg-[#222226] border border-white/10 shadow-[2px_2px_6px_rgba(0,0,0,0.7)]'
                  : 'bg-[#c9c9c9] shadow-[2px_2px_5px_rgba(0,0,0,0.25),-1px_-1px_3px_rgba(255,255,255,0.7)]'
              }`}>
                <img 
                  src={rectBg} 
                  alt="" 
                  className={`absolute inset-0 w-full h-full object-contain pointer-events-none ${
                    isDark ? 'opacity-10 invert' : 'opacity-25'
                  }`} 
                />
                <img 
                  src={linkedinIcon} 
                  alt="LinkedIn" 
                  className={`w-5 h-5 object-contain relative z-10 transition-all duration-300 ${
                    isDark ? 'filter invert' : ''
                  }`} 
                />
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col items-center justify-end relative self-end mt-6 md:mt-0">
            <div className="relative flex flex-col items-center">
              <img 
                src={tomaszPhoto} 
                alt="Tomasz Gajda" 
                className="max-h-[460px] sm:max-h-[500px] md:max-h-[540px] w-auto object-contain select-none" 
              />
              
              <div className="absolute right-4 bottom-6 sm:right-8 sm:bottom-10 max-w-[150px] pointer-events-none">
                <p className={`text-[10px] sm:text-[11px] leading-tight font-medium text-center transition-colors duration-300 ${
                  isDark ? 'text-gray-300' : 'text-gray-800'
                }`}>
                  {t('hero.jokeLine1')}<br />
                  {t('hero.jokeLine2')}<br />
                  {t('hero.jokeLine3')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: IT BERRIES Section */}
      <div className={`relative w-full py-9 px-8 sm:px-12 md:px-20 overflow-hidden z-20 border-t transition-colors duration-300 ${
        isDark 
          ? 'bg-[#0f0f12] text-white border-white/10' 
          : 'bg-[#1d1d1d] text-white border-black/30'
      }`}>
        <div className="max-w-[1440px] mx-auto relative flex flex-col md:flex-row items-start md:items-center justify-between">
          {/* Left Text Content */}
          <div className="max-w-3xl z-10 relative">
            <h1 className="text-base sm:text-lg md:text-xl font-bold tracking-[0.25em] text-white uppercase mb-3">
              {t('banner.title')}
            </h1>
            <p className="text-xs sm:text-[13px] leading-relaxed text-[#a3a3a3] mb-6 font-normal">
              {t('banner.text')}
            </p>
            <div className="inline-flex items-center space-x-2 cursor-pointer group">
              <div className="w-[1.5px] h-3.5 bg-white"></div>
              <p className="text-xs font-bold tracking-[0.2em] text-white uppercase group-hover:text-gray-300 transition-colors">
                {t('banner.readMore')}
              </p>
              <div className="w-[1.5px] h-3.5 bg-white"></div>
            </div>
          </div>

          <div className="absolute right-0 -bottom-12 md:right-8 md:-bottom-16 pointer-events-none select-none opacity-20 transform rotate-[-18deg]">
            <div className={`w-56 h-56 sm:w-72 sm:h-72 border-8 sm:border-[12px] rounded-3xl flex items-center justify-center transition-colors duration-300 ${
              isDark ? 'border-[#26262c]' : 'border-[#383838]'
            }`}>
              <p className={`text-8xl sm:text-9xl font-black tracking-tighter transition-colors duration-300 ${
                isDark ? 'text-[#26262c]' : 'text-[#383838]'
              }`}>
                IT
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
