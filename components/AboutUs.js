function AboutUs() {
    try {
        const stats = [
            { label: "Anos de Experiência", value: "10+" },
            { label: "Países Atendidos", value: "30+" },
            { label: "Clientes Empresariais", value: "500+" },
            { label: "Profissionais", value: "100+" }
        ];

        return (
            <section id="about" data-name="about-section" className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 data-name="about-title" className="text-3xl font-bold mb-4">
                                Transformando Negócios Desde 2014
                            </h2>
                            <p data-name="about-description" className="text-gray-600 text-lg">
                                A SaaSify nasceu da visão de simplificar operações empresariais complexas. 
                                Nossa jornada começou com uma equipe pequena mas dedicada, e hoje somos 
                                líderes em soluções SaaS para empresas de todos os portes.
                            </p>
                            <p data-name="about-mission" className="text-gray-600 text-lg">
                                Nossa missão é capacitar empresas com tecnologia intuitiva e eficiente, 
                                permitindo que nossos clientes foquem no que fazem de melhor: fazer seus 
                                negócios crescerem.
                            </p>
                            <div className="flex gap-4">
                                <button className="gradient-bg text-white px-6 py-3 rounded-lg hover:opacity-90">
                                    Conheça Nossa Equipe
                                </button>
                                <button className="border-2 border-gray-300 px-6 py-3 rounded-lg hover:border-gray-400">
                                    Nossa História
                                </button>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-8">
                            {stats.map((stat, index) => (
                                <div 
                                    key={index}
                                    data-name={`stat-card-${index}`}
                                    className="bg-white p-6 rounded-xl shadow-sm text-center card-hover"
                                >
                                    <div className="text-3xl font-bold text-gradient mb-2">
                                        {stat.value}
                                    </div>
                                    <div className="text-gray-600">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mt-16 grid md:grid-cols-3 gap-8">
                        <div data-name="value-card-1" className="p-6 bg-white rounded-xl shadow-sm card-hover">
                            <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4">
                                <i className="fas fa-heart text-white text-xl"></i>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Compromisso com Qualidade</h3>
                            <p className="text-gray-600">
                                Mantemos os mais altos padrões em cada aspecto de nossos serviços.
                            </p>
                        </div>
                        <div data-name="value-card-2" className="p-6 bg-white rounded-xl shadow-sm card-hover">
                            <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4">
                                <i className="fas fa-lightbulb text-white text-xl"></i>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Inovação Constante</h3>
                            <p className="text-gray-600">
                                Sempre buscando novas maneiras de melhorar e evoluir nossas soluções.
                            </p>
                        </div>
                        <div data-name="value-card-3" className="p-6 bg-white rounded-xl shadow-sm card-hover">
                            <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4">
                                <i className="fas fa-users text-white text-xl"></i>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Foco no Cliente</h3>
                            <p className="text-gray-600">
                                Seu sucesso é nossa prioridade. Estamos aqui para apoiar seu crescimento.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('AboutUs error:', error);
        reportError(error);
        return null;
    }
}
