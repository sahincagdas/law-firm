
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand & Mission */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-8 h-8 bg-accent rounded text-primary">
                <span className="material-symbols-outlined text-xl">balance</span>
              </div>
              <h3 className="text-xl font-bold font-serif text-white">Lexington Hukuk</h3>
            </div>
            <p className="text-gray-400 mb-8 max-w-sm leading-relaxed">
              Topluluğumuz için erişilebilir, yüksek kaliteli yasal temsil ve basitleştirilmiş hukuk eğitimi sağlamaya adanmıştır.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-accent hover:text-primary transition-all">
                <i className="lucide-linkedin text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-accent hover:text-primary transition-all">
                <i className="lucide-twitter text-lg"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-6 text-accent uppercase text-xs tracking-widest">Gezinti</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-white transition-colors">Anasayfa</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">İletişim</Link></li>
              <li><Link to="/admin" className="hover:text-accent/50 text-[10px] opacity-20">Yönetim Paneli</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-bold mb-6 text-accent uppercase text-xs tracking-widest">İletişim</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex gap-3">
                <span className="material-symbols-outlined text-accent text-lg">location_on</span>
                <span>Hukuk Caddesi No: 123, Kat: 1<br/>Beşiktaş, İstanbul 34353</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-accent text-lg">call</span>
                <span>(212) 555-1234</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-accent text-lg">mail</span>
                <span>iletisim@lexingtonhukuk.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-gray-500">
            <p>© 2024 Lexington Hukuk Bürosu. Tüm Hakları Saklıdır.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent">Gizlilik Politikası</a>
              <a href="#" className="hover:text-accent">Kullanım Koşulları</a>
              <a href="#" className="hover:text-accent">Yasal Uyarı</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
