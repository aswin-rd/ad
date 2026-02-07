
export default function TermsPage() {
    return (
        <main style={{ padding: '60px 40px', maxWidth: '800px', margin: '0 auto' }}>
            <h1 className="heading-l" style={{ marginBottom: '40px' }}>Terms of Service</h1>
            <div className="text-elegant" style={{ fontSize: '16px', lineHeight: 1.6 }}>
                <p>Last updated: {new Date().toLocaleDateString()}</p>

                <h2>1. Acceptance of Terms</h2>
                <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>

                <h2>2. Use License</h2>
                <p>Permission is granted to temporarily download one copy of the materials (information or software) on Art of the Ephemeral's website for personal, non-commercial transitory viewing only.</p>

                <h2>3. Disclaimer</h2>
                <p>The materials on this website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>

                <h2>4. Limitations</h2>
                <p>In no event shall Art of the Ephemeral or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on this website.</p>
            </div>
        </main>
    );
}
