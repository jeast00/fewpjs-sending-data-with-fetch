// Add your code here

const url = `http://localhost:3000/users`;

function submitData(name, email) {

    let configurationObject = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    };
    return fetch(url, configurationObject)
    .then(function(response) {
        return response.json();
    })
    .then(function(object) {
        document.body.innerHTML = object.id;
    })
    .catch(function(error) {
        document.body.innerHTML = error.message;
    })
}
