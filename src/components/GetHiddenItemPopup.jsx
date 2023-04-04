import Popup from "./Popup";
import { useEffect } from "react";
import usePopupStore from "../stores/usePopupStore";

export default function GetHiddenItemPopup() {
  // store for handle state of this component
  //
  // const isGetChapterPopupOpen = usePopupStore((state) => state.popupGetChapter);
  // const setGetChapterPopupOpen = usePopupStore(
  //   (state) => state.setPopupGetChapter
  // );
  // const chapter = usePopupStore((state) => state.chapter);
  const { popupGetHiddenItem, setPopupGetHiddenItem, hiddenItem } =
    usePopupStore();

  useEffect(() => {
    if (popupGetHiddenItem) {
      const timer = setTimeout(() => {
        setPopupGetHiddenItem(false);
      }, 3000); // 3 seconds
      return () => clearTimeout(timer);
    }
  }, [popupGetHiddenItem]);

  return (
    <Popup isPopupOpen={popupGetHiddenItem}>
      <div className="getitem-popup__container px-4 py-4 pb-6">
        <img src={hiddenItem.img} alt="" className="getitem-popup__img" />
        <h2 className="getitem-popup__header">You got new hidden item!</h2>
        <h1 className="getitem-popup__sub-header">{hiddenItem.name}</h1>
        <p className="getitem-popup__desc">see it on your bag</p>
      </div>
    </Popup>
  );
}
