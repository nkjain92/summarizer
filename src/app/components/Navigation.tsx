'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/lib/contexts/AuthContext';

export default function Navigation() {
  const pathname = usePathname();
  const { user, signOut, loading } = useAuth();

  return (
    <nav className='sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-purple-100/20'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='flex justify-between h-16'>
          <div className='flex items-center justify-between w-full'>
            <div className='flex-shrink-0 flex items-center'>
              <Link
                href='/'
                className='text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:opacity-80 transition-opacity'>
                Summarizer
              </Link>
            </div>
            <div className='flex items-center space-x-8'>
              <div className='hidden sm:flex sm:space-x-8'>
                <Link
                  href='/'
                  className={`inline-flex items-center px-4 py-2 text-sm font-medium border-b-2 transition-all duration-200 ${
                    pathname === '/'
                      ? 'border-purple-500 text-purple-600'
                      : 'border-transparent text-gray-500 hover:text-purple-600 hover:border-purple-300'
                  }`}>
                  Home
                </Link>
                <Link
                  href='/summaries'
                  className={`inline-flex items-center px-4 py-2 text-sm font-medium border-b-2 transition-all duration-200 ${
                    pathname === '/summaries'
                      ? 'border-purple-500 text-purple-600'
                      : 'border-transparent text-gray-500 hover:text-purple-600 hover:border-purple-300'
                  }`}>
                  Past Summaries
                </Link>
              </div>
              {loading ? (
                <div className='h-8 w-24 animate-pulse rounded bg-gray-200' />
              ) : user ? (
                <div className='flex items-center space-x-4'>
                  <span className='text-sm text-gray-600'>{user.email?.split('@')[0]}</span>
                  <button
                    onClick={signOut}
                    className={`inline-flex items-center px-4 py-2 text-sm font-medium border-b-2 transition-all duration-200 border-transparent text-gray-500 hover:text-purple-600 hover:border-purple-300`}>
                    Sign Out
                  </button>
                </div>
              ) : (
                <Link
                  href='/login'
                  className={`inline-flex items-center px-4 py-2 text-sm font-medium border-b-2 transition-all duration-200 border-transparent text-gray-500 hover:text-purple-600 hover:border-purple-300`}>
                  Sign In
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
