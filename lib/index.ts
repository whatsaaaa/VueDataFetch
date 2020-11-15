import Axios from "axios";
import { ComputedRef, reactive, watchEffect } from "vue";

import { State } from "./interfaces/interfaces";

export default function vueFetch<T>(url: ComputedRef<string>) {
  const state = reactive<State<T>>({
    loading: false,
    error: null,
    data: null,
  });

  async function get() {
    state.loading = true;
    state.error = null;
    state.data = null;

    try {
      const response = await Axios({
        method: "GET",
        url: url.value,
      });
      state.data = response.data;
    } catch (err) {
      state.error = {
        status: err.response.status,
        statusText: err.response.statusText,
        response: err.response.data,
      };
    }
    state.loading = false;
  }

  watchEffect(() => {
    get();
  });

  return state;
}
