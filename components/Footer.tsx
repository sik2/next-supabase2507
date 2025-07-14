'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">StudyLog</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              매일의 공부와 성장을 기록하는 개인 블로그입니다. 
              새로운 지식과 경험을 나누며 함께 배워나가요.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">주요 카테고리</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/categories/programming" className="text-gray-600 hover:text-blue-600 cursor-pointer">프로그래밍</a></li>
              <li><a href="/categories/web-development" className="text-gray-600 hover:text-blue-600 cursor-pointer">웹 개발</a></li>
              <li><a href="/categories/data-science" className="text-gray-600 hover:text-blue-600 cursor-pointer">데이터 사이언스</a></li>
              <li><a href="/categories/book-review" className="text-gray-600 hover:text-blue-600 cursor-pointer">독서 기록</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">연락처</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center text-gray-600">
                <i className="ri-mail-line w-4 h-4 flex items-center justify-center mr-2"></i>
                study@example.com
              </div>
              <div className="flex items-center text-gray-600">
                <i className="ri-github-line w-4 h-4 flex items-center justify-center mr-2"></i>
                github.com/studylog
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2024 StudyLog. 모든 권리 보유.
          </p>
        </div>
      </div>
    </footer>
  );
}