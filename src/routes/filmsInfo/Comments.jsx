import React, { useState, useEffect } from "react";
import "../filmsInfo/FilmsInfo.css";
import { saveComm } from "../../features/firebaseFunctions";
import db from "../../features/firebaseConfig";


const Comments = ({ film }) => {
  let content = [];

  const [comm, setComm] = useState("");

  const [name, setName] = useState("");

  //let commentlist = [];

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

  useEffect(() => {
    fetchComments(film);
  });

  const fetchComments = async (film) => {
    db.collection("comments")(querySnapshot => {
      var filmcoms = [];
      querySnapshot.forEach((doc) => {
        filmcoms.push(doc.data());
      });

      console.log("List of comments ", filmcoms);

      content =
        filmcoms &&
        filmcoms.map((item, index) => {
          return (
            <div className="movie-list" key={index}>
              <div className="movie-title">
                <p>{item.comment}</p>
              </div>
            </div>
          );
        });

      return content;
    })
  };

  return (
    <div>
      <comment className="movie-comentars">
        <div className="">
          <div className="">
            <h2> Comments</h2>
            <div className="test">
              <div className="comments-container">
                <div className="commits">
                  <p>Commits Here</p>
                  <div>{content}</div>
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
              <button onClick={saveComment}> Leave a comment</button>
            </div>
          </div>
        </div>
      </comment>
    </div>
  );
};

export default Comments;
