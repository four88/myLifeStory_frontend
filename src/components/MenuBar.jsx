import ChapterStatus from "./ChapterStatus";
import usePopupStore from "../stores/usePopupStore";

export default function MenuBar() {
  const { setPopupBag } = usePopupStore();

  return (
    <>
      <section className="menu">
        <ChapterStatus />

        <div className="menu-button__container">
          <button className="menu-button" onClick={() => setPopupBag(true)}>
            <img className="menu-button__icon" />
          </button>
          <p className="menu-button__name">Bags</p>
        </div>

        <div className="menu-button__container">
          <button className="menu-button">
            <img className="menu-button__icon" />
          </button>
          <p className="menu-button__name">Log out</p>
        </div>
      </section>
    </>
  );
}
