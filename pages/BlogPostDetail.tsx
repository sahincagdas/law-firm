import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BlogPost } from '../types';
import { getBlogPost } from '../services/blogService';

const BlogPostDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [post, setPost] = useState<BlogPost | null>(null);

    useEffect(() => {
        const fetchPost = async () => {
            if (id) {
                const data = await getBlogPost(id);
                setPost(data);
            }
        };
        fetchPost();
        window.scrollTo(0, 0);
    }, [id]);

    if (!post) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center">
                <h2 className="text-2xl font-serif font-bold text-primary mb-4">Yazı bulunamadı.</h2>
                <Link to="/blog" className="text-accent font-bold hover:underline">Bloga Geri Dön</Link>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen pb-20">
            {/* Hero Section */}
            <div className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
                <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 lg:p-20">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="bg-accent text-primary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest leading-none">
                                {post.category}
                            </span>
                            <span className="text-white/60 text-xs font-medium">{post.date}</span>
                        </div>
                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                            {post.title}
                        </h1>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-accent text-primary flex items-center justify-center font-serif text-lg font-bold shadow-lg">
                                {post.author.split(' ')[1]?.[0] || 'Av'}
                            </div>
                            <div className="flex flex-col">
                                <span className="text-white font-bold">{post.author}</span>
                                <span className="text-white/60 text-xs">Dilan Köremezli Yazarı</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
                <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-gray-100">
                    <div className="prose prose-lg max-w-none text-secondary leading-relaxed space-y-6">
                        <p className="text-xl font-medium text-primary italic border-l-4 border-accent pl-6 py-2 bg-accent/5 rounded-r-lg">
                            {post.excerpt}
                        </p>
                        <div className="whitespace-pre-wrap pt-4">
                            {post.content}
                        </div>
                    </div>

                    <div className="mt-16 pt-10 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6">
                        <Link
                            to="/blog"
                            className="group flex items-center gap-2 text-primary font-bold transition-all hover:text-accent"
                        >
                            <span className="material-symbols-outlined transition-transform group-hover:-translate-x-1">arrow_back</span>
                            Tüm Yazılara Dön
                        </Link>
                        <div className="flex items-center gap-4">
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Paylaş:</span>
                            <div className="flex gap-2">
                                {['facebook', 'twitter', 'linkedin'].map(social => (
                                    <button key={social} className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                                        <span className="material-symbols-outlined text-lg">share</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPostDetail;
