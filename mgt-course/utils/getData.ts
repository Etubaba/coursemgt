export async function getData(urls: string[]) {
  try {
    const fetchPromises = urls.map((url) => fetch(url));
    const responses = await Promise.all(fetchPromises);
    const responseData = await Promise.all(
      responses.map((response) => response.json())
    );

    return responseData;
  } catch (error: any) {
    return [];
  }
}
