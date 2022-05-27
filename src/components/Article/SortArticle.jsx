export default function SortArticle({
  sortType,
  setSortType,
  sortOrder,
  setSortOrder,
}) {
  return (
    <section>
      <select
        value={sortType}
        onChange={(event) => {
          setSortType(event.target.value);
        }}
      >
        <option value="created_at">date</option>
        <option value="title">title</option>
        <option value="votes">votes</option>
        <option value="comment_count">comments</option>
      </select>

      <select
        value={sortOrder}
        onChange={(event) => {
          setSortOrder(event.target.value);
        }}
      >
        <option value="asc">ascending</option>
        <option value="desc">descending</option>
      </select>
    </section>
  );
}
