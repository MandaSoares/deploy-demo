function Testimonials() {
    try {
        const testimonials = [
            {
                name: "Maria Silva",
                role: "CEO, TechStart",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                quote: "O SaaSify transformou nossa forma de operar. Apenas os recursos de automação já nos economizaram incontáveis horas."
            },
            {
                name: "João Santos",
                role: "CTO, InovaTech",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                quote: "O painel analítico fornece insights que nos ajudaram a tomar melhores decisões de negócios."
            },
            {
                name: "Ana Oliveira",
                role: "Gerente de Produto, ScaleUp",
                image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                quote: "Suporte ao cliente excepcional e atualizações regulares de recursos nos mantêm clientes satisfeitos."
            }
        ];

        return (
            <section id="testimonials" data-name="testimonials-section" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 data-name="testimonials-title" className="text-3xl font-bold mb-4">O Que Nossos Clientes Dizem</h2>
                        <p data-name="testimonials-subtitle" className="text-xl text-gray-600">Não acredite apenas em nossa palavra</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div 
                                key={index}
                                data-name={`testimonial-card-${index}`}
                                className="bg-white p-6 rounded-xl shadow-sm card-hover"
                            >
                                <div className="flex items-center mb-4">
                                    <img 
                                        src={testimonial.image} 
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full mr-4"
                                    />
                                    <div>
                                        <h3 className="font-semibold">{testimonial.name}</h3>
                                        <p className="text-gray-600 text-sm">{testimonial.role}</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Testimonials error:', error);
        reportError(error);
        return null;
    }
}
