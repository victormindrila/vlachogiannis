import { getImagesWithMetadata, combineAssets } from "./images";

/********
 * Full Images
 *********/

const fullImageAssets = import.meta.glob(
  "../assets/images/gallery/**/*.{jpg,jpeg,png}",
  { eager: true, import: "default" }
);
const fullImagesHeights = import.meta.glob(
  "../assets/images/gallery/**/*.{jpg,jpeg,png}",
  { eager: true, query: "as=metadata", import: "height" }
);
const fullImagesWidths = import.meta.glob(
  "../assets/images/gallery/**/*.{jpg,jpeg,png}",
  { eager: true, query: "as=metadata", import: "width" }
);

const previewImageAssets = import.meta.glob(
  "../assets/images/gallery/preview/*.{jpg,jpeg,png}",
  { eager: true, import: "default" }
);

const previewImagesHeights = import.meta.glob(
  "../assets/images/gallery/preview/*.{jpg,jpeg,png}",
  {
    eager: true,
    query: "as=metadata",
    import: "height",
  }
);

const previewImagesWidths = import.meta.glob(
  "../assets/images/gallery/preview/*.{jpg,jpeg,png}",
  { eager: true, query: "as=metadata", import: "width" }
);

const fullImagesMetadata = combineAssets(fullImagesHeights, fullImagesWidths);

const previewImagesMetadata = combineAssets(
  previewImagesHeights,
  previewImagesWidths
);
export const fullImages = getImagesWithMetadata(
  { ...previewImageAssets, ...fullImageAssets },
  { ...previewImagesMetadata, ...fullImagesMetadata }
);

/********
 * Thumbnails
 *********/

const previewThumbnails = import.meta.glob(
  "../assets/images/gallery/preview/*.{jpg,jpeg,png}",
  { eager: true, query: "w=360&q=70", import: "default" }
);

const previewThumbnailHeights = import.meta.glob(
  "../assets/images/gallery/preview/*.{jpg,jpeg,png}",
  { eager: true, query: "as=metadata&w=360&q=70", import: "height" }
);

const previewThumbnailWidths = import.meta.glob(
  "../assets/images/gallery/preview/*.{jpg,jpeg,png}",
  {
    eager: true,
    query: "as=metadata&w=360&q=70",
    import: "width",
  }
);

const previewThumbnailMetadata = combineAssets(
  previewThumbnailHeights,
  previewThumbnailWidths
);

export const thumbnails = getImagesWithMetadata(
  previewThumbnails,
  previewThumbnailMetadata
);
