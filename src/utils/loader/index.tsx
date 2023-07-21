import fetchData from '@utils/fetchData';

export default async function loader({ request }: { request: Request }) {
  const url = new URL(request.url);
  const query = url.searchParams.get('q')?.trim();
  let res;
  if (query) {
    res = fetchData(`https://api.jikan.moe/v4/anime?q=${query}`);
  } else {
    res = fetchData('https://api.jikan.moe/v4/top/anime');
  }
  return res;
}
