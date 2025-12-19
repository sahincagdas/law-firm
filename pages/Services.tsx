
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

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
            image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            features: ['Şirket Kuruluş İşlemleri', 'Sözleşme Hazırlama & İnceleme', 'Genel Kurul Danışmanlığı', 'Yabancı Sermayeli Şirketler']
        },
        {
            id: 'family',
            title: 'Aile & Boşanma Hukuku',
            shortDesc: 'En hassas süreçlerinizde uzman ve şefkatli yaklaşım.',
            fullDesc: 'Boşanma, velayet, nafaka, mal rejimi ve miras hukuku süreçlerinde hem hukuki haklarınızı koruyor hem de sürecin duygusal yükünü hafifletmeye çalışıyoruz. Uzlaşmacı ancak kararlı bir savunma sunuyoruz.',
            icon: 'family_restroom',
            image: 'https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            features: ['Anlaşmalı & Çekişmeli Boşanma', 'Velayet & Nafaka Davaları', 'Mal Rejimi Tasfiyesi', 'Miras Paylaşımı & Vasiyetname']
        },
        {
            id: 'real-estate',
            title: 'Gayrimenkul & İnşaat Hukuku',
            shortDesc: 'Mülkiyet haklarınız ve inşaat projeleriniz güvence altında.',
            fullDesc: 'Tapu iptal ve tescil davaları, kiralama süreçleri, kat karşılığı inşaat sözleşmeleri ve kentsel dönüşüm mevzuatı alanlarında derinlemesine uzmanlık sunuyoruz. Gayrimenkul yatırımlarınızı yasal güvencelerle koruyoruz.',
            icon: 'domain',
            image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop',
            features: ['Tapu İptal & Tescil', 'Kira Hukuku & Tahliye', 'Kat Karşılığı İnşaat', 'Kentsel Dönüşüm Danışmanlığı']
        },
        {
            id: 'labor',
            title: 'İş & Sosyal Güvenlik Hukuku',
            shortDesc: 'Çalışan ve işveren arasındaki dengeli çözüm ortağınız.',
            fullDesc: 'İş sözleşmelerinin düzenlenmesi, işe iade davaları, kıdem ve ihbar tazminatı süreçleri ile iş kazalarından doğan uyuşmazlıklarda profesyonel temsil sağlıyoruz. Hem önleyici danışmanlık hem de dava takibi sunuyoruz.',
            icon: 'groups',
            image: 'https://plus.unsplash.com/premium_photo-1664301191471-0dc137e504bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            features: ['İş Sözleşmesi Yönetimi', 'Tazminat Davaları', 'İşe İade Süreçleri', 'İş Sağlığı & Güvenliği']
        },
        {
            id: 'criminal',
            title: 'Ceza Hukuku',
            shortDesc: 'Adil yargılanma hakkınızın kararlı savunucusu.',
            fullDesc: 'Soruşturma ve kovuşturma evrelerinde müvekkillerimizin savunma haklarını en üst düzeyde temsil ediyoruz. Ağır ceza ve asliye ceza mahkemelerinde, her detayı titizlikle inceleyerek stratejik savunma planları oluşturuyoruz.',
            icon: 'gavel',
            image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop',
            features: ['Soruşturma Evresi Temsili', 'Ağır Ceza Davaları', 'Bilişim Suçları', 'Ceza Genel ve Özel Hükümler']
        },
        {
            id: 'enforcement',
            title: 'İcra & İflas Hukuku',
            shortDesc: 'Alacakların tahsili ve finansal yapılandırmada hız ve verimlilik.',
            fullDesc: 'İcra takipleri, borca itiraz süreçleri, alacak tahsili ve konkordato süreçlerinde profesyonel çözümler sunuyoruz. Alacaklı veya borçlu konumundaki müvekkillerimizin yasal haklarını en hızlı şekilde koruyoruz.',
            icon: 'account_balance',
            image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop',
            features: ['İlamsız İcra Takibi', 'İhtiyati Haciz Kararları', 'Borç Tasfiyesi & Protokol', 'Menfi Tespit Davaları']
        }
    ];

    return (
        <div className="bg-background-light animate-in fade-in duration-700">
            



            {/* Detailed Services Grid */}
            <section className="py-16 bg-surface-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">Detaylı Hizmet Alanlarımız</h2>
                        
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {services.map((service) => (
                            <div
                                key={service.id}
                                className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col sm:flex-row"
                            >
                                <div className="sm:w-1/3 relative overflow-hidden h-48 sm:h-auto">
                                    <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/0 transition-colors"></div>
                                    <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-white/95 backdrop-blur flex items-center justify-center text-primary shadow-lg">
                                        <span className="material-symbols-outlined">{service.icon}</span>
                                    </div>
                                </div>
                                <div className="sm:w-2/3 p-5 md:p-6 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-xl font-serif font-bold text-primary mb-2 group-hover:text-accent transition-colors">{service.title}</h3>
                                        <p className="text-secondary text-xs leading-relaxed mb-4 line-clamp-3">{service.fullDesc}</p>
                                        <div className="grid grid-cols-2 gap-2 mb-6">
                                            {service.features.map((feature, i) => (
                                                <div key={i} className="flex items-center gap-2">
                                                    <span className="material-symbols-outlined text-accent text-base">check_circle</span>
                                                    <span className="text-[10px] font-semibold text-gray-500 truncate">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <Link
                                        to="/contact"
                                        className="flex items-center gap-2 text-accent font-bold text-sm hover:translate-x-1 transition-transform"
                                    >
                                        Detaylı Bilgi Al <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
                        <div className="absolute -top-10 -right-10 w-96 h-96 bg-accent opacity-10 rounded-full blur-3xl"></div>
                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Hukuki Sorunlarınız İçin Profesyonel Destek</h2>
                            <p className="text-gray-300 text-lg mb-10 font-light">
                                Ekibimiz size en iyi hukuki danışmanlığı sunmak için hazır. Randevu oluşturmak veya soru sormak için bizimle iletişime geçebilirsiniz.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link to="/contact" className="px-10 py-5 bg-accent text-primary font-bold rounded-xl hover:bg-white transition-all transform hover:-translate-y-1">
                                    Bize Ulaşın
                                </Link>
                                <a href="tel:02125551234" className="px-10 py-5 bg-white/10 text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-all">
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
