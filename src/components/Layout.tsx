
import { ReactNode } from "react";
import Navbar from "./Navbar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <footer className="py-6 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Abdullah Al Munawar. All rights reserved.
          </p>
          <div className="mt-2">
            <span className="pixel-text text-xs text-pacman-yellow">
              Powered by Pac-Man
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
