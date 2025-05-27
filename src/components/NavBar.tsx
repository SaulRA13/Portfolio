import { useEffect, useState } from "react";
import { cn } from "../lib/utils"
import { Menu, X } from "lucide-react";

const navItems = [
    {name: 'Home', path: '#home'},
    {name: 'About', path: '#about'},
    {name: 'Skills', path: '#skills'},
    {name: 'GitHub', path: '#github'},
    {name: 'Contact', path: '#contact'},
]

export const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);

            window.addEventListener('scroll', handleScroll);
            return () => {
                window.removeEventListener('scroll', handleScroll);
            }
        };

    }, []);

    return ( 
        <nav className={cn(
          'fixed w-full z-40 transition-all duration-300',
          isScrolled ? 'py-3 bg-background/80 backdrop-blur-md shadow-md' : 'py-5'
        )}
        >
            <div className="container flex items-center justify-between">
                <a className="text-xl font-bold text-primary flex items-center" href="/">
                    <span className="relative z-10">
                        <span className="text-glow text-foreground">Saul's </span> Portfolio
                    </span>
                </a>

                {/*Desktop*/}
                <div className="hidden md:flex space-x-8">
                    {navItems.map((item, key) => (
                        <a key={key} 
                        href={item.path} 
                        className="text-foreground hover:text-primary transition-colors duration-300">
                            {item.name}
                        </a>
                    ))}
                </div>

                {/*Mobile*/}
                <button onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                className="md:hidden p-2 text-foreground z-50"
                aria-label={isMobileMenuOpen? "Close menu" : "Open menu"}>
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24}/>}
                </button>
                <div 
                    className={cn(
                        "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                        "transition-all duration-300 md:hidden",
                        isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    )}
                >
                    <div className="flex flex-col space-y-8 text-xl">
                        {navItems.map((item, key) => (
                            <a key={key} 
                            href={item.path} 
                            className="text-foreground hover:text-primary transition-colors duration-300"
                            onClick={() => setIsMobileMenuOpen(false)}>
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>

        
    )
}