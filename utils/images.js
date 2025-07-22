// takes a glob of assets and a glob of metadata and returns an array of images with metadata
// the metadata is used to get the width and height of the image
// the assets are used to get the url of the image
// the images are returned as an array of objects with the following properties:
// - id: the filename of the image
// - src: the url of the image
// - width: the width of the image
// - height: the height of the image
export const getImagesWithMetadata = (assetsGlob, metadataGlob) => {
  const metadataLookup = {};
  Object.entries(metadataGlob).forEach(([key, metadata]) => {
    const filename = key
      .replace("?w&h", "")
      .split("/")
      .pop()
      .replace(/\.[^/.]+$/, "");
    metadataLookup[filename] = metadata;
  });

  const images = Object.keys(assetsGlob).map((path) => {
    const imageUrl = assetsGlob[path];

    const filename = path
      .split("/")
      .pop()
      .replace(/\.[^/.]+$/, "");

    const metadata = metadataLookup[filename];

    return {
      id: filename,
      src: imageUrl,
      width: metadata?.width,
      height: metadata?.height,
    };
  });

  return images;
};

// combines height and width metadata from two different globs
export const combineAssets = (heights, widths) => {
  return Object.keys(heights).reduce((acc, key) => {
    acc[key] = {
      height: heights[key],
      width: widths[key],
    };
    return acc;
  }, {});
};
