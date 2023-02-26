import GetChapterPopup from "./GetChapterPopup";
import BagPopup from "./BagPopup";
import MenuBar from "./MenuBar";
import GetHiddenItemPopup from "./GetHiddenItemPopup";

export default function App() {
  console.log("app rendered");
  return (
    <>
      <BagPopup />
      <GetChapterPopup />
      <GetHiddenItemPopup />
      <MenuBar />
    </>
  );
}
