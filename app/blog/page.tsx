
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BlogPost } from '../../types';
import { getBlogPosts } from '../../services/blogService';

const Blog: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState('Tümü');
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const categories = ['Tümü', 'Aile Hukuku', 'Şirketler Hukuku', 'Gayrimenkul', 'Dava Süreçleri'];

    useEffect(() => {
        const fetchPosts = async () => {
            const data = await getBlogPosts();
            setPosts(data);
        };
        fetchPosts();
    }, []);

    const filteredPosts = activeCategory === 'Tümü'
        ? posts
        : posts.filter(p => p.category === activeCategory);

    const blogStructuredData = {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "Dilan Köremezli Hukuk Bürosu Blog",
        "description": "Güncel hukuki makaleler, yasal değişiklikler ve uzman rehberliği.",
        "url": "https://dilankoremezli.com/blog",
        "publisher": {
            "@type": "Organization",
            "name": "Dilan Köremezli Hukuk Bürosu",
            "logo": {
                "@type": "ImageObject",
                "url": "https://dilankoremezli.com/logo.png"
            }
        }
    };

    return (
        <div className="bg-background-light py-12 lg:py-20 animate-in slide-in-from-bottom-4 duration-700">
            <script
                id="ld-json-blog"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(blogStructuredData) }}
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-4 block">YASAL BİLGİ BANKASI</span>
                    <h1 className="text-4xl sm:text-6xl font-serif font-bold text-primary mb-6 leading-tight">
                        Hukuki İçgörüler & <span className="text-accent underline decoration-primary decoration-4 underline-offset-8">Analizler</span>
                    </h1>
                    <p className="text-secondary text-lg sm:text-xl font-light max-w-2xl mx-auto">
                        Karmaşık hukuki sorunların, mevzuat güncellemelerinin ve uzman rehberliğinin herkes için anlaşılır, sadeleştirilmiş açıklamaları.
                    </p>
                </div>

                {/* Search & Filter */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-16">
                    <div className="flex flex-col gap-6">
                        <div className="relative">
                            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">search</span>
                            <input
                                type="text"
                                placeholder="Hukuki konuları, anahtar kelimeler veya soruları arayın..."
                                className="w-full h-14 pl-12 pr-4 rounded-xl bg-gray-50 border-gray-200 focus:ring-accent focus:border-accent transition-all text-sm"
                            />
                            <button className="absolute right-2 top-2 h-10 px-6 bg-primary text-white rounded-lg text-sm font-medium hover:bg-accent hover:text-primary transition-all">Ara</button>
                        </div>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Filtrele:</span>
                            <div className="flex flex-wrap gap-2">
                                {categories.map(cat => (
                                    <button
                                        key={cat}
                                        onClick={() => setActiveCategory(cat)}
                                        className={`px-5 py-2 rounded-full text-xs font-bold tracking-wide transition-all ${activeCategory === cat
                                            ? 'bg-primary text-white shadow-lg'
                                            : 'bg-white border border-gray-200 text-secondary hover:border-accent hover:text-accent'
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Featured Post */}
                {filteredPosts.filter(p => p.featured).map(post => (
                    <div key={post.id} className="group bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 mb-16 flex flex-col lg:flex-row transition-transform hover:-translate-y-1 duration-500">
                        <div className="lg:w-1/2 relative overflow-hidden h-64 lg:h-auto">
                            <div className="absolute top-4 left-4 bg-accent text-primary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest z-10 shadow-lg">ÖNE ÇIKAN</div>
                            <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" />
                        </div>
                        <div className="lg:w-1/2 p-10 flex flex-col justify-between">
                            <div>
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="material-symbols-outlined text-burgundy text-lg">gavel</span>
                                    <span className="text-[11px] font-black text-burgundy uppercase tracking-widest">{post.category}</span>
                                </div>
                                <h2 className="text-3xl font-serif font-bold text-primary mb-4 leading-tight group-hover:text-accent transition-colors">{post.title}</h2>
                                <p className="text-secondary leading-relaxed mb-8">{post.excerpt}</p>
                            </div>
                            <div className="flex items-center justify-between border-t border-gray-100 pt-8">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-accent text-primary flex items-center justify-center font-serif text-sm font-bold shadow-md">Av</div>
                                    <div className="flex flex-col">
                                        <span className="text-xs font-bold text-primary">{post.author}</span>
                                        <span className="text-[10px] text-gray-400">{post.date}</span>
                                    </div>
                                </div>
                                <Link href={`/blog/${post.id}`} className="text-accent font-bold text-xs flex items-center gap-2 group/link">
                                    Makaleyi Oku <span className="material-symbols-outlined text-sm transition-transform group-hover/link:translate-x-1">arrow_forward</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Post Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {filteredPosts.filter(p => !p.featured).map(post => (
                        <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl transition-all duration-500 group flex flex-col">
                            <div className="relative h-56 overflow-hidden">
                                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur text-primary text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider z-10">{post.category}</div>
                                <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-xl font-serif font-bold text-primary mb-4 leading-tight group-hover:text-accent transition-colors">{post.title}</h3>
                                <p className="text-sm text-secondary leading-relaxed mb-8 line-clamp-3">{post.excerpt}</p>
                                <div className="mt-auto flex items-center justify-between pt-6 border-t border-gray-100">
                                    <Link href={`/blog/${post.id}`} className="text-xs font-bold text-accent">Makaleyi Oku →</Link>
                                    <span className="text-[10px] text-gray-400 italic">{post.date}</span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Empty State */}
                {filteredPosts.length === 0 && (
                    <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200">
                        <span className="material-symbols-outlined text-5xl text-gray-300 mb-4">search_off</span>
                        <p className="text-secondary">Bu kategoride henüz yazı bulunmuyor.</p>
                    </div>
                )}

                {/* Newsletter */}
                <div className="bg-primary rounded-3xl p-12 text-center relative overflow-hidden shadow-2xl">
                    <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent opacity-10 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-burgundy opacity-10 rounded-full blur-3xl"></div>
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <span className="material-symbols-outlined text-accent text-5xl mb-6 block">mail</span>
                        <h2 className="text-3xl font-serif font-bold text-white mb-4">Hukuki Değişikliklerden Haberdar Olun</h2>
                        <p className="text-gray-300 font-light mb-10 leading-relaxed">
                            Basitleştirilmiş yasal güncellemeleri ve firma haberlerini doğrudan gelen kutunuza alın.
                        </p>
                        <form className="flex flex-col sm:flex-row gap-4">
                            <input
                                type="email"
                                placeholder="E-posta adresiniz"
                                className="flex-grow px-6 py-4 rounded-xl border-none focus:ring-2 focus:ring-accent text-primary"
                            />
                            <button className="bg-accent text-primary px-10 py-4 rounded-xl font-bold hover:bg-white transition-all">Abone Ol</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
