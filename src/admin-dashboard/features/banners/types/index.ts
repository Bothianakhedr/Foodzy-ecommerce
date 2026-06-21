import type { BannersColumnsType } from "../components/BannerColumns";

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

  export type DropdownActionsType = {
  onDelete: (id: string) => void;
  onEdit: (bannerId: string) => void;
  banner: BannersColumnsType;
};