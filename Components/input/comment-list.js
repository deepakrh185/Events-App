import classes from "./comment-list.module.css";

function CommentList({ data }) {
  return (
    <div>
      <ul className={classes.comments}>
        {/* Render list of comments - fetched from API */}
        {data &&
          data.map((list) => (
            <p key={list._id}>
              <div>
                <li>
                  <p>{list.text}</p>
                  <div>
                    By <address>{list.name}</address>
                  </div>
                </li>
              </div>
            </p>
          ))}
      </ul>
    </div>
  );
}

export default CommentList;
