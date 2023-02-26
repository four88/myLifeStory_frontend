import Popup from "./Popup";
import { useEffect } from "react";
import usePopupStore from "../stores/usePopupStore";

export default function GetChapterPopup() {
  // store for handle state of this component
  const isGetChapterPopupOpen = usePopupStore((state) => state.popupGetChapter);
  const setGetChapterPopupOpen = usePopupStore(
    (state) => state.setPopupGetChapter
  );
  const chapter = usePopupStore((state) => state.chapter);

  useEffect(() => {
    if (isGetChapterPopupOpen) {
      const timer = setTimeout(() => {
        setGetChapterPopupOpen(false);
      }, 3000); // 3 seconds
      return () => clearTimeout(timer);
    }
  }, [isGetChapterPopupOpen]);

  return (
    <Popup isPopupOpen={isGetChapterPopupOpen}>
      <div className="getchapter-popup__container">
        <img src={chapter.thumbNail} alt="" className="getchapter-popup__img" />
        <h1 className="getchapter-popup__header">CHAPTER {chapter.no}</h1>
        <h2 className="getchapter-popup__sub-header"> {chapter.name}</h2>
        <p className="getchapter-popup__desc">see it on your bag</p>
      </div>
    </Popup>
  );
}
