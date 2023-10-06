import { IconType } from "react-icons";

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
