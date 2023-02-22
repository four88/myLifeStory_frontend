export default function Page({ page }) {
  return (
    <li className="page">
      <img src={page.pageImg} alt="" className="page__img" />
      <p className="page__content">{page.story}</p>
      <p className="page__no">{page.no}</p>
    </li>
  );
}
