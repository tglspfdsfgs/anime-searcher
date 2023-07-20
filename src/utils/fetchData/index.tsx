import { ResObect } from '@interfaces/response';

export default async function fetchData(url: string): Promise<ResObect | null> {
  const response = await fetch(url);
  if (response.statusText === 'OK') return await response.json();
  return null;
}
