let service = {
    async fetchTodos() {
        let response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
        let todos = await response.json();
        return todos;
    }
}
//------------------------------------------------------------------

function renderTodos() {
    service.fetchTodos().then(response => {
        console.log(response);
    })
        .catch(err => {
            console.log(err);
        })
}
renderTodos();

