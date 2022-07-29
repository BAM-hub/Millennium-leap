function PostInput({ post, setPost, handleSubmit }) {
  return (
    <div>
      <form>
        <input
          type='text'
          placeholder='name'
          value={post.name}
          onChange={(e) =>
            setPost({
              ...post,
              name: e.target.value,
            })
          }
        />
        <input
          type='text'
          placeholder='text'
          value={post.text}
          onChange={(e) =>
            setPost({
              ...post,
              text: e.target.value,
            })
          }
        />
        <button type='submit' onClick={(e) => handleSubmit(e)}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default PostInput;
