fetch('http://localhost:7000/products')
.then(response => response.json())
.then(data => console.log(data))
.catch(err => console.error(err))

