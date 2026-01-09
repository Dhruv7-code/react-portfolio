import React from 'react'
import { useState } from 'react'
import { ChevronDown, Star } from 'lucide-react'
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiMongodb, SiPython, SiMysql, SiScikitlearn, SiNumpy, SiPandas } from 'react-icons/si'
import { PERSONAL_INFO } from '../../utils/constants'
import { scrollToSection } from '../../hooks/useScrollSpy'
import FadeIn from '../animations/FadeIn'
import RadialGradientBackground from '../backgrounds/RadialGradientBackground.jsx'


function Hero() {
  return (
    <section className='relative min-h-screen flex items-center overflow-hidden bg-black'>
      <RadialGradientBackground variant="hero" />

      {/*Content container*/}
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          {/*Left column content */}
          <div className='text-left'>
            <FadeIn delay={0}>
              <div className='inline-flex items-center gap-2.5 px-4 py-3 mb-8 bg-linear-to-r from-primary/10 via-primary/15 to-primary/20 border border-primary/20 rounded-full'>
                <Star className='w-4 h-4 text-white fill-white' />
                <span className='text-xs md:text-sm text-white tracking-[1.2px]'>
                  {PERSONAL_INFO.title} | Based in {PERSONAL_INFO.location}
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={100}>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-6 leading-tight'>
                {PERSONAL_INFO.name}
              </h1>
            </FadeIn>

            <FadeIn delay={200}>
              <p className='text-lg text-white/70 max-w-137.5 mb-8'>
                {PERSONAL_INFO.tagline}
              </p>
            </FadeIn>

            <FadeIn delay={300}>
              <button
                onClick={() => scrollToSection('contact')}
                className='inline-flex items-center gap-0 mb-12 group'
              >
                <div className='relative z-10 bg-white text-[#212121] rounded-[17px] px-7 py-3 font-medium border border-white'>
                  Get In Touch
                </div>
              </button>
            </FadeIn>
          </div>

          {/*Right column - image*/}
          <FadeIn delay={200}>
            <div className='relative'>
              <div className='relative overflow-hidden rounded-2xl aspect-4/5 max-w-125 ml-auto group'>
                <div className='absolute inset-0 rounded-2xl overflow-hidden'>
                  <div className='absolute -inset-0.5 bg-linear-to-r from-primary/20 via-primary/10 to-primary animate-slow rounded-2xl'></div>
                </div>

                {/* Image Container */}
                <div className='relative rounded-2xl overflow-hidden m-px h-[calc(100%-2px)]'>
                  <img
                    src="/images/marcus.jpg"
                    alt="Dhruv"
                    className="w-full h-full object-cover" />
                </div>

                {/* Technology logos */}
                <div className='absolute bottom-6 left-6 z-20'>
                  <FadeIn delay={500}>
                    <div className="flex items-center gap-4  bg-black/40 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3">
                      <div className='w-6 h-6 flex items-center hover:scale-110 transition-transform duration-300'>
                        <SiHtml5 className='w-full h-full text-primary' />
                      </div>

                      <div className='w-6 h-6 flex items-center hover:scale-110 transition-transform duration-300'>
                        <SiCss3 className='w-full h-full text-primary' />
                      </div>

                      <div className='w-6 h-6 flex items-center hover:scale-110 transition-transform duration-300'>
                        <SiJavascript className='w-full h-full text-primary' />
                      </div>

                      <div className='w-6 h-6 flex items-center hover:scale-110 transition-transform duration-300'>
                        <SiTailwindcss className='w-full h-full text-primary' />
                      </div>

                      <div className='w-6 h-6 flex items-center hover:scale-110 transition-transform duration-300'>
                        <SiMongodb className='w-full h-full text-primary' />
                      </div>

                      <div className='w-6 h-6 flex items-center hover:scale-110 transition-transform duration-300'>
                        <SiPython className='w-full h-full text-primary' />
                      </div>

                      <div className='w-6 h-6 flex items-center hover:scale-110 transition-transform duration-300'>
                        <SiMysql className='w-full h-full text-primary' />
                      </div>

                      <div className='w-6 h-6 flex items-center hover:scale-110 transition-transform duration-300'>
                        <SiScikitlearn className='w-full h-full text-primary' />
                      </div>

                      <div className='w-6 h-6 flex items-center hover:scale-110 transition-transform duration-300'>
                        <SiNumpy className='w-full h-full text-primary' />
                      </div>

                      <div className='w-6 h-6 flex items-center hover:scale-110 transition-transform duration-300'>
                        <SiPandas className='w-full h-full text-primary' />
                      </div>

                    </div>
                  </FadeIn>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}



export default Hero