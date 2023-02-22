import Page from "./Page";

export default function ReadChapter({ chapter }) {
  return (
    <section className="chapter">
      <div className="chapter__heading">
        <h2 className="chapter__no">
          Chapter {chapter.no}: {chapter.name}
        </h2>
      </div>
      <ul className="chapter__list">
        {chapter.page.map((page) => {
          return <Page key={page.no} page={page} />;
        })}
      </ul>
    </section>
  );
}
