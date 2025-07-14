'use client';

import Link from 'next/link';

interface PostCardProps {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  imageUrl?: string;
}

export default function PostCard({ id, title, excerpt, category, date, readTime, imageUrl }: PostCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200">
      {imageUrl && (
        <div className="aspect-video overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
            {category}
          </span>
          <div className="flex items-center text-gray-500 text-sm">
            <i className="ri-time-line w-4 h-4 flex items-center justify-center mr-1"></i>
            {readTime}
          </div>
        </div>
        
        <Link href={`/posts/${id}`}>
          <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-blue-600 transition-colors cursor-pointer line-clamp-2">
            {title}
          </h3>
        </Link>
        
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
          {excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          <time className="text-gray-500 text-sm">{date}</time>
          <Link href={`/posts/${id}`}>
            <span className="text-blue-600 text-sm font-medium hover:text-blue-700 cursor-pointer whitespace-nowrap">
              더 읽기 →
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}