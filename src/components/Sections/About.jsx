import React from 'react'
import { useState } from 'react'
import { Download, Code2, Sparkles, Code, Sparkle, Puzzle } from 'lucide-react'
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiMongodb, SiPython, SiMysql, SiScikitlearn, SiNumpy, SiPandas } from 'react-icons/si'
import { PERSONAL_INFO } from '../../utils/constants'
import FadeIn from '../animations/FadeIn'
import RadialGradientBackground from '../backgrounds/RadialGradientBackground.jsx';

const About = () => {
    const skills = [
        { name: "Python", icon: SiPython, color: "#3776AB" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
        { name: "CSS3", icon: SiCss3, color: "#1572B6" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "MySQL", icon: SiMysql, color: "#4479A1" },
        { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
        { name: "NumPy", icon: SiNumpy, color: "#013243" },
        { name: "Pandas", icon: SiPandas, color: "#150458" },
    ]

    return <section id="about" className="relative py-20 bg-black overflow-hidden">
        <RadialGradientBackground variant="about" />

        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            {/*Main grid */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20'>
                {/*Left column - content */}
                <div className='flex flex-col gap-12'>
                    <div className='flex flex-col gap-8'>
                        <FadeIn delay={60}>
                            <div className='inline-flex items-center gap-2.5 px-5 py-2.5 border border-primary/30 bg-primary/10 rounded-full w-fit'>
                                <Code2 className='w-4 h-4 text-primary' />
                                <span className='text-sm text-primary font-medium'>Software Developer
                                </span>
                                <Sparkles className='w-4 h-4 text-primary' />
                            </div>
                        </FadeIn>

                        <FadeIn delay={100}>
                            <h2 className='text-4xl lg:-5xl font-normal text-white leading-tight'>
                                Engineering with clarity and intent
                            </h2>
                        </FadeIn>

                        <FadeIn delay={200}>
                            <div className='flex flex-col gap-4'>
                                {PERSONAL_INFO.bio.map((paragraph, index) => (
                                    <p key={index} className='text-base text-white/70 leading-relaxed'>
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </FadeIn>

                        <FadeIn delay={300}>
                            <button
                                onClick={() => window.open(PERSONAL_INFO.resume, '_blank')}
                                className='inline-flex items-center gap-3 bg-white hover:bg-white/90 text-black rounded-full px-8 py-4 text-base font-medium transition-all duration-300 w-fit group'
                            >
                                <Download className='w-5 h-5 group-hover:translate-y-0.5 transition-transform duration-300 ' />
                                Download Resume
                            </button>
                        </FadeIn>
                    </div>

                </div>
                {/*Right column - info grid */}
                <FadeIn delay={200}>
                    <div className='grid grid-cols-2 gap-4'>
                        <div className='col-span-2 relative group'>
                            <div className='absolute inset-0 bg-linear-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300'>
                            </div>
                            <div className='relative bg-white/5 border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300'>
                                <div className='flex items-start gap-4'>
                                    <div className='p-3 bg-primary/10 rounded-xl'>
                                        <Code2 className='w-6 h-6 text-primary' />
                                    </div>
                                </div>
                                <div className='flex-1'>
                                    <h3 className='text-lg font-semibold text-white mb-2'> 
                                        Expertise
                                    </h3>
                                    <p className='text-sm text-white/70 leading-relaxed'>
                                        A software developer developing core skills in frontend, data, and intelligent systems.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='relative group'>
                            <div className='absolute inset-0 bg-linear from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300'>
                            </div>
                            <div className='relative bg-white/5 border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 h-full'>
                                <div className='p-3 bg-primary/10 rounded-xl w-fit mb-4'>
                                    <Sparkle className='w-5 h-5 text-primary' />
                                </div>
                                <h3 className='text-lg font-semibold text-white mb-2'>
                                    Clean Code
                                </h3>
                                <p className='text-sm text-white/70 leading-relaxed'>
                                    Writing maintainable, efficient, and well-documented code that stands the test of time.
                                </p>
                            </div>
                        </div>

                        <div className='relative group'>
                            <div className='absolute inset-0 bg-linear from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300'>
                            </div>
                            <div className='relative bg-white/5 border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 h-full'>
                                <div className='p-3 bg-primary/10 rounded-xl w-fit mb-4'>
                                    <Download className='w-5 h-5 text-primary' />
                                </div>
                                <h3 className='text-lg font-semibold text-white mb-2'>
                                    Performance
                                </h3>
                                <p className='text-sm text-white/70 leading-relaxed'>
                                    Attempting to reach the maximum speed and efficiency in every project I undertake.
                                </p>
                            </div>
                        </div>

                        <div className='col-span-2 relative group'>
                            <div className='absolute inset-0 bg-linear from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300'>
                            </div>
                            <div className='relative bg-white/5 border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 h-full'>
                                <div className='p-3 bg-primary/10 rounded-xl w-fit mb-4'>
                                    <Puzzle className='w-5 h-5 text-primary' />
                                </div>
                                <h3 className='text-lg font-semibold text-white mb-2'>
                                    Problem Solving
                                </h3>
                                <p className='text-sm text-white/70 leading-relaxed'>
                                    Approaching problems with structured thinking, debugging discipline, and iterative refinement.
                                </p>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </div>

            {/*Skills grid section */}
            <FadeIn delay={500}>
                <div className='flex flex-col items-center gap-8'>
                    <div className='text-center'>
                        <h3 className='text-2xl font-normal text-white mb-2'>
                            Tech Stack and Expertise
                        </h3>
                        <p className='text-sm text-white/60'>
                            Technologies I work with:
                        </p>
                    </div>

                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full max-w-4xl'>
                        {skills.map((skill, index) => (
                            <div key={index} 
                            className='group relative bg-white/5 hover:bg-white/10 border-white/10 hover:border-primary/50 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:scale-105'
                            >
                                <skill.icon className='text-3xl text-primary' />
                                <div className='text-sm text-white/80 font-medium text-center'>
                                    {skill.name}
                                </div>

                                {/*Hover glow effect*/}
                                <div className='absolute inset-0 bg-linear-to-br from-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-primary/10 rounded-2xl transition-all duration-300'>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </FadeIn>
        </div>
    

    </section>
}

export default About