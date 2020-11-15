import { ComputedRef } from "vue";
export default function vueFetch<T>(url: ComputedRef<string>): {
    loading: boolean;
    error: {
        status: number;
        statusText: string;
        response: (object & {}) | null;
    } | null;
    data: import("vue").UnwrapRef<T> | null;
};
