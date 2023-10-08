export async function urlsToBlob(imageUrl: string): Promise<Blob[]> {
  const imageBlobs: Blob[] = [];
  try {
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    imageBlobs.push(blob);
  } catch (error) {
    console.error(`Error fetching ${imageUrl}:`, error);
  }

  return imageBlobs;
}
