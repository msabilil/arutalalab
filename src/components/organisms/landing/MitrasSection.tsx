'use client'
import { Typography, Image } from '@/components'
import { useState, useEffect } from 'react'
import { mitrasApi, type Mitra } from '@/lib/api/mitras'

export default function PartnersSection() {
    const [mitras, setMitras] = useState<Mitra[]>([])
    const [loading, setLoading] = useState(true)

    // ========== VERSI API (COMMENT UNTUK TESTING LOKAL) ==========
    useEffect(() => {
        const fetchMitras = async () => {
            try {
                setLoading(true)
                const data = await mitrasApi.getAll()
                setMitras(data)
            } catch (error) {
                console.error('Error loading mitras:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchMitras()
    }, [])

    // ========== VERSI LOKAL (UNTUK TESTING) ==========
    // useEffect(() => {
    //     // Simulasi data lokal dengan gambar dari folder public
    //     const localMitras = [
    //         { id: 1, mitra_name: 'Logo 1', mitra_logo_url: '/src/logo/arkamaya-.png' },
    //         { id: 2, mitra_name: 'Logo 2', mitra_logo_url: '/src/logo/axiata-digital-lab.png' },
    //         { id: 3, mitra_name: 'Logo 3', mitra_logo_url: '/src/logo/banda-tech-solutions.png' },
    //         { id: 4, mitra_name: 'Logo 4', mitra_logo_url: '/src/logo/ganesha.png' },
    //         { id: 5, mitra_name: 'Logo 5', mitra_logo_url: '/src/logo/garuda-infinity.png' },
    //         { id: 6, mitra_name: 'Logo 6', mitra_logo_url: '/src/logo/jayandra-.png' },
    //         { id: 7, mitra_name: 'Logo 7', mitra_logo_url: '/src/logo/k-.png' },
    //         { id: 8, mitra_name: 'Logo 8', mitra_logo_url: '/src/logo/tujuhsembilan.png' },
    //         { id: 9, mitra_name: 'Logo 9', mitra_logo_url: '/src/logo/add-tix.png' },
    //         { id: 10, mitra_name: 'Logo 10', mitra_logo_url: '/src/logo/assemblr.png' },
    //         { id: 11, mitra_name: 'Logo 11', mitra_logo_url: '/src/logo/cybers-blitz-nusantara.png' },
    //         { id: 12, mitra_name: 'Logo 12', mitra_logo_url: '/src/logo/inova-medika-solusindo.png' },
    //         { id: 13, mitra_name: 'Logo 13', mitra_logo_url: '/src/logo/len.png' },
    //         { id: 14, mitra_name: 'Logo 14', mitra_logo_url: '/src/logo/stmik-mardina-indonesia.png' },
    //         { id: 15, mitra_name: 'Logo 15', mitra_logo_url: '/src/logo/wit.png'},
    //     ]

    //         // Simulasi loading delay
    //     setTimeout(() => {
    //         setMitras(localMitras)
    //         setLoading(false)
    //     }, 500)
    // }, [])

    return (
        <section className="bg-[#ffffff] w-full py-12 px-4 sm:px-6 lg:px-8 lg:py-20">
            {/* Section Header - dalam max-width container */}
            <div className="max-w-xs md:max-w-2xl lg:max-w-5xl 2xl:max-w-7xl mx-auto">
                <div className="mb-12">
                    <Typography
                        as="h2"
                        size="xl"
                        weight="semibold"
                        color="neutral-950"
                        className="text-2xl md:text-3xl lg:text-3xl text-center sm:text-left"
                    >
                        Mitra ArutalaLab
                    </Typography>
                </div>
            </div>

            {/* Partners Logo Container - FULL WIDTH tanpa max-width */}
            <div className="relative overflow-hidden max-w-xs md:max-w-2xl lg:max-w-5xl 2xl:max-w-7xl mx-auto">
                {/* Gradient Overlays */}
                <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white z-1 pointer-events-none"></div>
                <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white z-1 pointer-events-none"></div>
                
                {/* Loading State */}
                {loading ? (
                    <div className="flex items-center justify-center py-12">
                        <Typography
                            as="p"
                            size="base"
                            weight="normal"
                            color="neutral-600"
                        >
                            Memuat mitra...
                        </Typography>
                    </div>
                ) : mitras.length === 0 ? (
                    <div className="flex items-center justify-center py-12">
                        <Typography
                            as="p"
                            size="base"
                            weight="normal"
                            color="neutral-600"
                        >
                            Belum ada mitra tersedia
                        </Typography>
                    </div>
                ) : (
                    /* Scrolling Container */
                    <div className="flex animate-scroll gap-8 sm:gap-12 lg:gap-16">
                        {/* First Set of Logos */}
                        <div className="flex items-center gap-8 sm:gap-12 lg:gap-16">
                            {mitras.map((mitra, index) => (
                                <div
                                    key={`first-${mitra.id || index}`}
                                    className="flex-shrink-0 flex items-center justify-center px-4 sm:px-6 lg:px-8"
                                >
                                    <Image
                                        src={mitra.mitra_logo_url}
                                        alt={mitra.mitra_name}
                                        shape="square"
                                        fit="contain"
                                        className="h-[60px] w-[120px] sm:w-[140px] lg:w-[160px] object-contain filter transition-all duration-300 opacity-120 hover:opacity-100"
                                    />
                                </div>
                            ))}
                        </div>
                        
                        {/* Duplicate Set untuk Seamless Loop */}
                        <div className="flex items-center gap-8 sm:gap-12 lg:gap-16">
                            {mitras.map((mitra, index) => (
                                <div
                                    key={`second-${mitra.id || index}`}
                                    className="flex-shrink-0 flex items-center justify-center px-4 sm:px-6 lg:px-8"
                                >
                                    <Image
                                        src={mitra.mitra_logo_url}
                                        alt={mitra.mitra_name}
                                        shape="square"
                                        fit="contain"
                                        className="h-[60px] w-[120px] sm:w-[140px] lg:w-[160px] object-contain filter transition-all duration-300 opacity-120 hover:opacity-100"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Custom CSS untuk Animation */}
            <style jsx>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                
                .animate-scroll {
                    animation: scroll 50s linear infinite;
                    width: max-content;
                }
                
                .animate-scroll:hover {
                    animation-play-state: paused;
                }
                
                @media (max-width: 640px) {
                    .animate-scroll {
                        animation: scroll 30s linear infinite;
                    }
                }
                
                @media (min-width: 1024px) {
                    .animate-scroll {
                        animation: scroll 20s linear infinite;
                    }
                }
            `}</style>
        </section>
    )
}