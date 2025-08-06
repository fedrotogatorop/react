import { useState } from "react";
import posts from "../posts.json";
import Article from "../components/Article";

function Homepage() {
  // let search = "";
  const [search, setSearch] = useState("");
  const changeSearch = (event) => {
    setSearch(event.target.value);
  };
  return (
    <>
      <h1>Simple Blog</h1>
      <div>
        Cari Artikel : <input onChange={changeSearch}></input>
      </div>
      <small>ditemukan 0 data dengan pencarian kata {search}</small>
      {posts.map(({ title, tags, date }) => (
        // <Article title={title} tags={tags} date={date} />
        <Article {...{ title, tags, date }} />
      ))}
    </>
  );
}
export default Homepage;
