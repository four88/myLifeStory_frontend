import usePreviewStore from "../stores/usePreviewStore";

export default function ChapterCard({ chapter }) {
  const { setPreviewItem } = usePreviewStore();

  return (
    <li
      className="chapter-card"
      onClick={() => setPreviewItem(chapter, "chapter")}
    >
      <img
        src={chapter.thumbNail}
        alt={chapter.name}
        className="chapter-card__img"
      />
      <div className="chapter-card__info">
        <h2 className="chapter-card__no">Chapter: {chapter.no}</h2>
        <p className="chapter-card__name">{chapter.name}</p>
      </div>
    </li>
  );
}
