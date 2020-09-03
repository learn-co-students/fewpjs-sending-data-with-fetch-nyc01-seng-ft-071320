// Add your code here
function submitData(name, email){
    let config = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    }
    return fetch('http://localhost:3000/users', config)
    .then(resp => {
        if(resp.ok){
            return resp.json().then(obj => {document.body.innerHTML = `${obj.id}`})
        }
    }).catch(error => document.body.innerHTML = error.message)
}


