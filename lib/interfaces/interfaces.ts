export interface State<T> {
  loading: boolean;
  error: Error | null;
  data: T | null;
}

interface Error {
  status: number;
  statusText: string;
  response: object | null;
}
