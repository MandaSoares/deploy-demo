function Pricing() {
    try {
        const plans = [
            {
                name: "Iniciante",
                price: "249",
                features: [
                    "Até 5 membros da equipe",
                    "Análises básicas",
                    "Suporte 24/7",
                    "Acesso à API",
                    "1 GB de armazenamento"
                ]
            },
            {
                name: "Profissional",
                price: "499",
                popular: true,
                features: [
                    "Até 20 membros da equipe",
                    "Análises avançadas",
                    "Suporte prioritário",
                    "Acesso à API",
                    "10 GB de armazenamento",
                    "Integrações personalizadas"
                ]
            },
            {
                name: "Empresarial",
                price: "1249",
                features: [
                    "Membros ilimitados",
                    "Análises personalizadas",
                    "Suporte dedicado",
                    "Acesso total à API",
                    "Armazenamento ilimitado",
                    "Personalização completa"
                ]
            }
        ];

        return (
            <section id="pricing" data-name="pricing-section" className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 data-name="pricing-title" className="text-3xl font-bold mb-4">Preços Simples e Transparentes</h2>
                        <p data-name="pricing-subtitle" className="text-xl text-gray-600">Escolha o plano ideal para você</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {plans.map((plan, index) => (
                            <div 
                                key={index}
                                data-name={`pricing-card-${index}`}
                                className={`bg-white rounded-xl shadow-sm p-8 card-hover ${plan.popular ? 'border-2 border-indigo-500' : ''}`}
                            >
                                {plan.popular && (
                                    <span className="bg-indigo-500 text-white px-3 py-1 rounded-full text-sm">
                                        Mais Popular
                                    </span>
                                )}
                                <h3 className="text-2xl font-bold mt-4">{plan.name}</h3>
                                <div className="mt-4 mb-8">
                                    <span className="text-4xl font-bold">R${plan.price}</span>
                                    <span className="text-gray-600">/mês</span>
                                </div>
                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center">
                                            <i className="fas fa-check text-green-500 mr-2"></i>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <button className={`w-full py-3 rounded-lg ${plan.popular ? 'gradient-bg text-white' : 'border-2 border-gray-300'}`}>
                                    Começar Agora
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Pricing error:', error);
        reportError(error);
        return null;
    }
}
