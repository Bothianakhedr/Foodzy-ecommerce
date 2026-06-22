export type BannersColumnsType = {
  title: string;
  image: string;
  placement: "home_top" | "home_bottom";
  isActive: boolean | string;
  _id: string;
};
  export type BannerFormInput = {
   title: string;
   placement: string;
   isActive: boolean;
   image?: FileList | string;
 };
  export type BannerFormProps = {
   setIsModalOpen: (open: boolean) => void;
   bannerInfo?: BannersColumnsType;
 };

 
