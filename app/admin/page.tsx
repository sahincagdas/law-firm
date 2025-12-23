
"use client";

import React, { useState, useEffect } from 'react';
import { BlogPost } from '../../types';
import { getBlogPosts, addBlogPost, deleteBlogPost } from '../../services/blogService';

const Admin: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [password, setPassword] = useState('');
    const [posts, setPosts] = useState<BlogPost[]>([]);

    // Form State
    const [newPost, setNewPost] = useState({
        title: '',
        excerpt: '',
        content: '',
        category: 'Şirketler Hukuku',
        author: 'Av. Dilan Köremezli',
        imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop',
        featured: false
    });

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        const data = await getBlogPosts();
        setPosts(data);
    };

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === 'admin123') { // Örnek şifre
            setIsLoggedIn(true);
        } else {
            alert('Hatalı şifre!');
        }
    };

    const handleAddPost = async (e: React.FormEvent) => {
        e.preventDefault();

        await addBlogPost({
            ...newPost,
            date: new Date().toLocaleDateString('tr-TR', { day: 'numeric', month: 'short', year: 'numeric' })
        });

        await fetchPosts();

        // Reset Form
        setNewPost({
            title: '',
            excerpt: '',
            content: '',
            category: 'Şirketler Hukuku',
            author: 'Av. Dilan Köremezli',
            imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop',
            featured: false
        });
        alert('Blog yazısı paylaşıldı!');
    };

    const handleDelete = async (id: string) => {
        if (window.confirm('Bu yazıyı silmek istediğinize emin misiniz?')) {
            await deleteBlogPost(id);
            await fetchPosts();
        }
    };

    if (!isLoggedIn) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center bg-surface-light px-4">
                <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center text-accent mx-auto mb-4">
                            <span className="material-symbols-outlined text-3xl">lock</span>
                        </div>
                        <h2 className="text-2xl font-serif font-bold text-primary">Yönetim Paneli</h2>
                        <p className="text-gray-400 text-sm mt-1">Lütfen devam etmek için şifrenizi girin</p>
                    </div>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <input
                            type="password"
                            placeholder="Şifre"
                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border-gray-200 focus:ring-accent"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <button className="w-full py-3 bg-primary text-white font-bold rounded-xl hover:bg-accent hover:text-primary transition-all">
                            Giriş Yap
                        </button>
                    </form>
                    <p className="text-[10px] text-center text-gray-400 mt-6">Varsayılan Şifre: admin123</p>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-surface-light min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-12">

                    {/* Form Side */}
                    <div className="lg:w-1/2">
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 sticky top-24">
                            <h2 className="text-2xl font-serif font-bold text-primary mb-6">Yeni Blog Yazısı Ekle</h2>
                            <form onSubmit={handleAddPost} className="space-y-4">
                                <div>
                                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-1">Başlık</label>
                                    <input
                                        required
                                        className="w-full px-4 py-2 rounded-lg bg-gray-50 border-gray-200 focus:ring-accent"
                                        value={newPost.title}
                                        onChange={e => setNewPost({ ...newPost, title: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-1">Kategori</label>
                                    <select
                                        className="w-full px-4 py-2 rounded-lg bg-gray-50 border-gray-200 focus:ring-accent"
                                        value={newPost.category}
                                        onChange={e => setNewPost({ ...newPost, category: e.target.value })}
                                    >
                                        <option>Aile Hukuku</option>
                                        <option>Şirketler Hukuku</option>
                                        <option>Gayrimenkul</option>
                                        <option>Dava Süreçleri</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-1">Özet Metin</label>
                                    <textarea
                                        required
                                        rows={2}
                                        className="w-full px-4 py-2 rounded-lg bg-gray-50 border-gray-200 focus:ring-accent resize-none text-sm"
                                        value={newPost.excerpt}
                                        onChange={e => setNewPost({ ...newPost, excerpt: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-1">Tam İçerik</label>
                                    <textarea
                                        required
                                        rows={6}
                                        className="w-full px-4 py-2 rounded-lg bg-gray-50 border-gray-200 focus:ring-accent resize-none text-sm"
                                        value={newPost.content}
                                        onChange={e => setNewPost({ ...newPost, content: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-1">Görsel URL (Unsplash vb.)</label>
                                    <input
                                        className="w-full px-4 py-2 rounded-lg bg-gray-50 border-gray-200 focus:ring-accent"
                                        value={newPost.imageUrl}
                                        onChange={e => setNewPost({ ...newPost, imageUrl: e.target.value })}
                                    />
                                </div>
                                <div className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        id="featured"
                                        className="rounded text-accent focus:ring-accent"
                                        checked={newPost.featured}
                                        onChange={e => setNewPost({ ...newPost, featured: e.target.checked })}
                                    />
                                    <label htmlFor="featured" className="text-sm text-primary font-medium">Öne Çıkan Yazı Olarak İşaretle</label>
                                </div>
                                <button className="w-full py-4 bg-accent text-primary font-bold rounded-xl shadow-lg shadow-accent/20 hover:scale-[1.02] transition-all">
                                    Yazıyı Yayınla
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* List Side */}
                    <div className="lg:w-1/2">
                        <h2 className="text-2xl font-serif font-bold text-primary mb-6">Mevcut Yazılar ({posts.length})</h2>
                        <div className="space-y-4">
                            {posts.map(post => (
                                <div key={post.id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between gap-4 group">
                                    <div className="flex items-center gap-4">
                                        <img src={post.imageUrl} className="w-16 h-16 rounded-lg object-cover" alt="" />
                                        <div>
                                            <h4 className="font-bold text-primary line-clamp-1">{post.title}</h4>
                                            <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">{post.category} • {post.date}</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => handleDelete(post.id)}
                                        className="w-10 h-10 rounded-full bg-red-50 text-red-500 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all shrink-0"
                                    >
                                        <span className="material-symbols-outlined text-xl">delete</span>
                                    </button>
                                </div>
                            ))}
                            {posts.length === 0 && <p className="text-gray-400 text-center py-10">Henüz yazı yok.</p>}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Admin;
