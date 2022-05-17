import React, { useState ,  useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "../filmsInfo/FilmsInfo.css";
import {  saveComm} from "../../features/firebasefunctions";
import { useStateValue } from "../../features/StateProvider";
import { actions } from "../../features/firebasecomments";
import db from "../../firebase.config";

const Comments = ({ film }) => {


  const listObject = useSelector(state => state.firebasecomments);
  const status = listObject.status;
  const list = listObject.list;
  const [comm , setComm] = useState(""); 
  const [name , setName] = useState(""); 
  const dispatch = useDispatch();

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
    }
    

    const fetchCommentData = async() => {
      await fetchcomments(film.id).then((data) => {

        console.log(data)

      });

    }
useEffect(() => {
  fetchCommentData()
});

const fetchcomments = async(film) => {
  db.collection("comments").where("filmId", "==", film)
  .onSnapshot((querySnapshot) => {
      var filmcoms = [];
      querySnapshot.forEach((doc) => {
          filmcoms.push(doc.data());
      });
      console.log("List of  comments ", filmcoms );
      return filmcoms
  })
}

  return (
    <div>


<comment className="movie-comentars">
          <div className="">
            <div className="">
              <h2> Comments</h2>


              <div className="test">
                
                <p> here comes the list of comments </p>

              </div>





 
              <div className="inputs">
              <input className="inputC"  type = "text" required value={name} onChange={(e) => setName(e.target.value)} placeholder= "Write your comment here"></input>
                <input className="inputC"  type = "text" required value={comm} onChange={(e) => setComm(e.target.value)} placeholder= "Write your comment here"></input>
                
                <button onClick={saveComment}> Leave a comment</button>
              </div>
            </div>
          </div>
        </comment>

       
        </div>

        
  );
};

 

export default Comments;
