'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PostCard from '@/components/PostCard';
import Link from 'next/link';

export default function Home() {
  const recentPosts = [
    {
      id: 'react-hooks-study',
      title: 'React Hooks 완전 정복하기',
      excerpt: 'useState, useEffect부터 커스텀 훅까지, React Hooks의 모든 것을 정리했습니다. 실제 프로젝트에서 사용한 경험을 바탕으로 최적화 팁도 함께 공유합니다.',
      category: '프로그래밍',
      date: '2024년 1월 15일',
      readTime: '8분',
      imageUrl: 'https://readdy.ai/api/search-image?query=Modern%20developer%20studying%20React%20programming%20on%20multiple%20monitors%20in%20a%20clean%20minimalist%20workspace%20with%20soft%20natural%20lighting%20and%20coding%20books%20on%20desk%2C%20peaceful%20study%20environment&width=400&height=225&seq=1&orientation=landscape'
    },
    {
      id: 'typescript-advanced',
      title: 'TypeScript 고급 타입 시스템 이해하기',
      excerpt: '제네릭, 조건부 타입, 템플릿 리터럴 타입 등 TypeScript의 고급 기능들을 실무 예제와 함께 설명합니다. 타입 안전성을 높이는 방법을 알아보세요.',
      category: '프로그래밍',
      date: '2024년 1월 12일',
      readTime: '12분',
      imageUrl: 'https://readdy.ai/api/search-image?query=Typescript%20programming%20code%20on%20screen%20with%20type%20definitions%20and%20interfaces%2C%20modern%20development%20setup%20with%20clean%20organized%20workspace%20and%20programming%20reference%20materials&width=400&height=225&seq=2&orientation=landscape'
    },
    {
      id: 'algorithm-complexity',
      title: '알고리즘 시간 복잡도 분석 마스터하기',
      excerpt: 'Big O 표기법부터 실제 코드 분석까지, 알고리즘의 효율성을 측정하는 방법을 체계적으로 학습했습니다. 실전 문제 해결 과정도 포함되어 있습니다.',
      category: '알고리즘',
      date: '2024년 1월 10일',
      readTime: '15분',
      imageUrl: 'https://readdy.ai/api/search-image?query=Algorithm%20complexity%20analysis%20with%20mathematical%20formulas%20and%20graph%20charts%20on%20whiteboard%2C%20computer%20science%20study%20materials%20and%20coding%20notebooks%20in%20bright%20study%20room&width=400&height=225&seq=3&orientation=landscape'
    },
    {
      id: 'clean-code-principles',
      title: '클린 코드 원칙과 실전 적용',
      excerpt: '읽기 좋고 유지보수가 쉬운 코드를 작성하는 방법을 정리했습니다. 네이밍 컨벤션, 함수 설계, 주석 작성법 등 실무에서 바로 적용할 수 있는 팁들을 공유합니다.',
      category: '프로그래밍',
      date: '2024년 1월 8일',
      readTime: '10분',
      imageUrl: 'https://readdy.ai/api/search-image?query=Clean%20organized%20code%20on%20multiple%20computer%20screens%20showing%20well%20structured%20programming%20with%20syntax%20highlighting%2C%20modern%20developer%20workspace%20with%20coding%20best%20practices%20books&width=400&height=225&seq=4&orientation=landscape'
    }
  ];

  const categories = [
    { name: '프로그래밍', count: 24, icon: 'ri-code-line', color: 'bg-blue-100 text-blue-800' },
    { name: '웹 개발', count: 18, icon: 'ri-global-line', color: 'bg-green-100 text-green-800' },
    { name: '알고리즘', count: 12, icon: 'ri-function-line', color: 'bg-purple-100 text-purple-800' },
    { name: '데이터 사이언스', count: 8, icon: 'ri-bar-chart-line', color: 'bg-orange-100 text-orange-800' },
    { name: '독서 기록', count: 15, icon: 'ri-book-line', color: 'bg-pink-100 text-pink-800' },
    { name: '회고', count: 6, icon: 'ri-lightbulb-line', color: 'bg-yellow-100 text-yellow-800' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main>
        <section 
          className="relative bg-gradient-to-br from-blue-600 to-purple-700 text-white"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(37, 99, 235, 0.9), rgba(147, 51, 234, 0.9)), url('https://readdy.ai/api/search-image?query=Inspiring%20study%20environment%20with%20books%20notebooks%20and%20laptop%20on%20wooden%20desk%20near%20large%20window%20with%20natural%20light%2C%20peaceful%20learning%20atmosphere%20with%20plants%20and%20organized%20study%20materials&width=1200&height=600&seq=5&orientation=landscape')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                매일의 학습을<br />
                기록하고 성장하기
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                프로그래밍, 알고리즘, 데이터 사이언스 등 다양한 분야의 공부 내용을 정리하고 
                경험을 나누는 개인 블로그입니다. 함께 배우고 성장해나가요.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/posts">
                  <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors cursor-pointer whitespace-nowrap">
                    공부기록 보기
                  </button>
                </Link>
                <Link href="/about">
                  <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors cursor-pointer whitespace-nowrap">
                    블로그 소개
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">최근 공부기록</h2>
              <p className="text-gray-600">새로 업데이트된 학습 내용을 확인해보세요</p>
            </div>
            <Link href="/posts">
              <button className="text-blue-600 font-medium hover:text-blue-700 cursor-pointer whitespace-nowrap">
                전체 보기 →
              </button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recentPosts.map((post) => (
              <PostCard key={post.id} {...post} />
            ))}
          </div>
        </section>

        <section className="bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">학습 카테고리</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                다양한 분야의 학습 내용을 체계적으로 정리했습니다. 
                관심 있는 주제를 선택해서 깊이 있게 공부해보세요.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {categories.map((category) => (
                <Link key={category.name} href={`/categories/${category.name}`}>
                  <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow cursor-pointer">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${category.color} mb-4`}>
                      <i className={`${category.icon} text-xl`}></i>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.name}</h3>
                    <p className="text-gray-600 text-sm">{category.count}개 포스트</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-blue-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  함께 공부하고 성장해요
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  새로운 포스트가 업데이트될 때마다 알림을 받고 싶으시다면 구독해주세요. 
                  질문이나 의견이 있으시면 언제든지 연락주세요.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap">
                    구독하기
                  </button>
                  <Link href="/about">
                    <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors cursor-pointer whitespace-nowrap">
                      연락하기
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}