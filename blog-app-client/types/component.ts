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
