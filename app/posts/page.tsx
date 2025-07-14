
'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PostCard from '@/components/PostCard';
import { postService, Post } from '@/lib/auth';

export default function PostsPage() {
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [searchQuery, setSearchQuery] = useState('');
  const [allPosts, setAllPosts] = useState<Post[]>([]);

  const categories = ['전체', '프로그래밍', '웹 개발', '알고리즘', '데이터 사이언스', '독서 기록', '회고'];

  const defaultPosts = [
    {
      id: 'default-1',
      title: 'React Hooks 완전 정복하기',
      excerpt: 'useState, useEffect부터 커스텀 훅까지, React Hooks의 모든 것을 정리했습니다. 실제 프로젝트에서 사용한 경험을 바탕으로 최적화 팁도 함께 공유합니다.',
      category: '프로그래밍',
      date: '2024년 1월 15일',
      readTime: '8분',
      imageUrl: 'https://readdy.ai/api/search-image?query=React%20hooks%20programming%20code%20on%20computer%20screen%20with%20modern%20development%20environment%2C%20clean%20workspace%20with%20coding%20books%20and%20notes&width=400&height=225&seq=6&orientation=landscape',
      content: 'React Hooks에 대한 상세한 학습 내용...',
      authorId: 'default'
    },
    {
      id: 'default-2',
      title: 'TypeScript 고급 타입 시스템 이해하기',
      excerpt: '제네릭, 조건부 타입, 템플릿 리터럴 타입 등 TypeScript의 고급 기능들을 실무 예제와 함께 설명합니다.',
      category: '프로그래밍',
      date: '2024년 1월 12일',
      readTime: '12분',
      imageUrl: 'https://readdy.ai/api/search-image?query=TypeScript%20code%20editor%20with%20type%20definitions%20and%20interfaces%20displayed%2C%20modern%20programming%20setup%20with%20reference%20documentation&width=400&height=225&seq=7&orientation=landscape',
      content: 'TypeScript 고급 타입 시스템에 대한 설명...',
      authorId: 'default'
    },
    {
      id: 'default-3',
      title: '알고리즘 시간 복잡도 분석 마스터하기',
      excerpt: 'Big O 표기법부터 실제 코드 분석까지, 알고리즘의 효율성을 측정하는 방법을 체계적으로 학습했습니다.',
      category: '알고리즘',
      date: '2024년 1월 10일',
      readTime: '15분',
      imageUrl: 'https://readdy.ai/api/search-image?query=Algorithm%20complexity%20charts%20and%20mathematical%20formulas%20on%20whiteboard%20with%20computer%20science%20textbooks%20and%20study%20materials&width=400&height=225&seq=8&orientation=landscape',
      content: '알고리즘 시간 복잡도 분석 방법...",
      authorId: 'default'
    },
    {
      id: 'default-4',
      title: 'Next.js 프로젝트 배포 완벽 가이드',
      excerpt: 'Vercel, Netlify, AWS 등 다양한 플랫폼에서 Next.js 애플리케이션을 배포하는 방법과 최적화 팁을 정리했습니다.',
      category: '웹 개발',
      date: '2024년 1월 8일',
      readTime: '10분',
      imageUrl: 'https://readdy.ai/api/search-image?query=Next.js%20web%20development%20deployment%20process%20with%20terminal%20commands%20and%20cloud%20platform%20interfaces%20on%20multiple%20screens&width=400&height=225&seq=9&orientation=landscape',
      content: 'Next.js 프로젝트 배포 방법...',
      authorId: 'default'
    },
    {
      id: 'default-5',
      title: 'Python으로 시작하는 데이터 분석',
      excerpt: 'Pandas, NumPy, Matplotlib을 활용한 실전 데이터 분석 프로젝트를 단계별로 진행해보았습니다.',
      category: '데이터 사이언스',
      date: '2024년 1월 5일',
      readTime: '20분',
      imageUrl: 'https://readdy.ai/api/search-image?query=Python%20data%20analysis%20with%20pandas%20and%20jupyter%20notebook%20showing%20charts%20and%20data%20visualization%20on%20computer%20screen&width=400&height=225&seq=10&orientation=landscape',
      content: 'Python 데이터 분석 방법...',
      authorId: 'default'
    },
    {
      id: 'default-6',
      title: '클린 아키텍처 독서 후기',
      excerpt: '로버트 마틴의 클린 아키텍처를 읽고 정리한 내용입니다. 소프트웨어 설계의 핵심 원칙들을 실무에 적용하는 방법을 배웠습니다.',
      category: '독서 기록',
      date: '2024년 1월 3일',
      readTime: '7분',
      imageUrl: 'https://readdy.ai/api/search-image?query=Clean%20Architecture%20book%20on%20desk%20with%20reading%20notes%20and%20software%20design%20diagrams%2C%20cozy%20study%20environment%20with%20warm%20lighting&width=400&height=225&seq=11&orientation=landscape',
      content: '클린 아키텍처에 대한 설명...',
      authorId: 'default'
    },
    {
      id: 'default-7',
      title: '12월 학습 회고 - 목표 달성과 아쉬움',
      excerpt: '12월 한 달간의 학습 과정을 돌아보며 성취한 것들과 개선할 점들을 정리했습니다. 새해 학습 계획도 함께 세워보았습니다.',
      category: '회고',
      date: '2024년 1월 1일',
      readTime: '5분',
      imageUrl: 'https://readdy.ai/api/search-image?query=Year%20end%20reflection%20with%20calendar%20journal%20and%20goal%20planning%20notes%20on%20wooden%20desk%20with%20coffee%20and%20peaceful%20atmosphere&width=400&height=225&seq=12&orientation=landscape',
      content: '12월 학습 회고...',
      authorId: 'default'
    },
    {
      id: 'default-8',
      title: '머신러닝 기초 개념 정리',
      excerpt: '지도학습, 비지도학습, 강화학습의 차이점과 각각의 알고리즘들을 예제와 함께 정리했습니다.',
      category: '데이터 사이언스',
      date: '2023년 12월 28일',
      readTime: '18분',
      imageUrl: 'https://readdy.ai/api/search-image?query=Machine%20learning%20concepts%20with%20neural%20network%20diagrams%20and%20mathematical%20equations%20on%20computer%20screen%20and%20research%20papers&width=400&height=225&seq=13&orientation=landscape',
      content: '머신러닝 기초 개념...',
      authorId: 'default'
    }
  ];

  useEffect(() => {
    const userPosts = postService.getPosts();
    setAllPosts([...userPosts, ...defaultPosts]);
  }, []);

  const filteredPosts = allPosts.filter(post => {
    const matchesCategory = selectedCategory === '전체' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">공부기록</h1>
          <p className="text-gray-600 text-lg">
            매일의 학습 과정과 깨달음을 기록한 포스트들입니다. 
            총 {allPosts.length}개의 기록이 있습니다.
          </p>
        </div>

        <div className="mb-8 space-y-4">
          <div className="relative max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <i className="ri-search-line w-5 h-5 flex items-center justify-center text-gray-400"></i>
            </div>
            <input
              type="text"
              placeholder="제목이나 내용으로 검색..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-300'
                }`}
              >
                {category}
                {category !== '전체' && (
                  <span className="ml-1 text-xs opacity-75">
                    ({allPosts.filter(post => post.category === category).length})
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {filteredPosts.length === 0 ? (
          <div className="text-center py-16">
            <i className="ri-search-line w-16 h-16 flex items-center justify-center text-gray-400 mx-auto mb-4 text-4xl"></i>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">검색 결과가 없습니다</h3>
            <p className="text-gray-600">다른 키워드로 검색하거나 카테고리를 변경해보세요.</p>
          </div>
        ) : (
          <>
            <div className="mb-6 text-sm text-gray-600">
              {filteredPosts.length}개의 포스트를 찾았습니다
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <PostCard key={post.id} {...post} />
              ))}
            </div>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}
