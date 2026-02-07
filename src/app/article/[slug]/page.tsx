
import { articles } from "@/data/articles";
import { notFound } from "next/navigation";
import AdUnit from "@/components/AdUnit";

/* eslint-disable @typescript-eslint/no-explicit-any */

export async function generateStaticParams() {
    return articles.map((post) => ({
        slug: post.slug,
    }));
}

export default function ArticlePage({ params }: { params: any }) {
    const { slug } = params;
    const article = articles.find((p) => p.slug === slug);

    if (!article) {
        notFound();
    }

    return (
        <main style={{ padding: '40px 20px 80px', maxWidth: '800px', margin: '0 auto' }}>
            <article className="animate-fade-in">
                <header style={{ marginBottom: '40px', textAlign: 'center' }}>
                    <div style={{ marginBottom: '20px' }}>
                        {article.tags.map(tag => (
                            <span key={tag} style={{
                                fontSize: '12px',
                                textTransform: 'uppercase',
                                letterSpacing: '1px',
                                margin: '0 8px',
                                padding: '4px 8px',
                                border: '1px solid var(--glass-border)',
                                borderRadius: '4px',
                                color: 'rgba(255,255,255,0.6)'
                            }}>
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h1 className="heading-l" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1, marginBottom: '20px' }}>
                        {article.title}
                    </h1>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', color: 'rgba(255,255,255,0.5)', fontSize: '14px' }}>
                        <span>{article.date}</span>
                        <span>By {article.author}</span>
                    </div>
                </header>

                {/* Top Ad */}
                <div style={{ margin: '40px 0' }}>
                    <AdUnit slotId="1234567890" label="Advertisement" />
                </div>

                <div className="text-elegant" style={{ fontSize: '18px', lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: article.content }} />

                {/* Bottom Ad */}
                <div style={{ margin: '60px 0' }}>
                    <AdUnit slotId="0987654321" label="Sponsored Content" />
                </div>
            </article>

            <nav style={{ marginTop: '80px', borderTop: '1px solid var(--glass-border)', paddingTop: '40px', textAlign: 'center' }}>
                <a href="/" className="hover-underline" style={{ fontSize: '14px', letterSpacing: '2px', textTransform: 'uppercase' }}>
                    ← Back to Home
                </a>
            </nav>
        </main>
    );
}
