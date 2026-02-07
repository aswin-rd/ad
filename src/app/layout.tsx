import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Aura | Premium Content & Ads",
  description: "Experience content in an elegant, minimal atmosphere.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense Script */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7864489971458167"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body>
        <nav className="glass-effect" style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          padding: '20px 40px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid var(--glass-border)'
        }}>
          <div style={{ fontSize: '24px', fontWeight: 700, fontFamily: 'var(--font-serif)', letterSpacing: '2px' }}>AURA</div>
          <div style={{ display: 'flex', gap: '30px', fontSize: '14px', letterSpacing: '1px', color: 'var(--accent-secondary)' }}>
            <a href="#" className="nav-link">JOURNAL</a>
            <a href="#" className="nav-link">GALLERY</a>
            <a href="#" className="nav-link">ABOUT</a>
          </div>
        </nav>

        {children}

        <footer style={{
          padding: '80px 40px',
          borderTop: '1px solid var(--glass-border)',
          marginTop: 'auto',
          textAlign: 'center',
          color: 'var(--accent-secondary)',
          fontSize: '12px',
          letterSpacing: '2px'
        }}>
          &copy; 2026 AURA DESIGN STUDIO. ALL RIGHTS RESERVED.
        </footer>
      </body>
    </html>
  );
}
