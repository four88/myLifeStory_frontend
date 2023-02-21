export default function ChapterCard({ chapter }) {
  return (
    <li className="chapter-card">
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
