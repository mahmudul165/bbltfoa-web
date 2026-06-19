// Common application types
// Extend these as needed for your Supabase schema

export interface User {
  id: string;
  email: string;
  created_at: string;
  updated_at?: string;
  full_name?: string;
  avatar_url?: string;
}

export interface ApiResponse<T> {
  data: T | null;
  error: string | null;
}

export interface PaginatedResponse<T> {
  data: T[];
  count: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

// Form types
export interface LoginFormValues {
  email: string;
  password: string;
}

export interface RegisterFormValues {
  email: string;
  password: string;
  confirmPassword: string;
  full_name?: string;
}
