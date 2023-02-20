import Popup from "./Popup.jsx";
import usePopupStore from "../stores/usePopupStore";

export default function BagPopup() {
  // get state from usePopupStore
  const { popupBag, setPopupBag } = usePopupStore();

  return (
    <Popup isPopupOpen={popupBag}>
      <section className="bag-popup__container">
        <button
          className="bag-popup__close-button"
          onClick={() => setPopupBag(false)}
        ></button>
        <div className="bag-popup__section">
          <h1 className="bag-popup__heading">Test bag open</h1>
        </div>
      </section>
    </Popup>
  );
}
