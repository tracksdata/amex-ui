fetch('http://localhost:3000/')
    .then(resp => resp.text())
    .then(data=>{
        console.log(data);
    })

