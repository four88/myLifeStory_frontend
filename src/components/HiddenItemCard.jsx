import usePreviewStore from "../stores/usePreviewStore";

export default function HiddenItemCard({ item }) {
  const { setPreviewItem } = usePreviewStore();

  return (
    <li
      className="hidden-item"
      onClick={() => setPreviewItem(item, "hiddenItem")}
    >
      <img src={item.img} alt="" className="hidden-item__img" />
      <div className="hidden-item__info">
        <h2 className="hidden-item__heading">{item.name}</h2>
      </div>
    </li>
  );
}
