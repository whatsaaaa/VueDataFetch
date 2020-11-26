<h1 align="center">VueDataFetch - A module that is used to fetch data from any backend</h1>

<p align="center">
  <sub>Made by <a href="https://github.com/whatsaaaa">@whatsaaaa</a>
</p>

## Installation

```ssh
npm install @whatsaaaaa/vue-data-fetch --save
```

## Usage

With `vueFetch` method you can always fetch the data from any backend and get a nice structured response that can be used to enhance your application UX. This is achieved by using `loading`, `data` and `error` properties, so you can show the loading, error state and finally your data.

### Vue with JavaScript

```javascript
import vueFetch from "@whatsaaaaa/vue-data-fetch/dist";
...
setup() {
    const url = computed(() => "https://jsonplaceholder.typicode.com/posts");
    const response = vueFetch(url);
    console.log(response);
}
```

When the request is sent, initial values for `response` variable are:

```json
{
  "loading": true,
  "data": null,
  "error": null
}
```

If the request was successful values for `response` variable are:

```json
{
  "loading": false,
  "data": [
    {
      "userId": 1,
      "id": 1,
      "title": "qui est esse",
      "body": "lorem ipsum dolor sit amet"
    }
    ...
  ],
  "error": null
}
```

If the request failed, values for `response` variable are:

```json
{
  "loading": false,
  "data": null,
  "error": {
    "status": 404,
    "statusText": "Not Found",
    "response": "Requested resource not found"
  }
}
```

### Vue with TypeScript

```typescript
import vueFetch from "@whatsaaaaa/vue-data-fetch/dist";
...
interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
}
...
const url = computed(() => "https://jsonplaceholder.typicode.com/posts");
const response = vueFetch<Posts[]>(url);
console.log(response);
```

If you are using TypeScript in your Vue project you can set vueFetch<T> type.

### Objects

- `response`:

```
{
  loading: boolean;
  error: Error | null;
  data: T | null;
}
```

- `Error`:

```
 {
  status: number;
  statusText: string;
  response: object | null;
}
```

## Dependencies

- `Vue 3`: ^3.0.2
- `Axios`: ^0.21.0
