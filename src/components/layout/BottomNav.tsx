export function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center bg-bg-light dark:bg-bg-dark border-t border-gray-300 dark:border-gray-700 py-2 md:hidden z-sticky">
      <a href="#" className="flex flex-col items-center text-sm text-text-secondaryLight dark:text-text-secondaryDark hover:text-brand-primary">
        🏠
        <span>Home</span>
      </a>
      <a href="#" className="flex flex-col items-center text-sm hover:text-brand-primary">
        ⭐
        <span>Features</span>
      </a>
      <a href="#" className="flex flex-col items-center text-sm hover:text-brand-primary">
        👤
        <span>Profile</span>
      </a>
    </nav>
  );
}
