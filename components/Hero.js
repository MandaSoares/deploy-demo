function Hero() {
    try {
        return (
            <div data-name="hero-section" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center">
                        <h1 data-name="hero-title" className="text-4xl md:text-6xl font-bold mb-6 slide-up">
                            Transforme Seu Negócio com 
                            <span className="text-gradient"> SaaSify</span>
                        </h1>
                        <p data-name="hero-subtitle" className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto slide-up">
                            Otimize seu fluxo de trabalho, aumente a produtividade e escale suas operações com nossa plataforma em nuvem inovadora.
                        </p>
                        <div data-name="hero-cta" className="flex justify-center gap-4 slide-up">
                            <button className="gradient-bg text-white px-8 py-3 rounded-lg hover:opacity-90">
                                Teste Grátis
                            </button>
                            <button className="border-2 border-gray-300 px-8 py-3 rounded-lg hover:border-gray-400">
                                Ver Demo
                            </button>
                        </div>
                        <div data-name="hero-stats" className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
                            <div className="text-center fade-in">
                                <div className="text-3xl font-bold text-gradient">10k+</div>
                                <div className="text-gray-600">Usuários Ativos</div>
                            </div>
                            <div className="text-center fade-in">
                                <div className="text-3xl font-bold text-gradient">98%</div>
                                <div className="text-gray-600">Satisfação</div>
                            </div>
                            <div className="text-center fade-in">
                                <div className="text-3xl font-bold text-gradient">24/7</div>
                                <div className="text-gray-600">Suporte</div>
                            </div>
                            <div className="text-center fade-in">
                                <div className="text-3xl font-bold text-gradient">99.9%</div>
                                <div className="text-gray-600">Disponibilidade</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Hero error:', error);
        reportError(error);
        return null;
    }
}
