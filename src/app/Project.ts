export interface Project {
  id: number;
  name: string;
  description: string;
  projectBackground: string;
  staticPreviewDesktop: string;
  staticPreviewTablet: string;
  staticPreviewMobile: string;
  technologiesUsed: Array<string>;
  heroImgDesktop: string;
  imgPreviewDesktop1: string;
  imgPreviewDesktop2: string;
  heroImgTablet: string;
  imgPreviewTablet1: string;
  imgPreviewTablet2: string;
  heroImgMobile: string;
  imgPreviewMobile1: string;
  imgPreviewMobile2: string;
}
