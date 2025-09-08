export function NavBar() {
  return (
    <header className="hidden md:flex items-center justify-between px-6 py-3 shadow-md bg-bg-light dark:bg-bg-dark z-sticky">
      {/* Brand */}
      <div className="font-bold text-lg">NXUP</div>

      {/* Links */}
      <nav className="flex space-x-6 text-sm font-medium">
        <a href="#" className="hover:text-brand-primary transition-colors">
          Home
        </a>
        <a href="#" className="hover:text-brand-primary transition-colors">
          Features
        </a>
        <a href="#" className="hover:text-brand-primary transition-colors">
          Profile
        </a>
      </nav>
    </header>
  );
}
