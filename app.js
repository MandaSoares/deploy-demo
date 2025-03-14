function App() {
    try {
        return (
            <div data-name="app">
                <Navbar />
                <main>
                    <Hero />
                    <Features />
                    <Pricing />
                    <Testimonials />
                </main>
                <Footer />
            </div>
        );
    } catch (error) {
        console.error('App error:', error);
        reportError(error);
        return null;
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
