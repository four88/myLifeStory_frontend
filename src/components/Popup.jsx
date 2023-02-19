import usePopupStore from "../stores/usePopupStore";
import { useEffect } from "react";

export default function Popup() {
  // store for handle state of this component
  const isPopupOpen = usePopupStore((state) => state.popup);
  const setPopupOpen = usePopupStore((state) => state.setPopup);
  const chapter = usePopupStore((state) => state.chapter);

  useEffect(() => {
    if (isPopupOpen) {
      const timer = setTimeout(() => {
        setPopupOpen(false);
      }, 3000); // 3 seconds
      return () => clearTimeout(timer);
    }
  }, [isPopupOpen]);

  return (
    <div className={isPopupOpen ? "popup" : "popup_close"}>
      <div className="popup__container">
        <h1 className="popup__header">CHAPTER {chapter.no}</h1>
        <h2 className="popup__sub-header"> - {chapter.name} - </h2>
        <p className="popup__desc">see it on your bag</p>
      </div>
    </div>
  );
}
