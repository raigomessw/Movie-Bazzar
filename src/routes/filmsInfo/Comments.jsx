import React, { useState, useEffect } from "react";
import "../filmsInfo/FilmsInfo.css";
import { saveComm } from "../../features/firebaseFunctions";
import db from "../../features/firebaseConfig";
import firebase from 'firebase/app';


const Comments = ({ film }) => {
  const [commentlist , setCommentlist] = useState([]);


  const [comm , setComm] = useState("");
  const [name , setName] = useState("");



    const saveComment = () =>{
      try{
          const data = {
            name : name ,
            comment : comm ,
            filmId : film.id
          }
        console.log("data" , data)
          saveComm(data)
          cleardata()
      } catch(error) {
        console.log(error)
      }


    }


  const cleardata = () => {
    setComm(" ");

    setName(" ");
  };

  useEffect(() => {
    fetchComments(film);

  } , []);

  const fetchComments = async (film) => {
    db.collection("comments").where("filmId", "==", film.id)
    .onSnapshot((querySnapshot) => {
      var filmcoms = [];
      querySnapshot.forEach((doc) => {
        filmcoms.push(doc.data());
      });

      console.log("List of comments ", filmcoms);
      setCommentlist(filmcoms);

    })
  };

  return (
    <div>
      <div className="movie-comentars">
        <div className="">
          <div className="">

            <h2> Comments</h2>
            <div className="test">
              <div className="comments-container">
                <div className="">
                  <div> {commentlist.map((item, index) => {
          return (
            <div className="movie-list" key={index}>
              <div className="commits">
                <p>{item.name}:</p><p>{item.comment}</p>
              </div>
            </div>
          );
        })}
                    </div>
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
        </div>
    </div>
  );
};

export default Comments;
