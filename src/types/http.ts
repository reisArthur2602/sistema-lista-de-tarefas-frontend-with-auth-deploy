

export type HttpResponse<T> =
  | { success: true; body: T }
  | { success: false; error: string };
