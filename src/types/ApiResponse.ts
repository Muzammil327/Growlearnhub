export interface ApiResponse<T> {
  statusbar: number;
  message?: string; // Make sure 'message' is part of the response
  data?: T; // Optional data field
  error?: string; // Optional error field
}

export interface Session {
  userRole: string;
  userId: number;
  userEmail: string;
  userUsername: string;
}
