import { getEntry } from 'astro:content';

export const getRamen = async (name: string) => {
  return await getEntry('ramen', name);
};
