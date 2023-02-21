import Popup from "./Popup.jsx";
import usePopupStore from "../stores/usePopupStore";
import useChapterStore from "../stores/useChaptersStore";
import ChapterCard from "./ChapterCard";
import useChaptersStore from "../stores/useChaptersStore";

export default function BagPopup() {
  // get state from usePopupStore
  const { popupBag, setPopupBag } = usePopupStore();
  const { chapters } = useChaptersStore();
  console.log(chapters);

  return (
    <Popup isPopupOpen={popupBag}>
      <section className="bag-popup__container">
        <button
          className="bag-popup__close-button"
          onClick={() => setPopupBag(false)}
        >
          X
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

        <div className="bag-popup__right-section"></div>
      </section>
    </Popup>
  );
}
