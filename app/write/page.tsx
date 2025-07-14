'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { authService, postService, User } from '@/lib/auth';

export default function WritePage() {
  const [user, setUser] = useState<User | null>(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('프로그래밍');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const categories = ['프로그래밍', '웹 개발', '알고리즘', '데이터 사이언스', '독서 기록', '회고'];

  useEffect(() => {
    const currentUser = authService.getCurrentUser();
    if (!currentUser) {
      router.push('/login');
      return;
    }
    setUser(currentUser);
  }, [router]);

  const generateExcerpt = (content: string) => {
    const plainText = content.replace(/[#*`\n]/g, ' ').trim();
    return plainText.length > 150 ? plainText.substring(0, 150) + '...' : plainText;
  };

  const calculateReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    return `${minutes}분`;
  };

  const generateImageUrl = (title: string, category: string) => {
    const prompts = {
      '프로그래밍': `Programming code on computer screen with ${title} related content, modern development workspace with coding books and technical references`,
      '웹 개발': `Web development workspace showing ${title} concepts with browser windows and coding environment, modern tech setup`,
      '알고리즘': `Algorithm study materials with ${title} diagrams and mathematical formulas on desk with computer science textbooks`,
      '데이터 사이언스': `Data science workspace with ${title} analysis charts and python jupyter notebooks on multiple screens`,
      '독서 기록': `Book reading setup with ${title} book and study notes on comfortable desk with warm lighting and coffee`,
      '회고': `Peaceful reflection workspace with journal and calendar showing ${title} planning notes and goal setting materials`
    };
    
    const prompt = prompts[category as keyof typeof prompts] || `Study materials related to ${title} with books and learning resources in organized workspace`;
    return `https://readdy.ai/api/search-image?query=$%7BencodeURIComponent%28prompt%29%7D&width=400&height=225&seq=${Date.now()}&orientation=landscape`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setIsLoading(true);
    setError('');

    try {
      const newPost = {
        title,
        content,
        excerpt: generateExcerpt(content),
        category,
        readTime: calculateReadTime(content),
        imageUrl: generateImageUrl(title, category),
        authorId: user.id
      };

      postService.savePost(newPost);
      router.push('/dashboard');
    } catch (err: any) {
      setError('포스트 저장 중 오류가 발생했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">로딩 중...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/dashboard">
              <span className="text-2xl font-bold text-blue-600 cursor-pointer" style={{fontFamily: 'var(--font-pacifico)'}}>
                StudyLog
              </span>
            </Link>
            
            <div className="flex items-center space-x-4">
              <Link href="/dashboard" className="text-gray-600 hover:text-gray-900 cursor-pointer">
                대시보드로 돌아가기
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="p-6 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-gray-900">새 공부기록 작성</h1>
            <p className="text-gray-600 mt-1">오늘 학습한 내용을 정리해보세요</p>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                제목 *
              </label>
              <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="공부한 내용의 제목을 입력하세요"
              />
            </div>

            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                카테고리 *
              </label>
              <div className="relative">
                <select
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none pr-8 cursor-pointer"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
                <i className="ri-arrow-down-s-line absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none w-5 h-5 flex items-center justify-center"></i>
              </div>
            </div>

            <div>
              <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                내용 *
              </label>
              <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
                rows={15}
                maxLength={500}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
                placeholder="오늘 학습한 내용을 자세히 적어보세요. 
                             
• 어떤 것을 배웠나요?
• 어려웠던 점은 무엇인가요? 
• 어떻게 해결했나요?
• 다음에 공부할 내용은 무엇인가요?

마크다운 문법도 사용할 수 있습니다."
              />
              <div className="mt-1 text-sm text-gray-500 text-right">
                {content.length}/500자
              </div>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}

            <div className="flex justify-end space-x-4 pt-4">
              <Link href="/dashboard" className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 cursor-pointer whitespace-nowrap">
                취소
              </Link>
              <button
                type="submit"
                disabled={isLoading || !title.trim() || !content.trim()}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer whitespace-nowrap"
              >
                {isLoading ? '저장 중...' : '포스트 발행'}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}