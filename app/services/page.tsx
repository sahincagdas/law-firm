
"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';

const Services: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const services = [
        {
            id: 'corporate',
            title: 'Şirketler & Ticaret Hukuku',
            shortDesc: 'İşletmenizin hukuki altyapısını güçlendiriyoruz.',
            fullDesc: 'Şirket kuruluşu, birleşme ve devralmalar, sözleşme yönetimi ve kurumsal yönetim ilkeleri konularında kapsamlı danışmanlık sağlıyoruz. Ticari risklerinizi minimize ederken büyüme hedeflerinize odaklanmanıza yardımcı oluyoruz.',
            icon: 'business',
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop",
            features: ['Şirket Kuruluş İşlemleri', 'Sözleşme Hazırlama & İnceleme', 'Genel Kurul Danışmanlığı', 'Yabancı Sermayeli Şirketler']
        },
        {
            id: 'family',
            title: 'Aile & Boşanma Hukuku',
            shortDesc: 'En hassas süreçlerinizde uzman ve şefkatli yaklaşım.',
            fullDesc: 'Boşanma, velayet, nafaka, mal rejimi ve miras hukuku süreçlerinde hem hukuki haklarınızı koruyor hem de sürecin duygusal yükünü hafifletmeye çalışıyoruz. Uzlaşmacı ancak kararlı bir savunma sunuyoruz.',
            icon: 'family_restroom',
            image: "https://images.unsplash.com/photo-1633613286991-611fe299c4be?q=80&w=2000&auto=format&fit=crop",
            features: ['Anlaşmalı & Çekişmeli Boşanma', 'Velayet & Nafaka Davaları', 'Mal Rejimi Tasfiyesi', 'Miras Paylaşımı & Vasiyetname']
        },
        {
            id: 'real-estate',
            title: 'Gayrimenkul & İnşaat Hukuku',
            shortDesc: 'Mülkiyet haklarınız ve inşaat projeleriniz güvence altında.',
            fullDesc: 'Tapu iptal ve tescil davaları, kiralama süreçleri, kat karşılığı inşaat sözleşmeleri ve kentsel dönüşüm mevzuatı alanlarında derinlemesine uzmanlık sunuyoruz. Gayrimenkul yatırımlarınızı yasal güvencelerle koruyoruz.',
            icon: 'domain',
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop",
            features: ['Tapu İptal & Tescil', 'Kira Hukuku & Tahliye', 'Kat Karşılığı İnşaat', 'Kentsel Dönüşüm Danışmanlığı']
        },
        {
            id: 'labor',
            title: 'İş & Sosyal Güvenlik Hukuku',
            shortDesc: 'Çalışan ve işveren arasındaki dengeli çözüm ortağınız.',
            fullDesc: 'İş sözleşmelerinin düzenlenmesi, işe iade davaları, kıdem ve ihbar tazminatı süreçleri ile iş kazalarından doğan uyuşmazlıklarda profesyonel temsil sağlıyoruz. Hem önleyici danışmanlık hem de dava takibi sunuyoruz.',
            icon: 'groups',
            image: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&w=2000&auto=format&fit=crop",
            features: ['İş Sözleşmesi Yönetimi', 'Tazminat Davaları', 'İşe İade Süreçleri', 'İş Sağlığı & Güvenliği']
        },
        {
            id: 'criminal',
            title: 'Ceza Hukuku',
            shortDesc: 'Adil yargılanma hakkınızın kararlı savunucusu.',
            fullDesc: 'Soruşturma ve kovuşturma evrelerinde müvekkillerimizin savunma haklarını en üst düzeyde temsil ediyoruz. Ağır ceza ve asliye ceza mahkemelerinde, her detayı titizlikle inceleyerek stratejik savunma planları oluşturuyoruz.',
            icon: 'gavel',
            image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2000&auto=format&fit=crop",
            features: ['Soruşturma Evresi Temsili', 'Ağır Ceza Davaları', 'Bilişim Suçları', 'Ceza Genel ve Özel Hükümler']
        },
        {
            id: 'enforcement',
            title: 'İcra & İflas Hukuku',
            shortDesc: 'Alacakların tahsili ve finansal yapılandırmada hız ve verimlilik.',
            fullDesc: 'İcra takipleri, borca itiraz süreçleri, alacak tahsili ve konkordato süreçlerinde profesyonel çözümler sunuyoruz. Alacaklı veya borçlu konumundaki müvekkillerimizin yasal haklarını en hızlı şekilde koruyoruz.',
            icon: 'account_balance',
            image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2000&auto=format&fit=crop",
            features: ['İlamsız İcra Takibi', 'İhtiyati Haciz Kararları', 'Borç Tasfiyesi & Protokol', 'Menfi Tespit Davaları']
        }
    ];

    const serviceStructuredData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Legal Services",
        "provider": {
            "@type": "LegalService",
            "name": "Av. Dilan Köremezli Hukuk Bürosu",
            "url": "https://dilankoremezli.com/"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Legal Services",
            "itemListElement": services.map((s) => ({
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": s.title,
                    "description": s.shortDesc
                }
            }))
        }
    };

    return (
        <div className="bg-surface-light min-h-screen pt-32 pb-24 animate-in fade-in duration-700">
            <script
                id="ld-json-services"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceStructuredData) }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-20">
                    <span className="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent text-xs font-bold tracking-widest uppercase mb-4">
                        Uzmanlık Alanlarımız
                    </span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-6">
                        Kapsamlı Hukuki<br />Çözümler
                    </h1>
                    <p className="text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
                        Her dava benzersizdir ve özel ilgi gerektirir. Uzman ekibimizle, hukukun çeşitli alanlarında size özel stratejiler geliştiriyoruz.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {services.map((service, idx) => (
                        <div
                            key={service.id}
                            className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col"
                        >
                            {/* Image Section */}
                            <div className="h-64 overflow-hidden relative">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/0 transition-colors duration-500" />
                                <div className="absolute top-6 left-6 w-16 h-16 rounded-2xl bg-white/95 backdrop-blur shadow-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-3xl">{service.icon}</span>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-2xl font-serif font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-secondary leading-relaxed mb-6 flex-grow">
                                    {service.fullDesc}
                                </p>

                                <div className="space-y-3 mb-8">
                                    {service.features.map((feature, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <span className="material-symbols-outlined text-accent text-lg">check_circle</span>
                                            <span className="text-sm font-semibold text-gray-600">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center w-full py-4 border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-all group/btn"
                                >
                                    Danışmanlık Al
                                    <span className="material-symbols-outlined ml-2 text-lg transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <section className="mt-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-primary rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
                        {/* Decorative Background */}
                        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                            <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent rounded-full blur-[100px]" />
                            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-burgundy rounded-full blur-[100px]" />
                        </div>

                        <div className="relative z-10 max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8">
                                Hukuki Sorunlarınız İçin<br />Profesyonel Destek
                            </h2>
                            <p className="text-gray-300 text-lg mb-12 font-light leading-relaxed">
                                Ekibimiz size en iyi hukuki danışmanlığı sunmak için hazır. Randevu oluşturmak veya soru sormak için bizimle iletişime geçebilirsiniz.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/contact"
                                    className="px-12 py-5 bg-accent text-primary font-bold rounded-xl hover:bg-white hover:scale-105 transition-all shadow-lg shadow-accent/20"
                                >
                                    Bize Ulaşın
                                </Link>
                                <a
                                    href="tel:02125551234"
                                    className="px-12 py-5 bg-white/5 backdrop-blur text-white font-bold rounded-xl border border-white/20 hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                                >
                                    <span className="material-symbols-outlined">call</span>
                                    (212) 555 12 34
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
