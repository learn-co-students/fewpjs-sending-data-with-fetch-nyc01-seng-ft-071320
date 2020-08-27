// Add your code here

// submitData("Josh", "josh@josh.com")
// submitData("Tim", "tim@tim.com")

function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            "name": name,
            "email": email
        })
    })
    .then(response => response.json())
    .then(response => {
        document.body.innerHTML = response.id
    })
    .catch(error => {
        document.body.innerHTML = error.message
    })
}


// document.addEventListener("DOMContentLoaded", () => {

//     submitData("Josh", "josh@josh.com")
//     submitData("Tim", "tim@tim.com")

//     function submitData(name, email) {
//         return fetch('http://localhost:3000/users', {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 "Accept": "application/json"
//             },
//             body: JSON.stringify({
//                 "name": name,
//                 "email": email
//             })
//         })
//         .then(response => response.json())
//         .then(response => {
//             const id = document.createElement('h1')
//             id.innerText = response.id
//             document.querySelector('body').append(id)
//         })
//         .catch(error => console.log(error.message))
//     }






// })

