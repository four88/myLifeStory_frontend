import useChaptersStore from "../stores/useChaptersStore";

export default function ChapterStatus() {
  // useChapterStore
  const currentChapter = useChaptersStore((state) => state.currentChapter);
  const maxChapter = useChaptersStore((state) => state.maxChapter);

  return (
    <>
      <section className="chapter-status">
        <h1 className="chapter-status__heading">
          {currentChapter} / {maxChapter}
        </h1>
      </section>
    </>
  );
}
