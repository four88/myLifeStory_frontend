import useChaptersStore from "../stores/useChaptersStore";

export default function ChapterStatus() {
  // useChapterStore
  const currentChapter = useChaptersStore((state) => state.currentChapter);
  const maxChapter = useChaptersStore((state) => state.maxChapter);

  console.log(maxChapter);
  return (
    <>
      <section className="chapter-status">
        <h1>
          {currentChapter} / {maxChapter}
        </h1>
      </section>
    </>
  );
}
