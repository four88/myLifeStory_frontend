import ChapterStatus from "./ChapterStatus";
import usePopupStore from "../stores/usePopupStore";
import useHiddenItemStore from "../stores/useHiddenItemStore";
import useChaptersStore from "../stores/useChaptersStore";
import logoutIcon from "/image/logoutIcon.png";
import bagIcon from "/image/bagIcon.png";
import costumeIcon from "/image/costumeIcon.png";
import useUserStore from "../stores/useUserStore";
import useAvatarStore from "../stores/useAvatarStore";

export default function MenuBar() {
  const { setPopupBag, setPopupCostume } = usePopupStore();
  const { user, logOut } = useUserStore();
  const { logOutAvatar } = useAvatarStore();

  const { clearHiddenItem } = useHiddenItemStore();

  const { clearChapter } = useChaptersStore();

  const handleLogOut = () => {
    logOutAvatar();
    logOut();
    clearChapter();
    clearHiddenItem();
  };

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
          <button className="menu-button" onClick={handleLogOut}>
            <img className="menu-button__icon" src={logoutIcon} />
          </button>
          <p className="menu-button__name">Logout</p>
        </div>

        <div className="menu-button__container">
          <button
            className="menu-button"
            onClick={() => {
              setPopupCostume(true);
            }}
          >
            <img className="menu-button__icon" src={costumeIcon} />
          </button>
          <p className="menu-button__name">Costume</p>
        </div>
      </section>
    </>
  );
}
