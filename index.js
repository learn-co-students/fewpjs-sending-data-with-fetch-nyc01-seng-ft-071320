// Add your code here
document.querySelector("DOMContentLoaded", function(e) {
  
    function submitData(username, useremail) {
        
        fetch("http://localhost:3000/users", configurationObject)
        .then(resp => resp.json())
        .then(data => {document.body.innerHTML = data["id"]})




        const configurationObject = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                username,
                useremail
        })}
    

    }




submitData() 

}