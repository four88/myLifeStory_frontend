import { useEffect } from "react";
import Popup from "./Popup.jsx";
import usePopupStore from "../stores/usePopupStore";
import ChapterCard from "./ChapterCard";
import HiddenItemCard from "./HiddenItemCard";
import useChaptersStore from "../stores/useChaptersStore";
import useHiddenItemStore from "../stores/useHiddenItemStore";
import usePreviewStore from "../stores/usePreviewStore";
import closeIcon from "/image/closeIcon.svg";
import ReadChapter from "./ReadChapter.jsx";
import PreviewHiddenItem from "./PreviewHiddenItem.jsx";

export default function BagPopup() {
  // get state from stores
  const { popupBag, setPopupBag } = usePopupStore();
  const { chapters } = useChaptersStore();
  const { item, status, setPreviewItem } = usePreviewStore();
  const { hiddenItems } = useHiddenItemStore();

  console.log(item);
  // console.log(chapters);

  const selectForReview = (item, status) => {
    if (status === "chapter") {
      return <ReadChapter chapter={item} />;
    }
    if (status === "hiddenItem") {
      return <PreviewHiddenItem item={item} />;
    } else {
      return (
        <div className="bag-popup__blank">
          please select your chapter or hidden item
        </div>
      );
    }
  };

  const checkIfNotNullChapters = (chapters) => {
    if (chapters.length > 0) {
      return chapters.map((chapter, index) => {
        return <ChapterCard key={index} chapter={chapter} />;
      });
    } else {
      return (
        <div className="bag-popup__blank"> You don't have any chapter</div>
      );
    }
  };

  const checkIfNotNullItem = (items) => {
    if (items.length > 0) {
      return items.map((item, index) => {
        return <HiddenItemCard key={index} item={item} />;
      });
    } else {
      return (
        <div className="bag-popup__blank"> You don't have any hidden item</div>
      );
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
              {checkIfNotNullChapters(chapters)}
            </ul>
          </div>

          <div className="bag-popup__section">
            <h1 className="bag-popup__heading">HIDDEN ITEM</h1>
            <ul className="bag-popup__section-container">
              {checkIfNotNullItem(hiddenItems)}
            </ul>
          </div>
        </div>

        <div className="bag-popup__right-section">
          {selectForReview(item, status)}
        </div>
      </section>
    </Popup>
  );
}
