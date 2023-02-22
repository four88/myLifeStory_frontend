import { useEffect } from "react";
import Popup from "./Popup.jsx";
import usePopupStore from "../stores/usePopupStore";
import ChapterCard from "./ChapterCard";
import useChaptersStore from "../stores/useChaptersStore";
import usePreviewStore from "../stores/usePreviewStore";
import closeIcon from "/image/closeIcon.svg";
import ReadChapter from "./ReadChapter.jsx";
import PreviewHiddenItem from "./PreviewHiddenItem.jsx";

console.log(closeIcon);

export default function BagPopup() {
  // get state from usePopupStore
  const { popupBag, setPopupBag } = usePopupStore();
  const { chapters } = useChaptersStore();
  const { item, status, setPreviewItem } = usePreviewStore();

  // console.log(chapters);

  const selectForReview = (item, status) => {
    if (status === "chapter") {
      return <ReadChapter chapter={item} />;
    }
    if (status === "hiddenItem") {
      return <PreviewHiddenItem />;
    } else {
      return <div> please select your chapter of item</div>;
    }
  };

  return (
    <Popup isPopupOpen={popupBag}>
      <section className="bag-popup__container">
        <button
          className="bag-popup__close-button"
          onClick={() => {
            setPopupBag(false);
            setPreviewItem({}, "");
          }}
        >
          <img src={closeIcon} alt="" className="bag-popup__icon" />
        </button>

        <div className="bag-popup__left-section">
          <div className="bag-popup__section">
            <h1 className="bag-popup__heading">CHAPTER</h1>
            <ul className="bag-popup__section-container">
              {chapters.map((chapter, index) => {
                return <ChapterCard key={index} chapter={chapter} />;
              })}
            </ul>
          </div>

          <div className="bag-popup__section">
            <h1 className="bag-popup__heading">HIDDEN ITEM</h1>
            <div className="bag-popup__section-container"></div>
          </div>
        </div>

        <div className="bag-popup__right-section">
          {selectForReview(item, status)}
        </div>
      </section>
    </Popup>
  );
}
