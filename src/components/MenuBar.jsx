import ChapterStatus from "./ChapterStatus";
import usePopupStore from "../stores/usePopupStore";
import logoutIcon from "/image/logoutIcon.png";
import bagIcon from "/image/bagIcon.png";

export default function MenuBar() {
  const { setPopupBag } = usePopupStore();

  return (
    <>
      <section className="menu">
        <ChapterStatus />

        <div className="menu-button__container">
          <button className="menu-button" onClick={() => setPopupBag(true)}>
            <img className="menu-button__icon" src={bagIcon} />
          </button>
          <p className="menu-button__name">Bags</p>
        </div>

        <div className="menu-button__container">
          <button className="menu-button">
            <img className="menu-button__icon" src={logoutIcon} />
          </button>
          <p className="menu-button__name">Logout</p>
        </div>
      </section>
    </>
  );
}
