'use client';

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
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
  USER: 'studylog_user',
  POSTS: 'studylog_posts'
};

export const authService = {
  getCurrentUser(): User | null {
    if (typeof window === 'undefined') return null;
    const userData = localStorage.getItem(STORAGE_KEYS.USER);
    return userData ? JSON.parse(userData) : null;
  },

  login(email: string, password: string): Promise<User> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email && password.length >= 6) {
          const user: User = {
            id: 'user_' + Date.now(),
            email,
            name: email.split('@')[0],
            avatar: `https://readdy.ai/api/search-image?query=professional%20portrait%20of%20person%20studying%20with%20books%20and%20laptop%20in%20modern%20workspace&width=100&height=100&seq=${Date.now()}&orientation=squarish`
          };
          localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
          resolve(user);
        } else {
          reject(new Error('이메일과 비밀번호를 확인해주세요.'));
        }
      }, 1000);
    });
  },

  register(email: string, password: string, name: string): Promise<User> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email && password.length >= 6 && name) {
          const user: User = {
            id: 'user_' + Date.now(),
            email,
            name,
            avatar: `https://readdy.ai/api/search-image?query=friendly%20portrait%20of%20$%7Bname%7D%20with%20books%20and%20study%20materials%20in%20bright%20learning%20environment&width=100&height=100&seq=${Date.now()}&orientation=squarish`
          };
          localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
          resolve(user);
        } else {
          reject(new Error('모든 필드를 올바르게 입력해주세요.'));
        }
      }, 1000);
    });
  },

  logout(): void {
    localStorage.removeItem(STORAGE_KEYS.USER);
  }
};

export const postService = {
  getPosts(): Post[] {
    if (typeof window === 'undefined') return [];
    const postsData = localStorage.getItem(STORAGE_KEYS.POSTS);
    return postsData ? JSON.parse(postsData) : [];
  },

  savePost(post: Omit<Post, 'id'>): Post {
    const posts = this.getPosts();
    const newPost: Post = {
      ...post,
      id: 'post_' + Date.now(),
      date: new Date().toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    };
    posts.unshift(newPost);
    localStorage.setItem(STORAGE_KEYS.POSTS, JSON.stringify(posts));
    return newPost;
  },

  updatePost(id: string, updates: Partial<Post>): Post | null {
    const posts = this.getPosts();
    const index = posts.findIndex(p => p.id === id);
    if (index === -1) return null;
    
    posts[index] = { ...posts[index], ...updates };
    localStorage.setItem(STORAGE_KEYS.POSTS, JSON.stringify(posts));
    return posts[index];
  },

  deletePost(id: string): boolean {
    const posts = this.getPosts();
    const filteredPosts = posts.filter(p => p.id !== id);
    localStorage.setItem(STORAGE_KEYS.POSTS, JSON.stringify(filteredPosts));
    return true;
  },

  getPostById(id: string): Post | null {
    const posts = this.getPosts();
    return posts.find(p => p.id === id) || null;
  }
};