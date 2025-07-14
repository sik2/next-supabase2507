'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-blue-600" style={{fontFamily: 'var(--font-pacifico)'}}>
              StudyLog
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              홈
            </Link>
            <Link href="/posts" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              공부기록
            </Link>
            <Link href="/categories" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              카테고리
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              소개
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-6 h-6 flex items-center justify-center cursor-pointer"
          >
            <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600 cursor-pointer">
                홈
              </Link>
              <Link href="/posts" className="block px-3 py-2 text-gray-700 hover:text-blue-600 cursor-pointer">
                공부기록
              </Link>
              <Link href="/categories" className="block px-3 py-2 text-gray-700 hover:text-blue-600 cursor-pointer">
                카테고리
              </Link>
              <Link href="/about" className="block px-3 py-2 text-gray-700 hover:text-blue-600 cursor-pointer">
                소개
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}