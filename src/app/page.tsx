import AdUnit from "@/components/AdUnit";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/data/articles";
import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: '0 40px 80px 40px', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Hero Section */}
      <section style={{ padding: '120px 0', textAlign: 'center' }} className="animate-fade-in">
        <h1 className="heading-l">Art of the<br /><span style={{ fontStyle: 'italic', fontWeight: 400 }}>Ephemeral</span></h1>
        <p className="text-elegant" style={{ marginTop: '30px', maxWidth: '600px', marginInline: 'auto' }}>
          Exploring the boundaries of minimal aesthetics and digital performance. A curated collection of thoughts and visions.
        </p>
        <div style={{ marginTop: '40px' }}>
          <Link href="/about" style={{ margin: '0 15px', fontSize: '14px', letterSpacing: '1px', textDecoration: 'none', color: 'var(--accent-color)' }}>ABOUT</Link>
        </div>
      </section>

      {/* Top Ad Unit */}
      <AdUnit slotId="1234567890" label="Advertisement" />

      {/* Content Grid */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '40px', marginTop: '80px' }}>
        {articles.map((article, index) => (
          <ArticleCard key={article.slug} article={article} index={index} />
        ))}
      </section>

      {/* Mid Ad Unit */}
      <AdUnit slotId="0987654321" label="Sponsored" style={{ marginTop: '80px', height: '250px' }} />

      <footer style={{ marginTop: '120px', padding: '40px 0', borderTop: '1px solid var(--glass-border)', display: 'flex', justifyContent: 'center', gap: '40px', fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>
        <Link href="/privacy" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</Link>
        <Link href="/terms" style={{ color: 'inherit', textDecoration: 'none' }}>Terms of Service</Link>
        <span>© {new Date().getFullYear()} Art of the Ephemeral</span>
      </footer>
    </main>
  );
}
