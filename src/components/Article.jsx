function Article() {
  const name = "Fedro";
  const titles = ["Belajar Reactjs", "dan", "NextJS", "NodeJS"];

  //   titles.map(item=>item)
  return (
    <>
      <div>{name}</div>
      <div>
        {titles.map((title) => {
          return (
            <>
              <div>{title}</div>
              <div>{title}</div>
            </>
          );
        })}
      </div>
    </>
  );
}
export default Article;
