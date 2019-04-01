export const isImage = (url) => {
  const POSSIBLE_IMAGE_TYPES = ["GIF","JPEG","JPG","PNG"];
  return url.split('.').find(e =>  {
    return POSSIBLE_IMAGE_TYPES.includes(e.toUpperCase()) ? true: false;
  });
}
