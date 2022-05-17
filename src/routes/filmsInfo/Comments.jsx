import React, { useState ,  useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "../filmsInfo/FilmsInfo.css";
import {  saveComm} from "../../features/firebasefunctions";
import db from "../../firebase.config";
import firebase from 'firebase/app'; 

const Comments = ({ film }) => {

  let content = []

  const [comm , setComm] = useState(""); 
  const [name , setName] = useState("");  


  let commentlist = []; 
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
    

    // const fetchCommentData = async() => {
    //   await fetchcomments(film.id).then((data) => {

    //     console.log("dat is ", data)

    //   });

    // }
useEffect(() => {
  fetchComments(film)
});

const fetchComments = async(film) => {
 db.collection("comments") 
  .onSnapshot((querySnapshot) => {
      var filmcoms = [];
      querySnapshot.forEach((doc) => {
          filmcoms.push(doc.data());
      });
      console.log("List of  comments ", filmcoms );
      content =  filmcoms && filmcoms.map((item, index) => {
        return (
          <div className="movie-list" key={index}>
            <div className='movie-title'>
              <p>{item.comment}</p>
            </div>
            
          </div>
        );

      })
      return content
      
  })
}

  return (
    <div>


<comment className="movie-comentars">
          <div className="">
            <div className="">
              <h2> Comments</h2>


              <div className="test">
                
            {content}

            

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
