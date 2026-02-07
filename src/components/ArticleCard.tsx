
import Link from 'next/link';
import { Article } from '@/data/articles';

interface ArticleCardProps {
    article: Article;
    index: number;
}

export default function ArticleCard({ article, index }: ArticleCardProps) {
    return (
        <Link href={`/article/${article.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <article className="glass-card glass-effect animate-fade-in" style={{ animationDelay: `${index * 0.1}s`, cursor: 'pointer', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div style={{
                    height: '200px',
                    background: `linear-gradient(${45 + (index * 60)}deg, #111, #222)`,
                    borderRadius: '8px',
                    marginBottom: '20px',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    <div className="hover-shine" style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'radial-gradient(circle at center, rgba(255,255,255,0.05), transparent)',
                        transition: 'transform 0.5s ease'
                    }}></div>
                    <div style={{
                        position: 'absolute',
                        bottom: '10px',
                        right: '10px',
                        background: 'rgba(0,0,0,0.6)',
                        padding: '4px 8px',
                        borderRadius: '4px',
                        fontSize: '10px',
                        backdropFilter: 'blur(4px)'
                    }}>
                        {article.tags[0]}
                    </div>
                </div>
                <h3 className="heading-m" style={{ fontSize: '24px', marginBottom: '12px' }}>{article.title}</h3>
                <p className="text-elegant" style={{ fontSize: '14px', flexGrow: 1 }}>
                    {article.excerpt}
                </p>
                <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '10px', letterSpacing: '1px', color: 'rgba(255,255,255,0.3)', transition: 'color 0.3s' }}>READ ARTICLE</span>
                    <div style={{ width: '40px', height: '1px', background: 'var(--glass-border)' }}></div>
                </div>
            </article>
        </Link>
    );
}
