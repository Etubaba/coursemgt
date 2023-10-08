import { IconType } from "react-icons";
import { CommentType } from ".";

export type searchInputType = {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
};

export type EmptyValueType = {
  name: String;
  title: String;
  Icon: IconType;
  style?: String;
};

export type MenuProps = {
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
  yes: boolean;
};

export type InputProps = {
  type?: string;
  id?: string;
  placeholder?: string;
  style?: string;
  value?: string;
  func?: any;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
};

export type ButtonProps = {
  text: String;
  loading?: boolean;
  onClick?: () => void;
};

export type CommentCompoType = {
  commentList: CommentType[];
  postId: string;
  refetch: () => any;
};

export type SideBarLinkType = {
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  href: string;
  text: string;
  iconName: React.ReactElement;
};

export type SideBarType = {
  setShow?: React.Dispatch<React.SetStateAction<boolean>>;
  show?: boolean;
};

export interface ModalType {
  children: React.ReactNode;
  title?: string;
  open: boolean;
  onClose: any;
}

export interface PreviewImgType {
  preview: string;
  file: Blob[];
  index: number;
  setPreview: React.Dispatch<React.SetStateAction<string | null>>;
  setFile: React.Dispatch<React.SetStateAction<Blob[]>>;
}
