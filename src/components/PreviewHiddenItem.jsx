export default function PreviewHiddenItem({ item }) {
  return (
    <section className="preview-hidden-item">
      <h2 className="preview-hidden-item__heading">{item.name}</h2>
      <img
        src={item.img}
        alt={item.name}
        className="preview-hidden-item__img"
      />
      <p className="preview-hidden-item__content">{item.desc}</p>
    </section>
  );
}
