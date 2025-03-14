function Navbar() {
    try {
        const [isOpen, setIsOpen] = React.useState(false);

        return (
            <nav data-name="navbar" className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <a href="#" data-name="logo" className="text-xl font-bold text-gradient">SaaSify</a>
                        </div>
                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#about" data-name="about-link" className="text-gray-600 hover:text-gray-900">Sobre Nós</a>
                            <a href="#features" data-name="features-link" className="text-gray-600 hover:text-gray-900">Recursos</a>
                            <a href="#pricing" data-name="pricing-link" className="text-gray-600 hover:text-gray-900">Preços</a>
                            <a href="#testimonials" data-name="testimonials-link" className="text-gray-600 hover:text-gray-900">Depoimentos</a>
                            <button data-name="cta-button" className="gradient-bg text-white px-6 py-2 rounded-lg hover:opacity-90">
                                Começar Agora
                            </button>
                        </div>
                        <button 
                            data-name="mobile-menu-button"
                            className="md:hidden p-2"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
                        </button>
                    </div>
                </div>
                {isOpen && (
                    <div data-name="mobile-menu" className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <a href="#about" className="block px-3 py-2 text-gray-600">Sobre Nós</a>
                            <a href="#features" className="block px-3 py-2 text-gray-600">Recursos</a>
                            <a href="#pricing" className="block px-3 py-2 text-gray-600">Preços</a>
                            <a href="#testimonials" className="block px-3 py-2 text-gray-600">Depoimentos</a>
                            <button className="w-full text-left px-3 py-2 gradient-bg text-white rounded-lg">
                                Começar Agora
                            </button>
                        </div>
                    </div>
                )}
            </nav>
        );
    } catch (error) {
        console.error('Navbar error:', error);
        reportError(error);
        return null;
    }
}
