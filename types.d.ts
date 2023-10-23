declare module "colorthief" {
  export default class ColorThief {
    getColor: (img: HTMLImageElement | null, quality: number | null) => RGB;
    getPalette: (
      img: HTMLImageElement | null,
      colorCount: number | null,
      quality: number | null
    ) => RGB[];
  }
}

type RGB = [number, number, number];
