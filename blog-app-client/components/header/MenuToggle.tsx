import { useNavToggle } from "@/store";
import { MenuProps } from "@/types/component";

const Toggle = ({ setChecked, yes }: MenuProps): JSX.Element => {
  const setNavToggle = useNavToggle((state) => state.setShow);
  const show = useNavToggle((state) => state.show);
  return (
    <label
      className="relative p-5 flex justify-center items-center cursor-pointer"
      htmlFor="checkbox"
    >
      <input
        id="checkbox"
        checked={yes}
        onChange={(e) => {
          setChecked(e.target.checked);
          setNavToggle(!show);
        }}
        type="checkbox"
        className="hidden"
      />
      <span className="absolute w-5 h-[2px]  bg-textcolor rounded-md line-top"></span>
      <span className="absolute w-5 h-[2px]  bg-textcolor rounded-md line-middle"></span>
      <span className="absolute w-5 h-[2px]  bg-textcolor rounded-md line-bottom"></span>
    </label>
  );
};

export default Toggle;
