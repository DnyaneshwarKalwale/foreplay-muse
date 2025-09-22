import { Button } from "@/components/ui/button";
import { Search, Zap, Eye, FolderOpen, Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  const navItems = [
    { path: "/", label: "Dashboard", icon: Zap },
    { path: "/spyder", label: "Spyder", icon: Eye },
    { path: "/discovery", label: "Discovery", icon: Search },
    { path: "/swipe-file", label: "Swipe File", icon: FolderOpen },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container flex h-16 items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center">
            <Zap className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold bg-gradient-marketing bg-clip-text text-transparent">
            Foreplay
          </span>
        </Link>

        <nav className="ml-8 hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Button
              key={item.path}
              variant={isActive(item.path) ? "default" : "ghost"}
              asChild
              className={isActive(item.path) ? "bg-primary/10 text-primary hover:bg-primary/20" : ""}
            >
              <Link to={item.path} className="flex items-center space-x-2">
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </Link>
            </Button>
          ))}
        </nav>

        <div className="ml-auto flex items-center space-x-4">
          <Button variant="outline" size="sm">
            API Docs
          </Button>
          <Button size="sm" className="bg-gradient-primary shadow-glow">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;