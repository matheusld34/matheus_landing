
export function Footer() {
    return (
        <footer className="w-full border-t border-gray-700 py-6 mt-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-center text-gray-400 text-sm">
                    &copy; {new Date().getFullYear()} Meu Portfólio. Todos os direitos reservados.
                </p>
            </div>
        </footer>
    )
}