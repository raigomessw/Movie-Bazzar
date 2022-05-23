import React, { useState, useEffect } from "react";
import "../filmsInfo/Comments.css";
import { saveComm } from "../../features/firebaseFunctions";
import db from "../../features/firebaseConfig";

const Comments = ({ film }) => {
  const [commentlist, setCommentlist] = useState([]);

  const [comm, setComm] = useState("");
  const [name, setName] = useState("");

  const saveComment = () => {
    try {
      const data = { name: name, comment: comm, filmId: film.id };
      saveComm(data);
      cleardata();
    } catch (error) {}
  };

  const cleardata = () => {
    setComm(" ");
    setName(" ");
  };

  useEffect(() => {
    fetchComments(film);
  }, []);

  const fetchComments = async (film) => {
    db.collection("comments")
      .where("filmId", "==", film.id)
      .onSnapshot((querySnapshot) => {
        var filmcoms = [];
        querySnapshot.forEach((doc) => {
          filmcoms.push(doc.data());
        });
        setCommentlist(filmcoms);
      });
  };

  return (
    <div className="comment-body">
      <div className="comment-container">
        <div className="com-h2">
          <h2>Comments</h2>
        </div>

        <div className="comment-index">
          {commentlist.map((item, index) => {
            return (
              <div className="comment-list" key={index}>
                <div className="comment-div">
                  <p className="user">{item.name}</p>
                  <h3>:</h3>
                  <p className="user-comment">{item.comment}</p>
                </div>
              </div>
            );
          })}
        </div>

        <form>
          <div className="input-container">
            <div className="input-div">
              <input
                className="inputC"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Write your name here"
              ></input>
              <input
                className="inputC"
                type="text"
                required
                value={comm}
                onChange={(e) => setComm(e.target.value)}
                placeholder="Write your comment here"
              ></input>
            </div>
          </div>
        </form>

        <div className="comment-button">
          <button onClick={saveComment}>Leave a comment</button>
        </div>
      </div>
    </div>
  );
};

export default Comments;
