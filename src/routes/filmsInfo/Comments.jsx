import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../filmsInfo/FilmsInfo.css";
import saveComm from "../../features/firebaseFunctions";
import db from "../../features/firebaseConfig";

const Comments = ({ film }) => {
  const [comm, setComm] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const saveComment = () => {
    try {
      const data = {
        name: name,
        comment: comm,
        filmId: film.id,
      };
      console.log("data", data);
      saveComm(data);
      cleardata();
    } catch (error) {
      console.log(error);
    }
  };

  const cleardata = () => {
    setComm(" ");
    setName(" ");
  };

  const fetchCommentData = () => {
    fetchcomments(film.id).then((data) => {
      console.log(data);
    });
  };
  useEffect(() => {
    fetchCommentData();
  });

  const fetchcomments = async (film) => {
    db.collection("comments")
      .where("filmId", "==", film)
      .onSnapshot((querySnapshot) => {
        var filmcoms = [];
        querySnapshot.forEach((doc) => {
          filmcoms.push(doc.data());
        });
        console.log("List of  comments ", filmcoms);
        return filmcoms;
      });
  };

  return (
    <div>
      <comment className="movie-comentars">
        <div>
          <h2> Comments</h2>
          <div className="test">
            <div className="comments-container">
              <div className="commits">
                <a>Commits Here</a>
                <label className="labels1">{name}</label>
                <label className="labels2"> {comm} </label>
              </div>
            </div>
          </div>
          <div className="constainer_imputs">
            <div className="inputs">
              <input
                className="inputC"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Write your name here">
              </input>
              <input
                className="inputC"
                type="text"
                required
                value={comm}
                onChange={(e) => setComm(e.target.value)}
                placeholder="Write your comment here">
              </input>
            </div>
            <button onClick={saveComment}> Leave a comment</button>
          </div>
        </div>
      </comment>
    </div>
  );
};

export default Comments;
