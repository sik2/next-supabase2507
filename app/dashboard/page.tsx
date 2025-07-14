"use client";

import { authService, Post, postService, User } from "@/lib/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const loadUser = async () => {
      const currentUser = await authService.getCurrentUser();
      if (!currentUser) {
        router.push("/login");
        return;
      }

      setUser(currentUser);
      const userPosts = postService
        .getPosts()
        .filter((post) => post.authorId === currentUser.id);
      setPosts(userPosts);
      setIsLoading(false);
    };

    loadUser();
  }, [router]);

  const handleLogout = () => {
    authService.logout();
    router.push("/");
  };

  const handleDeletePost = (postId: string) => {
    if (window.confirm("이 포스트를 삭제하시겠습니까?")) {
      postService.deletePost(postId);
      setPosts(posts.filter((post) => post.id !== postId));
    }
  };

  if (isLoading) {
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/">
              <span
                className="text-2xl font-bold text-blue-600 cursor-pointer"
                style={{ fontFamily: "var(--font-pacifico)" }}
              >
                StudyLog
              </span>
            </Link>

            <div className="flex items-center space-x-4">
              <Link
                href="/write"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap"
              >
                새 글 작성
              </Link>
              <div className="flex items-center space-x-3">
                <span className="text-gray-700 font-medium">{user?.email}</span>
                <button
                  onClick={handleLogout}
                  className="text-gray-500 hover:text-gray-700 cursor-pointer"
                >
                  <i className="ri-logout-box-line w-5 h-5 flex items-center justify-center"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">대시보드</h1>
          <p className="text-gray-600">
            안녕하세요, {user?.email}님! 공부기록을 관리해보세요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center">
              <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-lg">
                <i className="ri-article-line w-6 h-6 flex items-center justify-center text-blue-600"></i>
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold text-gray-900">
                  {posts.length}
                </p>
                <p className="text-gray-600">총 포스트</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center">
              <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-lg">
                <i className="ri-calendar-line w-6 h-6 flex items-center justify-center text-green-600"></i>
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold text-gray-900">
                  {
                    posts.filter((post) => {
                      const today = new Date();
                      const postDate = new Date(post.date);
                      return today.toDateString() === postDate.toDateString();
                    }).length
                  }
                </p>
                <p className="text-gray-600">오늘 작성</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center">
              <div className="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-lg">
                <i className="ri-bookmark-line w-6 h-6 flex items-center justify-center text-purple-600"></i>
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold text-gray-900">
                  {new Set(posts.map((post) => post.category)).size}
                </p>
                <p className="text-gray-600">카테고리</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-900">내 포스트</h2>
              <Link
                href="/write"
                className="text-blue-600 hover:text-blue-700 cursor-pointer"
              >
                새 글 작성하기 →
              </Link>
            </div>
          </div>

          {posts.length === 0 ? (
            <div className="p-12 text-center">
              <i className="ri-article-line w-16 h-16 flex items-center justify-center text-gray-400 mx-auto mb-4 text-4xl"></i>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                첫 번째 공부기록을 작성해보세요!
              </h3>
              <p className="text-gray-600 mb-6">
                학습한 내용을 기록하고 정리해보세요.
              </p>
              <Link
                href="/write"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap"
              >
                글 작성하기
              </Link>
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="p-6 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                          {post.category}
                        </span>
                        <span className="text-sm text-gray-500">
                          {post.date}
                        </span>
                        <span className="text-sm text-gray-500">
                          • {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-lg font-medium text-gray-900 mb-1">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {post.excerpt}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2 ml-4">
                      <Link
                        href={`/edit/${post.id}`}
                        className="p-2 text-gray-400 hover:text-blue-600 cursor-pointer"
                      >
                        <i className="ri-edit-line w-4 h-4 flex items-center justify-center"></i>
                      </Link>
                      <button
                        onClick={() => handleDeletePost(post.id)}
                        className="p-2 text-gray-400 hover:text-red-600 cursor-pointer"
                      >
                        <i className="ri-delete-bin-line w-4 h-4 flex items-center justify-center"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
