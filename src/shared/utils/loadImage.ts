/**
 * Загружает изображение и дожидается его декодирования.
 * Возвращает промис, который резолвится после успешной загрузки.
 * Если загрузка или декодирование неудачны — промис реджектится.
 * @param src Путь к изображению
 * @returns Promise<void>
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
