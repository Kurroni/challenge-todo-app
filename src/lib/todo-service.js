import axios from "axios";

class Todo {
  constructor() {
    this.todo = axios.create({
      baseURL: "http://localhost:4000",
      withCredentials: true
    });
  }

  createOne(todoObj) {
    return this.todo
      .post("/todos", todoObj) 
      .then(newTodo=> newTodo.data); 
  }

  getAll() {
    return this.todo
      .get("/todos")
      .then(allTodos => allTodos.data);
  }

  getOne (id) {    
    return this.todo
      .get(`/todos/${id}`)  
      .then(todoObj => todoObj.data) 
  }

  updateOne (id, todoObj) {
    return this.todo
      .put(`/todos/${id}`, todoObj)  
      .then(newTodo => newTodo.data) 
    }

    deleteOne (id, todoObj) {
      return this.todoObj
      .delete(`/todos/${id}`, todoObj)  
      .then() 
  }

}

const todoService = new Todo();

export default todoService;
