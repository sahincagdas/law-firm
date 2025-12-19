
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
      title: 'Ofisimiz',
      value: 'Adalet Caddesi No: 123, Kat: 4, Daire: 400, Hukuk Plaza, Ankara'
    },
    {
      icon: 'call',
      title: 'Telefon Numarası',
      value: '(312) 456-7890'
    },
    {
      icon: 'mail',
      title: 'E-posta Adresi',
      value: 'iletisim@lexingtonhukuk.com'
    },
    {
      icon: 'schedule',
      title: 'Çalışma Saatleri',
      value: 'Pzt - Cum: 09:00 - 17:00'
    }
  ];

  return (
    <div className="bg-background-light py-16 lg:py-24 animate-in fade-in duration-1000">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
          <h1 className="text-4xl lg:text-7xl font-serif font-bold text-primary mb-6 leading-tight">Bizimle İletişime Geçin</h1>
          <p className="text-secondary text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
            Yardımcı olmak için buradayız. Gizli bir görüşme için bize ulaşın ve ihtiyacınız olan profesyonel rehberliği sağlayalım.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Info Side */}
          <div className="space-y-12">
            <div className="space-y-8">
              {contactInfo.map((info, idx) => (
                <div key={idx} className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-md border border-gray-100 flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    <span className="material-symbols-outlined text-2xl">{info.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-primary font-serif font-bold text-xl mb-1">{info.value}</h3>
                    <p className="text-secondary text-xs font-bold uppercase tracking-widest">{info.title}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="relative h-80 rounded-3xl overflow-hidden shadow-2xl border-8 border-white group">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCssvOETs-yEdjw_EdegyuDppO8HHsyZlinZVtR9jKfpNfUFw7PBfb5SqnYwKLVl9CCaf8f9H8Z4BmhSw3raA7cDJuCsF2FZzEnM5ne6sCDkwNZ6XbR4DDTVuSW4XX9c81zSf8yacvdjK2KFrzdVtCF0TylmaaPj8SzzreVq--EYF3yyux1W6x2DvOwAyMFVAGUmrM7Kw-N5RVTgsjYTLE0EzRVeDNrKKoqOXInza_Zr4wqm8S3O2cRqGZXSZOt8K2rIYToX5ygjmlo" 
                alt="Map" 
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/20 pointer-events-none group-hover:opacity-0 transition-opacity"></div>
              <div className="absolute bottom-6 left-6 bg-white py-3 px-6 rounded-xl shadow-lg flex items-center gap-3">
                <span className="material-symbols-outlined text-accent">location_on</span>
                <span className="text-sm font-bold text-primary uppercase">Navigasyonda Aç</span>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-2xl border-t-8 border-accent">
            <h3 className="text-3xl font-serif font-bold text-primary mb-8">Bize Mesaj Gönderin</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-secondary block">Ad Soyad</label>
                <input 
                  required
                  type="text" 
                  placeholder="Adınız Soyadınız"
                  className="w-full h-14 px-4 rounded-xl bg-gray-50 border-gray-200 focus:ring-accent focus:border-accent transition-all"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-secondary block">E-posta Adresi</label>
                  <input 
                    required
                    type="email" 
                    placeholder="ornek@email.com"
                    className="w-full h-14 px-4 rounded-xl bg-gray-50 border-gray-200 focus:ring-accent focus:border-accent transition-all"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-secondary block">Telefon Numarası</label>
                  <input 
                    required
                    type="tel" 
                    placeholder="(5XX) XXX XX XX"
                    className="w-full h-14 px-4 rounded-xl bg-gray-50 border-gray-200 focus:ring-accent focus:border-accent transition-all"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-secondary block">Kısa Vaka Özeti</label>
                <textarea 
                  required
                  rows={5}
                  placeholder="Lütfen davanızla ilgili kısa bir özet belirtiniz..."
                  className="w-full p-4 rounded-xl bg-gray-50 border-gray-200 focus:ring-accent focus:border-accent transition-all resize-none"
                  value={formData.summary}
                  onChange={e => setFormData({...formData, summary: e.target.value})}
                />
                <div className="flex justify-between items-center text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">
                  <span>Maksimum 500 karakter</span>
                  <span>{formData.summary.length}/500</span>
                </div>
              </div>
              <button 
                type="submit"
                className="w-full h-16 bg-primary text-white font-bold rounded-xl shadow-xl shadow-primary/20 hover:bg-accent hover:text-primary hover:scale-[1.02] transition-all flex items-center justify-center gap-3 uppercase tracking-widest"
              >
                Talebi Gönder
                <span className="material-symbols-outlined text-sm">send</span>
              </button>
              <p className="text-[10px] text-center text-gray-500 leading-relaxed max-w-sm mx-auto">
                Bu formun gönderilmesi bir avukat-müvekkil ilişkisi oluşturmaz. Lütfen yanıt için 1-2 iş günü bekleyiniz.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
