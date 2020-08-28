// Add your code here
let url = "http://localhost:3000/users"
// let data = {
//         "name": name,
//         "email": email
//     }
// let obj = {method: "POST",
//     headers: {
//         "content-type": "application/json",
//         "accept": "application/json"},
//     body: JSON.stringify({
//             "name": name,
//             "email": email
//         })
//     }


function submitData(name, email) {
    return fetch(url, 
        {method: "POST",
        headers: {
            "content-type": "application/json",
            "accept": "application/json"},
            body: JSON.stringify({
                "name": name,
                "email": email
            })
        })
        .then(resp => resp.json())
        .then(data => appendData(data))
        .catch(error => appendError(error))
    }
    
function appendData(data) {
    let id = data.id
    document.querySelector('body').innerHTML = id
}

function appendError(error) {
    let message = error.message
    document.querySelector('body').append(message)
}

