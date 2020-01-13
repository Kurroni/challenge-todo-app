import axios from "axios";

class Todo {
  constructor() {
    this.todo = axios.create({
      baseURL: process.env.REACT_APP_API_URL +'/todos',
      withCredentials: true
    });
  }

  createOne(todoObj) {
    return this.todo
      .post("/", todoObj) 
      .then(newTodo=> newTodo.data); 
  }

  getOne (id) {    
    return this.todo
      .get(`/${id}`)  
      .then(todoObj => todoObj.data) 
  }

  updateOne (id, todoObj) {
    return this.todo
      .put(`/${id}`, todoObj)  
      .then(newTodo => newTodo.data) 
    }

    deleteOne (id, habitObj) {
      return this.habit
      .delete(`/${id}`, habitObj)  
      .then() 
  }

}

const todoService = new Todo();

export default todoService;
