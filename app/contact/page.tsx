
"use client";

import React, { useState } from 'react';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        summary: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Mesajınız gönderildi. En kısa sürede size dönüş yapacağız.');
    };

    const contactInfo = [
        {
            icon: 'location_on',
            title: 'Merkez Ofis',
            value: 'Hukuk Caddesi No: 123, Kat: 1, Beşiktaş, İstanbul 34353',
            desc: 'Merkezi Konum'
        },
        {
            icon: 'call',
            title: 'Telefon',
            value: '0 (212) 555 12 34',
            desc: 'Hafta içi 09:00 - 18:00'
        },
        {
            icon: 'mail',
            title: 'E-posta',
            value: 'iletisim@lexingtonhukuk.com',
            desc: '7/24 Bize Yazabilirsiniz'
        }
    ];

    const contactStructuredData = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "mainEntity": {
            "@type": "LegalService",
            "name": "Av. Dilan Köremezli Hukuk Bürosu",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Hukuk Caddesi No: 123, Kat: 1",
                "addressLocality": "İstanbul",
                "addressRegion": "Beşiktaş",
                "postalCode": "34353",
                "addressCountry": "TR"
            },
            "telephone": "+902125551234",
            "email": "iletisim@lexingtonhukuk.com"
        }
    };

    return (
        <div className="bg-surface-light min-h-screen pt-32 pb-24">
            <script
                id="ld-json-contact"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(contactStructuredData) }}
            />

            {/* Header Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
                <span className="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent text-xs font-bold tracking-widest uppercase mb-4">
                    İletişime Geçin
                </span>
                <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-6">
                    Size Nasıl Yardımcı<br />Olabiliriz?
                </h1>
                <p className="text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
                    Hukuki süreçlerinizde yalnız değilsiniz. Uzman ekibimizle iletişime geçerek haklarınız ve seçenekleriniz hakkında detaylı bilgi alabilirsiniz.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">

                    {/* Contact Cards - Left Side */}
                    <div className="lg:col-span-1 space-y-6">
                        {contactInfo.map((info, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100/50 hover:shadow-md transition-shadow group">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-surface-light rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                        <span className="material-symbols-outlined">{info.icon}</span>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-accent uppercase tracking-wider mb-1">{info.title}</p>
                                        <h3 className="font-serif font-bold text-primary text-lg mb-1 leading-tight">{info.value}</h3>
                                        <p className="text-xs text-gray-400 font-medium">{info.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Minimal Map Preview */}
                        <div className="rounded-2xl overflow-hidden shadow-sm h-48 relative group cursor-pointer border border-gray-100">
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCssvOETs-yEdjw_EdegyuDppO8HHsyZlinZVtR9jKfpNfUFw7PBfb5SqnYwKLVl9CCaf8f9H8Z4BmhSw3raA7cDJuCsF2FZzEnM5ne6sCDkwNZ6XbR4DDTVuSW4XX9c81zSf8yacvdjK2KFrzdVtCF0TylmaaPj8SzzreVq--EYF3yyux1W6x2DvOwAyMFVAGUmrM7Kw-N5RVTgsjYTLE0EzRVeDNrKKoqOXInza_Zr4wqm8S3O2cRqGZXSZOt8K2rIYToX5ygjmlo"
                                alt="Map"
                                className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-lg text-xs font-bold text-primary shadow-sm">
                                Haritada Göster
                            </div>
                        </div>
                    </div>

                    {/* Form Section - Right Side */}
                    <div className="lg:col-span-2">
                        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100">
                            <h3 className="text-2xl font-serif font-bold text-primary mb-8">Hızlı İletişim Formu</h3>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="group">
                                        <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2 block group-focus-within:text-accent transition-colors">Ad Soyad</label>
                                        <input
                                            required
                                            type="text"
                                            className="w-full h-12 bg-surface-light border-b-2 border-transparent border-gray-100 focus:border-accent focus:bg-white focus:outline-none transition-all px-4 rounded-t-lg font-medium text-primary placeholder-gray-300"
                                            placeholder="Adınız Soyadınız"
                                            value={formData.name}
                                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>
                                    <div className="group">
                                        <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2 block group-focus-within:text-accent transition-colors">Telefon</label>
                                        <input
                                            required
                                            type="tel"
                                            className="w-full h-12 bg-surface-light border-b-2 border-transparent border-gray-100 focus:border-accent focus:bg-white focus:outline-none transition-all px-4 rounded-t-lg font-medium text-primary placeholder-gray-300"
                                            placeholder="05XX XXX XX XX"
                                            value={formData.phone}
                                            onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div className="group">
                                    <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2 block group-focus-within:text-accent transition-colors">E-posta Adresi</label>
                                    <input
                                        required
                                        type="email"
                                        className="w-full h-12 bg-surface-light border-b-2 border-transparent border-gray-100 focus:border-accent focus:bg-white focus:outline-none transition-all px-4 rounded-t-lg font-medium text-primary placeholder-gray-300"
                                        placeholder="ornek@mail.com"
                                        value={formData.email}
                                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                                <div className="group">
                                    <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2 block group-focus-within:text-accent transition-colors">Konu / Mesaj</label>
                                    <textarea
                                        required
                                        rows={4}
                                        className="w-full p-4 bg-surface-light border-b-2 border-transparent border-gray-100 focus:border-accent focus:bg-white focus:outline-none transition-all rounded-t-lg font-medium text-primary placeholder-gray-300 resize-none"
                                        placeholder="Hukuki desteğe ihtiyaç duyduğunuz konuyu kısaca özetleyiniz..."
                                        value={formData.summary}
                                        onChange={e => setFormData({ ...formData, summary: e.target.value })}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-accent hover:text-primary hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 uppercase tracking-widest text-sm"
                                >
                                    Talebi Gönder
                                    <span className="material-symbols-outlined text-lg">arrow_forward</span>
                                </button>
                                <p className="text-center text-xs text-gray-400">
                                    Gönderilen bilgiler Gizlilik Politikamız kapsamında korunmaktadır.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
