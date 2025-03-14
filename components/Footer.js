function Footer() {
    try {
        return (
            <footer data-name="footer" className="bg-gray-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <h3 data-name="footer-logo" className="text-xl font-bold mb-4">SaaSify</h3>
                            <p className="text-gray-400">Transformando empresas através de soluções em nuvem inovadoras.</p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Produto</h4>
                            <ul className="space-y-2">
                                <li><a href="#features" className="text-gray-400 hover:text-white">Recursos</a></li>
                                <li><a href="#pricing" className="text-gray-400 hover:text-white">Preços</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">API</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Empresa</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-white">Sobre</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Carreiras</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Conecte-se</h4>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <i className="fab fa-github"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                        <p>&copy; 2024 SaaSify. Todos os direitos reservados.</p>
                    </div>
                </div>
            </footer>
        );
    } catch (error) {
        console.error('Footer error:', error);
        reportError(error);
        return null;
    }
}
