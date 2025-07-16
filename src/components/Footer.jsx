import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white mt-20 pb-8 pt-12 px-0 sm:px-20">
      {/* Top row: icons and labels */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-10 text-base mb-8">
        <div className="flex items-center gap-2">
          <span className="inline-block text-3xl text-blue-200">
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect x="4" y="10" width="16" height="10" rx="2" fill="#23232a"/><rect x="8" y="6" width="8" height="4" rx="2" fill="#23232a"/><rect x="10" y="12" width="4" height="4" rx="1" fill="#6366F1"/></svg>
          </span>
          Encrypted
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block text-3xl text-yellow-200">
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" fill="#23232a"/><rect x="7" y="9" width="10" height="2" rx="1" fill="#fde68a"/><rect x="7" y="13" width="10" height="2" rx="1" fill="#fde68a"/></svg>
          </span>
          Local-Only Analyizcs
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block text-3xl text-purple-200">
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><ellipse cx="8" cy="12" rx="3" ry="6" fill="#a78bfa"/><ellipse cx="16" cy="12" rx="3" ry="6" fill="#a78bfa"/><ellipse cx="12" cy="12" rx="2" ry="4" fill="#23232a"/></svg>
          </span>
          Screen <span className="hidden sm:inline">Or Camera Use</span>
        </div>
      </div>
      <hr className="border-t border-[#23232a] mb-8" />
      {/* Bottom row: nav links, social, copyright */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-gray-300 text-sm">
        <div className="flex flex-wrap gap-8 mb-2 sm:mb-0">
          <a href="#" className="hover:text-white transition">About</a>
          <a href="#" className="hover:text-white transition">Contact</a>
          <a href="#" className="hover:text-white transition">FAQ</a>
          <a href="#" className="hover:text-white transition">Terms of Use</a>
          <a href="#" className="hover:text-white transition">Privacy Policy</a>
        </div>
        <div className="flex items-center gap-6 mb-2 sm:mb-0">
          <a href="#" className="hover:text-white transition" aria-label="Twitter">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.59-2.47.7a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.1.99C7.69 9.13 4.07 7.38 1.64 4.7c-.37.64-.58 1.38-.58 2.17 0 1.5.76 2.82 1.92 3.6-.7-.02-1.36-.21-1.94-.53v.05c0 2.1 1.5 3.85 3.5 4.25-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.7 2.1 2.94 3.95 2.97A8.6 8.6 0 0 1 2 19.54c-.29 0-.57-.02-.85-.05A12.13 12.13 0 0 0 8.29 21.5c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0 0 22.46 6z"/></svg>
          </a>
          <a href="#" className="hover:text-white transition" aria-label="LinkedIn">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.88v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg>
          </a>
          <a href="#" className="hover:text-white transition" aria-label="Twitter2">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.59-2.47.7a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.1.99C7.69 9.13 4.07 7.38 1.64 4.7c-.37.64-.58 1.38-.58 2.17 0 1.5.76 2.82 1.92 3.6-.7-.02-1.36-.21-1.94-.53v.05c0 2.1 1.5 3.85 3.5 4.25-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.7 2.1 2.94 3.95 2.97A8.6 8.6 0 0 1 2 19.54c-.29 0-.57-.02-.85-.05A12.13 12.13 0 0 0 8.29 21.5c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0 0 22.46 6z"/></svg>
          </a>
          <a href="#" className="hover:text-white transition" aria-label="AppIcon">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="4" fill="#23232a"/><rect x="7" y="7" width="10" height="10" rx="2" fill="#fff"/></svg>
          </a>
        </div>
        <div className="text-gray-400 text-xs">© Sttch, 2025</div>
      </div>
    </footer>
  );
};

export default Footer; 