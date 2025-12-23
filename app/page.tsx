
"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    const staggerContainer = {
        animate: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const practices = [
        {
            title: "Aile Hukuku",
            desc: "Boşanma, velayet ve nafaka davalarında hassas ve çözüm odaklı yaklaşım.",
            image: "https://images.unsplash.com/photo-1633613286991-611fe299c4be?q=80&w=800&auto=format&fit=crop",
            link: "/services"
        },
        {
            title: "Şirketler Hukuku",
            desc: "Kurumsal yapılandırma, birleşme ve devralmalar için stratejik danışmanlık.",
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
            link: "/services"
        },
        {
            title: "Gayrimenkul",
            desc: "Tapu iptali, kira tespit ve tahliye davalarında uzman temsil.",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
            link: "/services"
        },
        {
            title: "Ceza Hukuku",
            desc: "Soruşturma ve kovuşturma aşamalarında etkin savunma stratejileri.",
            image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop",
            link: "/services"
        }
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Background Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop"
                        alt="Law Office"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80 mix-blend-multiply" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left w-full pt-20">
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={staggerContainer}
                        className="max-w-3xl"
                    >
                        <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-semibold mb-8">
                            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                            İstanbul Barosu'na Kayıtlı
                        </motion.div>

                        <motion.h1 variants={fadeInUp} className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.1] mb-8 tracking-tight">
                            Adalet İçin <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-amber-200">
                                Güçlü Temsil
                            </span>
                        </motion.h1>

                        <motion.p variants={fadeInUp} className="text-lg sm:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl font-light">
                            Hukuki süreçlerinizde deneyim, şeffaflık ve sonuç odaklı yaklaşımımızla yanınızdayız. Geleceğinizi güvence altına almak için profesyonel destek alın.
                        </motion.p>

                        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center px-8 py-4 bg-accent text-primary font-bold rounded-xl shadow-lg shadow-accent/20 hover:bg-white hover:scale-[1.02] transition-all"
                            >
                                Ücretsiz Danışma Alın
                                <span className="material-symbols-outlined ml-2">arrow_forward</span>
                            </Link>
                            <Link
                                href="/services"
                                className="inline-flex items-center justify-center px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all"
                            >
                                Hizmetlerimiz
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
                >
                    <span className="text-[10px] uppercase tracking-widest">Keşfet</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
                </motion.div>
            </section>

            {/* Stats Section */}
            <section className="py-12 bg-white border-b border-gray-100 relative z-20 -mt-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                        {[
                            { label: "Yıllık Tecrübe", value: "15+" },
                            { label: "Başarılı Dava", value: "1000+" },
                            { label: "Müvekkil Memnuniyeti", value: "%98" },
                            { label: "Uzmanlık Alanı", value: "8+" }
                        ].map((stat, idx) => (
                            <div key={idx} className="text-center group cursor-default">
                                <h4 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-1 group-hover:text-accent transition-colors">{stat.value}</h4>
                                <p className="text-secondary text-xs uppercase tracking-widest font-semibold">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-24 bg-surface-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2 relative">
                            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop"
                                    alt="Avukat Dilan Köremezli"
                                    className="w-full h-auto object-cover"
                                />
                                {/* Decorative Elements */}
                                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent/20 rounded-full blur-2xl z-0" />
                                <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl z-0" />
                            </div>
                            {/* Experience Badge */}
                            <div className="absolute -bottom-8 -right-8 z-20 bg-white p-6 rounded-2xl shadow-xl border border-gray-50 hidden md:block">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-serif font-bold text-xl">15</div>
                                    <div className="text-sm">
                                        <p className="font-bold text-primary">Yıllık</p>
                                        <p className="text-secondary">Profesyonel Deneyim</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <h2 className="text-accent font-bold uppercase tracking-widest text-sm mb-4">Hakkımızda</h2>
                            <h3 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6 leading-tight">
                                Haklarınız İçin <br /> Mücadele Ediyoruz
                            </h3>
                            <p className="text-secondary text-lg leading-relaxed mb-6">
                                Av. Dilan Köremezli Hukuk Bürosu olarak, karmaşık hukuki süreçlerde müvekkillerimize yol gösteriyor,
                                en zorlu davalarda bile çözüm odaklı stratejiler geliştiriyoruz.
                            </p>
                            <div className="space-y-4 mb-8">
                                {[
                                    "Kişiye özel, şeffaf hukuki danışmanlık",
                                    "7/24 ulaşılabilir iletişim kanalları",
                                    "Güncel mevzuata hakim uzman kadro"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-accent">check_circle</span>
                                        <span className="text-primary font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <Link
                                href="/contact"
                                className="text-primary font-bold border-b-2 border-accent pb-1 hover:text-accent transition-colors inline-flex items-center gap-2"
                            >
                                Daha Fazla Bilgi Al <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Preview */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-accent font-bold uppercase tracking-widest text-sm mb-4">Uzmanlık Alanlarımız</h2>
                        <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">Sizlere Hangi Konularda<br />Yardımcı Olabiliriz?</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {practices.map((practice, index) => (
                            <Link href={practice.link} key={index} className="group relative rounded-2xl overflow-hidden shadow-lg h-[400px]">
                                <img
                                    src={practice.image}
                                    alt={practice.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/50 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
                                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="w-12 h-1 bg-accent mb-4 transition-all group-hover:w-20" />
                                    <h4 className="text-xl font-serif font-bold text-white mb-2">{practice.title}</h4>
                                    <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 leading-relaxed">
                                        {practice.desc}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link
                            href="/services"
                            className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-all"
                        >
                            Tüm Hizmetleri Görüntüle
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
