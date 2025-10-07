
export function Header() {
    return (
        <header className="w-full text-white p-4">
            <div className="flex flex-col md:flex-row md:justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold">My Website</h1>
                </div>
                <div>
                    <p className="text-sm">Welcome to my website!</p>
                </div>
            </div>

        </header>
    );
}