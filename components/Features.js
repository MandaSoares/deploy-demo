function Features() {
    try {
        const features = [
            {
                icon: "fa-chart-line",
                title: "Painel Analítico",
                description: "Obtenha insights em tempo real sobre o desempenho do seu negócio com nosso painel analítico intuitivo."
            },
            {
                icon: "fa-bolt",
                title: "Automação",
                description: "Automatize tarefas repetitivas e fluxos de trabalho para economizar tempo e reduzir erros humanos."
            },
            {
                icon: "fa-shield-alt",
                title: "Segurança Empresarial",
                description: "Medidas de segurança de nível bancário para manter seus dados seguros e em conformidade."
            },
            {
                icon: "fa-code",
                title: "Integração API",
                description: "Integre perfeitamente com suas ferramentas e sistemas existentes através de nossa API robusta."
            },
            {
                icon: "fa-users",
                title: "Colaboração em Equipe",
                description: "Permita que sua equipe trabalhe junta de forma eficiente com ferramentas de colaboração integradas."
            },
            {
                icon: "fa-mobile-alt",
                title: "Acesso Móvel",
                description: "Acesse seu painel e ferramentas de qualquer lugar usando nosso aplicativo móvel."
            }
        ];

        return (
            <section id="features" data-name="features-section" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 data-name="features-title" className="text-3xl font-bold mb-4">Recursos Poderosos</h2>
                        <p data-name="features-subtitle" className="text-xl text-gray-600">Tudo que você precisa para escalar seu negócio</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div 
                                key={index}
                                data-name={`feature-card-${index}`}
                                className="bg-white p-6 rounded-xl shadow-sm card-hover"
                            >
                                <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4">
                                    <i className={`fas ${feature.icon} text-white text-xl`}></i>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Features error:', error);
        reportError(error);
        return null;
    }
}
