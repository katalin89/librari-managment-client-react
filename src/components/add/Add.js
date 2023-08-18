import React from "react";
import { useState } from "react";
import { addBook } from "../services/api";
import { Alert } from "react-bootstrap"


function Add() {

  const [bookName, setBookName] = useState("");
  const [createdAt,setCreatedAt] = useState("");
  const [studentId, setStudentId] = useState("");


  let [erors, setErrors] = useState("");
  let [added, setAdded] = useState(false);

  function checkErors() {
    let aux = [];

    if (bookName === "") {
      aux.push("You must complete book name");
      aux.style.border="red";
    }

   
    if (createdAt === "") {
      aux.push("You must complete created at");
    }

    if (studentId === "") {
      aux.push("You must complete student id");
    }

    setErrors(aux);
  }

  function handleAddBook() {

    checkErors();
    if(erors.length==0){
        let book = { bookName, createdAt, studentId};
        console.log(book);
        addBook(book);
        setAdded(true);
    }
  }

  return (
    <>

      <div className="error">

        {
            erors.length > 0 ? erors.map((e) => <p className="error">{e}</p>) : null
        }

      </div>
      

      <div>
       
        {
          added&&(
            <Alert variant="success" dismissible onClose={() => setAdded(false)}>
          <Alert.Heading>Succes!</Alert.Heading>
          <p>
          You succesfully added new book
          </p>
          
        </Alert>
          )
        }
      </div>

     
     
      <h1>New Book</h1>
      <div className="form-container">
        <p>
        <label for="bookName">Book Name</label>
          <input
            type="text"
            name="bookName"
            onChange={(event) => {
              setBookName(event.target.value);
            }}
          />
        </p>

        <p>
          <label for="createdAt">Created At</label>
          <input
            type="text"
            name="createdAt"
            onChange={(event) => {
              setCreatedAt(event.target.value);
            }}
          />
        </p>

        <p>
          <label for="studentId">Student Id</label>
          <input
            type="text"
            name="studentId"
            onChange={(event) => {
                setStudentId(event.target.value);
            }}
          />
        </p>
        
        <p>
        <button onClick={handleAddBook}>Create New Book</button>
        </p>
        <p>
          <button >Cancel</button>
        </p>
        
      </div>
    </>
  );
}

export default Add;
