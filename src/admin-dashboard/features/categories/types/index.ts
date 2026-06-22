export type CategoriesColumnsType = {
  _id: string;
  name: string;
  description: string;
  icon: string;
  isActive: boolean;
};

export type CategoryFormInput = {
  name: string;
  description: string;
  icon: FileList;
  isActive: boolean;
};
export type CategoryFormProps = {
  selectedCategory?: CategoriesColumnsType;
  setIsModalOpen: (open: boolean) => void;
};
