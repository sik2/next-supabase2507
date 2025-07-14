"use client";

import { supabase } from "./supabase";

export interface User {
  id: string;
  email: string;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  imageUrl: string;
  authorId: string;
}

const STORAGE_KEYS = {
  POSTS: "studylog_posts",
};

export const authService = {
  async getCurrentUser(): Promise<User | null> {
    try {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();

      if (error || !user) {
        return null;
      }

      return {
        id: user.id,
        email: user.email || "",
      };
    } catch (error) {
      console.error("사용자 정보 가져오기 실패:", error);
      return null;
    }
  },

  async login(email: string, password: string): Promise<User> {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        throw new Error(error.message);
      }

      if (!data.user) {
        throw new Error("로그인에 실패했습니다.");
      }

      return {
        id: data.user.id,
        email: data.user.email || "",
      };
    } catch (error: any) {
      throw new Error(error.message || "로그인에 실패했습니다.");
    }
  },

  async register(email: string, password: string): Promise<User> {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        throw new Error(error.message);
      }

      if (!data.user) {
        throw new Error("회원가입에 실패했습니다.");
      }

      return {
        id: data.user.id,
        email: data.user.email || "",
      };
    } catch (error: any) {
      throw new Error(error.message || "회원가입에 실패했습니다.");
    }
  },

  async logout(): Promise<void> {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        throw new Error(error.message);
      }
    } catch (error: any) {
      throw new Error(error.message || "로그아웃에 실패했습니다.");
    }
  },

  // 인증 상태 변경 감지
  onAuthStateChange(callback: (user: User | null) => void) {
    return supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === "SIGNED_IN" && session?.user) {
        const user: User = {
          id: session.user.id,
          email: session.user.email || "",
        };
        callback(user);
      } else if (event === "SIGNED_OUT") {
        callback(null);
      }
    });
  },
};

export const postService = {
  getPosts(): Post[] {
    if (typeof window === "undefined") return [];
    const postsData = localStorage.getItem(STORAGE_KEYS.POSTS);
    return postsData ? JSON.parse(postsData) : [];
  },

  savePost(post: Omit<Post, "id">): Post {
    const posts = this.getPosts();
    const newPost: Post = {
      ...post,
      id: "post_" + Date.now(),
      date: new Date().toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    };
    posts.unshift(newPost);
    localStorage.setItem(STORAGE_KEYS.POSTS, JSON.stringify(posts));
    return newPost;
  },

  updatePost(id: string, updates: Partial<Post>): Post | null {
    const posts = this.getPosts();
    const index = posts.findIndex((p) => p.id === id);
    if (index === -1) return null;

    posts[index] = { ...posts[index], ...updates };
    localStorage.setItem(STORAGE_KEYS.POSTS, JSON.stringify(posts));
    return posts[index];
  },

  deletePost(id: string): boolean {
    const posts = this.getPosts();
    const filteredPosts = posts.filter((p) => p.id !== id);
    localStorage.setItem(STORAGE_KEYS.POSTS, JSON.stringify(filteredPosts));
    return true;
  },

  getPostById(id: string): Post | null {
    const posts = this.getPosts();
    return posts.find((p) => p.id === id) || null;
  },
};
