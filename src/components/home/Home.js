import React,{useEffect,useState} from "react";
import Book from "../home/Book";
import {getAllBooks} from "../services/api"

function Home(){
    const[books,setBooks]=useState([]);

    useEffect(()=>{
        handleBooks();
    },[]);

    async function handleBooks(){

        let data=await getAllBooks();

        console.log(data);

        setBooks(data);

        console.log(books);
    }

    return(
        <>
        <header>
            <input id="studentId" name="studentId" className="studentId" type ="hidden" value="${studentId}"/>
            <ul className="error"></ul>

            <div className="wrap header--flex">
                <h1 className="header--logo books">Home</h1>
                <nav>
                    <h1 className="signedOut">signedOut</h1>
                </nav>

            </div>

            </header>

            <button id="newBook" className="button new-book">Add New Book</button>

            <main>

                <div className="wrap main--grid root-books">
                    {
                        books&&(books.map((book)=>{
                            return <Book key={book.id} book={book}/>
                        }
                        ))
                    }
                </div>
            </main>
        </>
    );
}

export default Home