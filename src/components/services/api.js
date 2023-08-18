function api(path,method,body){
    const url = "http://localhost:8080/api/v1/book"+path;

    const options={
        method,
        headers:{
            "Content-Type":"application/json;charset=utf-8",
            "X-Requested-With":"XMLHttpRequest",
        },
    };

    if(body !==null){
        options.body =JSON.stringify(body);
    }

    return fetch(url,options);
}

async function getAllBooks(){
    let data=await api ('/all','GET');

     data=await data.json();

     return data;
}

async function addBook(book){
    let data= await api("/add",'POST',book);

    return data;
}

export {getAllBooks, addBook};