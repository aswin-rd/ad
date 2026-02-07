
export default function PrivacyPage() {
    return (
        <main style={{ padding: '60px 40px', maxWidth: '800px', margin: '0 auto' }}>
            <h1 className="heading-l" style={{ marginBottom: '40px' }}>Privacy Policy</h1>
            <div className="text-elegant" style={{ fontSize: '16px', lineHeight: 1.6 }}>
                <p>Last updated: {new Date().toLocaleDateString()}</p>

                <h2>1. Introduction</h2>
                <p>Welcome to <strong>Art of the Ephemeral</strong>. We respect your privacy and are committed to protecting your personal data.</p>

                <h2>2. Data Collection</h2>
                <p>We do not collect personal data directly. However, we use third-party services like Google AdSense which may use cookies to serve ads based on your prior visits to our website or other websites.</p>

                <h2>3. Cookies</h2>
                <p>Google use cookies to help serve the ads it displays on the websites of its partners, such as websites displaying Google ads or participating in Google certified ad networks. When users visit a Google partner's website, a cookie may be dropped on that end user's browser.</p>
                <ul>
                    <li>Third-party vendors, including Google, use cookies to serve ads based on a user's prior visits to your website or other websites.</li>
                    <li>Google's use of advertising cookies enables it and its partners to serve ads to your users based on their visit to your sites and/or other sites on the Internet.</li>
                    <li>Users may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-color)' }}>Ads Settings</a>.</li>
                </ul>

                <h2>4. Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, please contact us.</p>
            </div>
        </main>
    );
}
