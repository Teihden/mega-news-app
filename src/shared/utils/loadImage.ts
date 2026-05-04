/**
 * Loads an image and waits for it to finish decoding.
 * Resolves after the image has been loaded successfully.
 * Rejects if loading or decoding fails.
 * @param src - Image source path.
 * @returns Promise that resolves when the image is ready.
 */
export const loadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (!src) {
      reject(new Error("[loadImage]: src is empty"));
      return;
    }

    const img = new Image();
    img.src = src;

    // eslint-disable-next-line jsdoc/require-jsdoc
    img.onload = () => {
      if (img.decode) {
        img
          .decode()
          .then(resolve)
          .catch(reject);
      } else {
        resolve();
      }
    };

    // eslint-disable-next-line jsdoc/require-jsdoc
    img.onerror = () => {
      reject(new Error(`[loadImage]: failed to load image: ${src}`));
    };
  });
};
