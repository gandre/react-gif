const apiKey = '59e30wFtUhM5biZRI8BhVUsBxFAXHG0j';
const limit = 5;

export const getGrifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=${limit}`;

  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  return gifs;
}
