'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'React', level: 88 },
    { name: 'Next.js', level: 82 },
    { name: 'Python', level: 75 },
    { name: 'Node.js', level: 70 }
  ];

  const stats = [
    { label: '총 포스트', value: '83', icon: 'ri-article-line' },
    { label: '카테고리', value: '6', icon: 'ri-folder-line' },
    { label: '학습 시간', value: '450+', icon: 'ri-time-line' },
    { label: '블로그 운영', value: '2년', icon: 'ri-calendar-line' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main>
        <section className="bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <img
                  src="https://readdy.ai/api/search-image?query=Professional%20young%20developer%20sitting%20at%20modern%20workspace%20with%20multiple%20monitors%20showing%20code%2C%20surrounded%20by%20programming%20books%20and%20plants%20in%20bright%20office%20environment&width=500&height=600&seq=20&orientation=portrait"
                  alt="블로그 운영자"
                  className="w-full max-w-md rounded-2xl shadow-lg object-cover object-top"
                />
              </div>
              
              <div className="lg:w-1/2">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">
                  안녕하세요, 개발자 김학습입니다
                </h1>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  매일 새로운 것을 배우고 성장하는 것을 좋아하는 개발자입니다. 
                  이 블로그는 제가 공부한 내용들을 정리하고, 같은 길을 걷는 
                  다른 개발자들과 지식을 나누기 위해 시작했습니다.
                </p>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  프론트엔드 개발을 주로 하고 있으며, React와 TypeScript를 
                  사용한 웹 애플리케이션 개발에 관심이 많습니다. 
                  최근에는 데이터 사이언스와 머신러닝 분야도 공부하고 있어요.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <a href="mailto:study@example.com" className="flex items-center text-gray-600 hover:text-blue-600 cursor-pointer">
                    <i className="ri-mail-line w-5 h-5 flex items-center justify-center mr-2"></i>
                    study@example.com
                  </a>
                  <a href="https://github.com" className="flex items-center text-gray-600 hover:text-blue-600 cursor-pointer">
                    <i className="ri-github-line w-5 h-5 flex items-center justify-center mr-2"></i>
                    GitHub
                  </a>
                  <a href="https://linkedin.com" className="flex items-center text-gray-600 hover:text-blue-600 cursor-pointer">
                    <i className="ri-linkedin-line w-5 h-5 flex items-center justify-center mr-2"></i>
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">블로그 통계</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-white rounded-lg p-6 text-center shadow-sm">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className={`${stat.icon} w-6 h-6 flex items-center justify-center text-blue-600 text-xl`}></i>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8">기술 스택</h3>
                <div className="space-y-6">
                  {skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-gray-500 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8">학습 목표</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <i className="ri-check-line w-4 h-4 flex items-center justify-center text-green-600"></i>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">React 18 새 기능 마스터</h4>
                      <p className="text-gray-600 text-sm">Concurrent Features, Suspense 등</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <i className="ri-time-line w-4 h-4 flex items-center justify-center text-blue-600"></i>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">머신러닝 기초 완주</h4>
                      <p className="text-gray-600 text-sm">Python, scikit-learn 활용</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <i className="ri-time-line w-4 h-4 flex items-center justify-center text-blue-600"></i>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">AWS 클라우드 자격증 취득</h4>
                      <p className="text-gray-600 text-sm">Solutions Architect Associate</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <i className="ri-time-line w-4 h-4 flex items-center justify-center text-blue-600"></i>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">주 2회 이상 포스팅</h4>
                      <p className="text-gray-600 text-sm">꾸준한 학습 기록 유지</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-blue-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">함께 소통해요</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  궁금한 것이 있거나 함께 공부하고 싶은 주제가 있다면 언제든지 연락주세요. 
                  피드백이나 제안사항도 환영합니다.
                </p>
                
                <form className="max-w-md mx-auto space-y-4" id="contact-form">
                  <input
                    type="text"
                    name="name"
                    placeholder="이름"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="이메일"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                  <textarea
                    name="message"
                    placeholder="메시지"
                    rows={4}
                    maxLength={500}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    required
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    메시지 보내기
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}