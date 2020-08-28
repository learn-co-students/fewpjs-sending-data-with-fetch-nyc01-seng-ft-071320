// Add your code here

function submitData(name, email){

    let configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name,
            email 
            
        })
    };

    return fetch("http://localhost:3000/users", configurationObject) 
    .then(response => {
        return response.json();
    })
    .then(object => {
        let body = document.querySelector('body');
        body.innerHTML = object["id"]
    })
    .catch(error => {
        let body = document.querySelector('body');
        body.innerHTML = error.message;   
    });
    



}




