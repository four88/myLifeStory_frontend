import GetChapterPopup from "./GetChapterPopup";
import BagPopup from "./BagPopup";
import MenuBar from "./MenuBar";

export default function App() {
  console.log("app rendered");
  return (
    <>
      <BagPopup />
      <GetChapterPopup />
      <MenuBar />
    </>
  );
}
