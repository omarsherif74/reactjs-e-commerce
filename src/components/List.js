function List() {
  const arr = ["html", "css", "js","react"];

  const li = arr.map((el) => (
    <li>{el}</li>
  ))
  return(
    <ul>
        {li}
    </ul>
  );
}

export default List;
