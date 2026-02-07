
export default function AboutPage() {
    return (
        <main style={{ padding: '80px 40px', maxWidth: '900px', margin: '0 auto' }}>
            <section className="animate-fade-in">
                <h1 className="heading-l" style={{ marginBottom: '20px' }}>About Us</h1>
                <p className="heading-m" style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '60px' }}>
                    Curating the intersection of design, technology, and minimalism.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px' }}>
                    <div>
                        <h2 style={{ fontSize: '24px', marginBottom: '20px', letterSpacing: '1px' }}>Our Mission</h2>
                        <p className="text-elegant">
                            In a digital world cluttered with noise, we strive to be a signal of clarity.
                            <strong>Art of the Ephemeral</strong> serves as a digital sanctuary for designers, developers, and minimalists who believe that less is often more.
                        </p>
                        <p className="text-elegant" style={{ marginTop: '20px' }}>
                            We explore cutting-edge web technologies, dissect UI/UX trends, and advocate for a web that is both beautiful and performant.
                        </p>
                    </div>

                    <div>
                        <h2 style={{ fontSize: '24px', marginBottom: '20px', letterSpacing: '1px' }}>What We Cover</h2>
                        <ul className="text-elegant" style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '15px', borderLeft: '2px solid var(--accent-color)', paddingLeft: '15px' }}>
                                <strong>Design Philosophy:</strong> Deep dives into minimalism, brutally, and swiss style in the digital age.
                            </li>
                            <li style={{ marginBottom: '15px', borderLeft: '2px solid var(--accent-color)', paddingLeft: '15px' }}>
                                <strong>Technical Craft:</strong> Tutorials on CSS, animations, and performance optimization.
                            </li>
                            <li style={{ marginBottom: '15px', borderLeft: '2px solid var(--accent-color)', paddingLeft: '15px' }}>
                                <strong>Future Trends:</strong> Analysis of where the web is heading next.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    );
}
