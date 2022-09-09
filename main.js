const BASE_URL = "https://pursuit-9-1-full-stack-project.herokuapp.com/api/products"

fetch(BASE_URL)
.then((res) => res.json())
.then((res) => {
    console.log(res)
})
    .catch((err) => {
        console.log(err)
})
