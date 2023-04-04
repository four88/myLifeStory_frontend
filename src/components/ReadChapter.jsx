import Page from "./Page";
import { useEffect, useState } from "react";
import pageApi from "../api/PageApi";
import useUserStore from "../stores/useUserStore";

export default function ReadChapter({ chapter }) {
  const [pages, setPages] = useState([]);
  const { user } = useUserStore();

  useEffect(() => {
    pageApi.getUserPage(user.token, chapter._id).then((res) => {
      setPages(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <section className="chapter">
      <div className="chapter__heading">
        <h2 className="chapter__no">
          Chapter {chapter.no}: {chapter.name}
        </h2>
      </div>
      <ul className="chapter__list">
        {pages.map((page) => {
          return <Page key={page._id} page={page} />;
        })}
      </ul>
    </section>
  );
}
