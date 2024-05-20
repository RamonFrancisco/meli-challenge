export default function api(path, init) {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const url = new URL(path, baseUrl);

  return fetch(url, init);
}
