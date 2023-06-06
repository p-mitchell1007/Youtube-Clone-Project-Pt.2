
import React, { useEffect, useState } from 'react';
import './Comment.css';

function Comments({ id }) {
  const [comments, setComments] = useState(
    JSON.parse(window.localStorage.getItem(id)) || []
  );

  const [form, setForm] = useState({
    name: '',
    comment: ''
  });

  const [editingComment, setEditingComment] = useState(null);
  const [editForm, setEditForm] = useState({
    name: '',
    comment: ''
  });

  function handleTextChange(e) {
    setForm({
      ...form,
      [e.target.id]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (e.target.name.value && e.target.comment.value) {
      resetForm();
      setComments((prevComments) => [
        ...prevComments,
        {
          name: e.target.name.value,
          comment: e.target.comment.value
        }
      ]);
    }
  }

  function resetForm() {
    setForm({
      name: '',
      comment: ''
    });
  }

  function deleteComment(index) {
    setComments((prevComments) =>
      prevComments.filter((_, commentIndex) => commentIndex !== index)
    );
  }

  function editComment(index) {
    const { name, comment } = comments[index];
    setEditingComment(index);
    setEditForm({ name, comment });
  }

  function updateComment(e, index) {
    e.preventDefault();

    setComments((prevComments) =>
      prevComments.map((comment, commentIndex) => {
        if (commentIndex === index) {
          return {
            name: editForm.name,
            comment: editForm.comment
          };
        }
        return comment;
      })
    );

    setEditingComment(null);
    setEditForm({ name: '', comment: '' });
  }

  useEffect(() => {
    localStorage.setItem(id, JSON.stringify(comments));
  }, [id, comments]);

  return (
    <div className="comments">
      <form onSubmit={handleSubmit}>
        <div className="input">
          <div className="nameInput">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Name.."
              onChange={handleTextChange}
              value={form.name}
            />
          </div>

          <div className="commentInput">
            <label htmlFor="comment">Comment</label>
            <input
              type="text"
              id="comment"
              placeholder="..."
              onChange={handleTextChange}
              value={form.comment}
            />
          </div>

          <div className="submit">
            <button className="btn btn-primary">Submit</button>
          </div>
        </div>
      </form>

      <hr />

      <div className="listOfComments">
        {comments &&
          comments.map((comment, index) => {
            const key = Math.floor(Math.random() * 10000);

            if (editingComment === index) {
              return (
                <form
                  key={key}
                  className="editForm"
                  onSubmit={(e) => updateComment(e, index)}
                >
                  <input
                    type="text"
                    id="editName"
                    placeholder="Edit Name.."
                    value={editForm.name}
                    onChange={(e) =>
                      setEditForm({ ...editForm, name: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    id="editComment"
                    placeholder="Edit Comment.."
                    value={editForm.comment}
                    onChange={(e) =>
                      setEditForm({ ...editForm, comment: e.target.value })
                    }
                  />
                  <button className="btn btn-primary">Save</button>
                </form>
              );
            }

            return (
              <li key={key} className="postedComment">
                <span>{comment.name}</span>
                <p>{comment.comment}</p>
                <div className="commentButtons">
                  <button
                    className="btn btn-primary"
                    onClick={() => editComment(index)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={() => deleteComment(index)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            );
          })}
      </div>
    </div>
  );
}

export default Comments;
