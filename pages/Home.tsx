
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const practiceAreas = [
    {
      title: 'Şirketler Hukuku',
      desc: 'Kuruluştan uyumluluğa kadar tüm iş ihtiyaçlarınız için kapsamlı yasal çözümler.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5LJ3hyfh0Au8X9t-t8DkqAajBONv7pDr40MSmfy1pVTsVos7fsnDL9Vlnyzx4unikdthsCGmRv016qgFNI2BFjXTHWpI80I3E6cNbZnLWVzcQb8juLAB-IxQdpYxFpq_biDGCK2ovZTRIjOdEoKehD5fPaEZcvrNX00RM2WHy_KH7jJTEwmdb5GZjlR4EXzMb0YAWgCeEYgWbOIKuaQLCAYtJ6lW0gFHs9iehGFpcqLzPT-YkcT3x8knihyeIsX5feog951tSu7kq'
    },
    {
      title: 'Aile Hukuku',
      desc: 'Hassas aile konularını şefkat ve uzmanlıkla yönetiyoruz.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACZf_2iUZL2y6RESDU95iG9kyqxYZM8Y9IqubEFp9cIDB9LhLWQtKePJ3CWlcwtswjTcOmR1oyzjAc3W84St9FfXCkkEvqme-j7wLRLgSJaUjMLKmmSfIL2lMaTegQ7Sfak5OR0Jx0sbNwbPnFR_eOGn8XOsmDmkJaMmYPJBzY9ePBjzf9-4jDYgSHIJP7jC51nozoJnFb5UlJUs6SuM4NcvLWqJvzmN1Ptjamt1HsbewfgehyiRH4HsSlPgzYohniznrJ5IE9M9wG'
    },
    {
      title: 'Gayrimenkul Hukuku',
      desc: 'Konut ve ticari mülk işlemlerinde uzman rehberlik.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwDIMHpPGKiFlCIOHiH8e0frWVoZKvcTH4CsB71Rn2ulUjNUQIV7w1in88bmXMlcmPybCW1rJEZVyNXqZjCxdl_jvJbCO7mX0fkvvbW4aqhbpzqp4DFgIO0bgVg0KnNK6UFEMbYbOalz6_jQ4bYp5qshGas7ubY_MOlxI-cqsAelKgOUFyuHDnw0a_W1gxxle03eG35XgBlyR4acbpZL9vGMLrYhZ_Wtki6ddGhd0cZAV5dmKfn82-nPjPeu4_i2OZnTLA7HfKZ4MV'
    },
    {
      title: 'Dava ve Uyuşmazlık',
      desc: 'Çıkarlarınızı korumak için mahkeme içinde ve dışında stratejik temsil.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6VxMTfkeUKCVf79eLh-xjzNk4TseY0NfUKrCCesMHqWWUoi3HxtosRfx3aVKKjVd8g0GCye0cBe8YsGoUWBDzgySDirA1BE55dBz9ZMMB9fS-9e7-zdgGEm1HugxOV9Sy7fFY6jwMS52--POnKsLGGAwbZS_x1jntkCfYefXbALN6dedcKkeeM-YXCrULQNbyOT0T3JW8EAXuDIDB9cWqPcAIy4shwnRBxnT-ISHil8IJk047rWo58Ra6xsA5AzNm9V2YHBh_bhxm'
    }
  ];

  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative h-[650px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-[10s] hover:scale-110"
          style={{ backgroundImage: `linear-gradient(90deg, #1a2233 0%, rgba(26, 34, 51, 0.8) 50%, rgba(26, 34, 51, 0.4) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuCHY4JJwiRgL1jSmn_kLYNrb1s2jO_Kgl6Q4xzV6TDYM11jipzgyMKn_1KnNwN5R0fIMJqF4-WabGqsAzMm8Meexw91kUYTczsru0_feu_BcdKMBAbNZWNIkSCzD10APhKJhycR_Sz4BOL-q1ZlvOqYiHRNqp4vm9o3YV9CT5A9x00flmjO74iopJDndbNlYX5frVxIaWkwFBcgOIHWOTiFW5i72bqXxf98XUbwiYZyQp-p2W1x-rEEh_GJWjvMyNP1R5nm-_tKBQd5')` }}
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              <span className="text-accent text-xs font-bold uppercase tracking-wider">Öncü Hukuki Danışmanlık</span>
            </div>
            <h2 className="text-white text-5xl md:text-7xl font-serif font-black leading-[1.1] mb-6">
              Haklarınızı Koruyor, <span className="text-accent">Geleceğinizi Güvence Altına</span> Alıyoruz
            </h2>
            <p className="text-gray-300 text-lg md:text-xl font-light mb-10 max-w-2xl leading-relaxed">
              En iyi sonuçlara ulaşmaya adanmış uzman hukuki danışmanlık. Riskler yüksek olduğunda, deneyim her şeydir.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link to="/contact" className="w-full sm:w-auto px-8 py-4 bg-accent text-primary text-lg font-bold rounded-lg shadow-xl shadow-accent/20 hover:bg-white hover:scale-105 transition-all text-center">
                Ücretsiz Danışma Alın
              </Link>
              <div className="flex flex-col">
                <span className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-1">7/24 Ulaşılabilirlik</span>
                <a href="tel:02125551234" className="text-white text-2xl font-serif font-bold hover:text-accent transition-colors">0 (212) 555 12 34</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / About Section */}
      <section className="py-24 bg-surface-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-5/12">
              <div className="relative">
                <div className="aspect-[4/5] bg-cover bg-center rounded-2xl shadow-2xl overflow-hidden" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAH9bjNwsK1F9y6gFcTc37DN9JwVUO_JqisU7Ja8zmYQkRrN4nDaj2xXM1Jr2_xBMQZRvNivgJQYGkS5Xt_4OKDneAzWUqEUG9lhDRgX4rc4UVYnZmyEXGN8re0itH2E-egF7ka1yY-Lh5aoXCMbhPbX4RA_Sh8YzcFH6d465camsCQszufd6s84lGP7vsZ8rwj3BonfZnXjUZ23is5cs4A1sitpz_q_fcTPiwyfUyxpu6p0Hum9KyXxxpaBUIxqckeSZzpwNS5jJru')" }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                  <div className="absolute bottom-8 left-8 text-white">
                    <p className="font-serif text-3xl font-bold">Av. Zeynep Yılmaz</p>
                    <p className="text-accent font-medium tracking-wide uppercase text-sm mt-1">Kurucu Avukat</p>
                  </div>
                </div>
                {/* Float Badge */}
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl flex items-center gap-4 hidden md:flex">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                    <span className="material-symbols-outlined text-3xl">verified</span>
                  </div>
                  <div>
                    <p className="text-primary font-bold text-lg">Top 1% Avukat</p>
                    <p className="text-secondary text-xs">İstanbul Barosu</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-7/12">
              <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-4 block">FİRMA HAKKINDA</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8 leading-tight">Kararlı Savunuculuk, <br />Kişiselleştirilmiş Strateji</h2>
              <div className="w-20 h-1 bg-accent mb-8"></div>
              <p className="text-secondary text-lg leading-relaxed mb-6">
                Genellikle kişisel olmayan yoğunlukla tanımlanan hukuk dünyasında, Dilan Köremezli Bürosu farkını ortaya koyuyor. Her müvekkilin avukatına doğrudan erişimi hak ettiği ilkesi üzerine kurulan ofisimizde, büyük bir firmanın sofistike uzmanlığını butik bir uygulamanın çevikliği ve kişisel adanmışlığı ile sunuyoruz.
              </p>
              <p className="text-secondary text-lg leading-relaxed mb-10">
                Felsefemiz, hukukun derinlemesine anlaşılmasına ve sorun çözmeye yönelik stratejik bir yaklaşıma dayanmaktadır. Geleceğiniz için mümkün olan en iyi sonucu almaya kararlıyız.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                <div>
                  <p className="text-4xl font-serif font-black text-accent mb-1">15+</p>
                  <p className="text-xs font-bold text-primary uppercase tracking-wider">Yıllık Tecrübe</p>
                </div>
                <div>
                  <p className="text-4xl font-serif font-black text-accent mb-1">500+</p>
                  <p className="text-xs font-bold text-primary uppercase tracking-wider">Kazanan Dava</p>
                </div>
                <div className="col-span-2 md:col-span-1">
                  <p className="text-4xl font-serif font-black text-accent mb-1">98%</p>
                  <p className="text-xs font-bold text-primary uppercase tracking-wider">Müvekkil Memnuniyeti</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-4 block">UZMANLIK</span>
            <h2 className="text-4xl font-serif font-bold text-primary mb-6">Temel Faaliyet Alanları</h2>
            <p className="text-secondary text-lg">Kişisel ve profesyonel ihtiyaçlarınızı karşılamak üzere tasarlanmış uzman hukuki hizmetler.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {practiceAreas.map((area, idx) => (
              <div key={idx} className="group cursor-pointer flex flex-col">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-6 shadow-lg">
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/0 transition-colors z-10"></div>
                  <img src={area.image} alt={area.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-serif font-bold text-primary group-hover:text-accent transition-colors">{area.title}</h3>
                  <span className="material-symbols-outlined text-accent transform group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </div>
                <p className="text-secondary text-sm leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
