import { useState } from "react";
import { ChromePicker } from "react-color";
import FemaleIcon from "/image/femaleIcon.png";
import FemaleIconFocus from "/image/femaleIcon_focus.png";
import MaleIcon from "/image/maleIcon.png";
import MaleIconFocus from "/image/maleIcon_focus.png";
import useAvatarStore from "../stores/useAvatarStore";

export default function CostumeForm() {
  // const [avatar, setAvatar] = useState({
  //   hair: "",
  //   skin: "",
  //   bottom: "",
  //   top: "",
  //   gender: "",
  // });
  const { avatar, setAvatar } = useAvatarStore();

  const [pickerRole, setPickerRole] = useState("hair");
  const [genderRole, setGenderRole] = useState("male");

  const checkPickleRole = () => {
    if (pickerRole === "hair") {
      return avatar.hair;
    }
    if (pickerRole === "skin") {
      return avatar.skin;
    }
    if (pickerRole === "bottom") {
      return avatar.bottom;
    }
    if (pickerRole === "top") {
      return avatar.top;
    } else {
      console.log("error picker");
    }
  };

  const checkPickleRoleOnChange = (color) => {
    if (pickerRole === "hair") {
      return setAvatar({ ...avatar, hair: color.hex });
    }
    if (pickerRole === "skin") {
      return setAvatar({ ...avatar, skin: color.hex });
    }
    if (pickerRole === "bottom") {
      return setAvatar({ ...avatar, bottom: color.hex });
    }
    if (pickerRole === "top") {
      return setAvatar({ ...avatar, top: color.hex });
    } else {
      console.log("error picker");
    }
  };
  console.log(avatar);

  const handleSubmit = () => {
    console.log(avatar);
  };
  console.log(pickerRole);
  return (
    <form
      onSubmit={handleSubmit}
      className="font-slab flex flex-col items-center"
    >
      <div className="w-full flex flex-row flex-wrap px-20 py-6 h-auto gap-y-8">
        <div className="w-full flex flex-row justify-between">
          <button
            type="button"
            className={` ${genderRole === "female"
                ? "bg-orange-500 rounded-xl w-16 h-16 flex drop-shadow-md"
                : "bg-white w-16 h-16 rounded-xl flex drop-shadow-md"
              }`}
            onClick={() => {
              setGenderRole("female");
              setAvatar({ ...avatar, gender: "female" });
            }}
          >
            <img
              src={genderRole === "female" ? FemaleIconFocus : FemaleIcon}
              alt="femaleIcon "
              className="object-cover w-10 m-auto"
            ></img>
          </button>

          <button
            type="button"
            className={` ${genderRole === "male"
                ? "bg-orange-500 rounded-xl w-16 h-16 flex drop-shadow-md"
                : "bg-white w-16 h-16 rounded-xl flex drop-shadow-md"
              }`}
            onClick={() => {
              setGenderRole("male");
              setAvatar({ ...avatar, gender: "male" });
            }}
          >
            <img
              src={genderRole === "male" ? MaleIconFocus : MaleIcon}
              alt="maleIcon "
              className="object-cover w-10 m-auto"
            ></img>
          </button>
        </div>
        <div className="w-full flex flex-row justify-between">
          <div className=" flex flex-col items-center">
            <button
              type="button"
              style={{ backgroundColor: `${avatar.hair}` }}
              className={` ${pickerRole === "hair"
                  ? "w-16 h-16 rounded-xl border-4 border-orange-500 drop-shadow-md"
                  : "w-16 h-16 rounded-xl drop-shadow-md border-4 border-gray-200"
                }`}
              onClick={() => setPickerRole("hair")}
            ></button>
            <label
              htmlFor="hair"
              className="text-md block text-gray-700 font-bold mt-1"
            >
              Hair
            </label>
          </div>

          <div className="flex flex-col items-center">
            <button
              type="button"
              style={{ backgroundColor: `${avatar.skin}` }}
              className={` ${pickerRole === "skin"
                  ? "w-16 h-16 rounded-xl border-4 border-orange-500 drop-shadow-md bg-red-200"
                  : "w-16 h-16 rounded-xl drop-shadow-md border-4 border-gray-200"
                }`}
              onClick={() => setPickerRole("skin")}
            ></button>
            <label
              htmlFor="skin"
              className="block text-gray-700 font-bold mt-1"
            >
              Skin
            </label>
          </div>
        </div>

        <div className="w-full flex flex-row justify-between">
          <div className="flex flex-col items-center">
            <button
              type="button"
              style={{ backgroundColor: `${avatar.top}` }}
              className={` ${pickerRole === "top"
                  ? "w-16 h-16 rounded-xl border-4 border-orange-500 drop-shadow-md bg-sky-200"
                  : "w-16 h-16 rounded-xl drop-shadow-md border-4 border-gray-200"
                }`}
              onClick={() => setPickerRole("top")}
            ></button>
            <label htmlFor="top" className="block text-gray-700 font-bold mt-1">
              Top
            </label>
          </div>

          <div className="flex flex-col items-center">
            <button
              type="button"
              style={{ backgroundColor: `${avatar.bottom}` }}
              className={` ${pickerRole === "bottom"
                  ? "w-16 h-16 rounded-xl border-4 border-orange-500 drop-shadow-md"
                  : "w-16 h-16 rounded-xl drop-shadow-md border-4 border-gray-200"
                }`}
              onClick={() => setPickerRole("bottom")}
            ></button>
            <label
              htmlFor="bottom"
              className="block text-gray-700 font-bold mt-1"
            >
              Bottom
            </label>
          </div>
        </div>
      </div>

      <ChromePicker
        color={checkPickleRole() || "#000"}
        onChange={(color) => checkPickleRoleOnChange(color)}
        className="w-full"
      />
    </form>
  );
}
