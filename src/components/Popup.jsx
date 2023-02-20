export default function Popup({ children, isPopupOpen }) {
  return (
    <div className={isPopupOpen ? "popup" : "popup_close"}>{children}</div>
  );
}
