'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function CategoriesPage() {
  const categories = [
    {
      name: '프로그래밍',
      count: 24,
      icon: 'ri-code-line',
      color: 'bg-blue-100 text-blue-800',
      description: 'React, TypeScript, JavaScript 등 프로그래밍 언어와 프레임워크 학습 기록',
      tags: ['React', 'TypeScript', 'JavaScript', 'Node.js', 'Python'],
      imageUrl: 'https://readdy.ai/api/search-image?query=Programming%20workspace%20with%20multiple%20monitors%20showing%20colorful%20code%20syntax%20highlighting%2C%20modern%20development%20environment%20with%20coding%20books%20and%20reference%20materials&width=300&height=200&seq=14&orientation=landscape'
    },
    {
      name: '웹 개발',
      count: 18,
      icon: 'ri-global-line',
      color: 'bg-green-100 text-green-800',
      description: '프론트엔드와 백엔드 웹 개발 기술, 배포, 성능 최적화 등',
      tags: ['Next.js', 'CSS', 'HTML', 'API', 'Deployment'],
      imageUrl: 'https://readdy.ai/api/search-image?query=Web%20development%20process%20with%20responsive%20website%20design%20on%20multiple%20devices%20and%20browser%20development%20tools%20open%20on%20computer%20screen&width=300&height=200&seq=15&orientation=landscape'
    },
    {
      name: '알고리즘',
      count: 12,
      icon: 'ri-function-line',
      color: 'bg-purple-100 text-purple-800',
      description: '자료구조, 알고리즘 문제 해결 과정과 시간복잡도 분석',
      tags: ['자료구조', '시간복잡도', '코딩테스트', '문제해결'],
      imageUrl: 'https://readdy.ai/api/search-image?query=Algorithm%20study%20with%20flowcharts%20data%20structures%20diagrams%20and%20complexity%20analysis%20charts%20on%20whiteboard%20and%20computer%20screen&width=300&height=200&seq=16&orientation=landscape'
    },
    {
      name: '데이터 사이언스',
      count: 8,
      icon: 'ri-bar-chart-line',
      color: 'bg-orange-100 text-orange-800',
      description: '데이터 분석, 머신러닝, 통계학 학습 내용과 실습 프로젝트',
      tags: ['Python', 'Pandas', 'Machine Learning', '데이터 분석'],
      imageUrl: 'https://readdy.ai/api/search-image?query=Data%20science%20workspace%20with%20jupyter%20notebook%20showing%20data%20visualizations%20charts%20and%20statistical%20analysis%20with%20python%20code&width=300&height=200&seq=17&orientation=landscape'
    },
    {
      name: '독서 기록',
      count: 15,
      icon: 'ri-book-line',
      color: 'bg-pink-100 text-pink-800',
      description: '기술서적, 개발 관련 도서 독후감과 핵심 내용 정리',
      tags: ['기술서적', '독후감', '개발도서', '학습법'],
      imageUrl: 'https://readdy.ai/api/search-image?query=Cozy%20reading%20corner%20with%20programming%20and%20computer%20science%20books%20stacked%20on%20wooden%20desk%20with%20reading%20notes%20and%20warm%20lighting&width=300&height=200&seq=18&orientation=landscape'
    },
    {
      name: '회고',
      count: 6,
      icon: 'ri-lightbulb-line',
      color: 'bg-yellow-100 text-yellow-800',
      description: '월간, 분기별 학습 회고와 성장 과정 기록',
      tags: ['학습회고', '성장기록', '목표설정', '자기계발'],
      imageUrl: 'https://readdy.ai/api/search-image?query=Personal%20reflection%20journal%20with%20goal%20planning%20notes%20calendar%20and%20progress%20tracking%20charts%20on%20organized%20desk%20with%20peaceful%20atmosphere&width=300&height=200&seq=19&orientation=landscape'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">학습 카테고리</h1>
          <p className="text-gray-600 text-lg max-w-3xl">
            다양한 분야의 학습 내용을 체계적으로 분류했습니다. 
            각 카테고리별로 정리된 포스트들을 통해 단계별로 학습해보세요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <div key={category.name} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200">
              <div className="aspect-video overflow-hidden">
                <img
                  src={category.imageUrl}
                  alt={category.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className={`inline-flex items-center justify-center w-10 h-10 rounded-full ${category.color} mr-3`}>
                      <i className={`${category.icon} text-lg`}></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{category.name}</h3>
                      <p className="text-gray-500 text-sm">{category.count}개 포스트</p>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {category.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {category.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Link href={`/posts?category=${encodeURIComponent(category.name)}`}>
                  <button className="w-full bg-gray-900 text-white py-2 px-4 rounded-lg font-medium hover:bg-gray-800 transition-colors cursor-pointer whitespace-nowrap">
                    포스트 보기
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl p-8 shadow-sm border border-gray-200">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-add-line w-8 h-8 flex items-center justify-center text-blue-600 text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">새로운 카테고리 제안</h3>
            <p className="text-gray-600 mb-6">
              다루었으면 하는 새로운 주제나 카테고리가 있다면 알려주세요.
            </p>
            <Link href="/about">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap">
                제안하기
              </button>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}