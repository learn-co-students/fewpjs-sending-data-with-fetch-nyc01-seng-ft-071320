// Add your code here
let link = "http://localhost:3000/users"


function submitData(name, email) {
    return fetch(link,
        {method: "POST",
    headers: {
        "content-type": "application/json",
        "accept": "application/json"},
        body: JSON.stringify({
            "name": name,
            "email": email
        })
    })
    .then(function(response) {
        return response.json()
    })
    .then(function(object){
        document.body.innerHTML = object["id"]
    })
    .catch(function(error) {
        document.body.innerHTML = error.message
    })
}