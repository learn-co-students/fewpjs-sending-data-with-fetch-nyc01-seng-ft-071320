const p = document.createElement('p')
const h1 = document.createElement('h1')
const bodyTag = document.querySelector('body')

function submitData(name, email) {
  const data = {
    "name": name,
    "email": email
  }
  return fetch('http://localhost:3000/users', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(object => {
      h1.textContent = object["id"]
      bodyTag.append(h1)
    })
    .catch(function(error) {
      alert("Bad things! Ragnarők!")
      p.textContent = error
      bodyTag.append(p)
    });
}
