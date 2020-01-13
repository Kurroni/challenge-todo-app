![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# React Todo-list challenge (my readme.dm below)
## < Frontend Test >

## What is this about:
----
 The purpose of this test is to know your ability to create a small functional single page application in a limit of time. Below you’ll find the features, the requirements and the key points you should keep on mind while developing.

## What we’ll evaluate
----
- The final product.
- The use of ES6 features is allowed and encouraged.
- The use of CSS processors (Sass, LESS...) is allowed and encouraged.
- The following are a bonus points for the candidate:
  - ✓ Code quality
  - ✓ Mobile support
  - ✓ Application structure
  - ✓ User Interface
  - ✓ Planning session ( README, Kanban etc.. )

## What we want you to do
---
We want you to start simple and focus on a working product. At the same time this challenge has no limitations and we encourage you to be creative in terms of functionality and style (includes frontend and backend).

---
### Example User stories
- **Create todo** As a user I want to create a new todo/task with `title` and `body` and save it in the database.
- **List todos** As a user I want to see all my todos in a list.
- **Delete todo** As a user I want to delete a todo from the list when I don't want it anymore.

### Backlog
- **Update todo** A a user I want to be able to modify an existing todo.
- **Done** As a user I want to mark my todo as done.
- **Move todos** As a user I want to rearrange my todos.
- etc...

## Provided material
---

- Fork and clone this repository.
- Run the following commands:
```
cd challenge-todo-app
npm install
npm start
```

- Fork and clone [the server](https://github.com/ironhackbcn/challenge-todo-api) repository

You will get intstuctions about installation and how to access the Todo REST api there.

---

## Delivery requirements
---
- Push your application to GitHub and send the repository url on Slack.
- The application should include connection between the backend and the frontend.
- It should show a list of todos/tasks.
- It should include a form to add todos/tasks.
- The solution must run properly
- A text file with any instruction required for compiling and/or running the application should be provided as it would be directed to a no technical user.

## Delivery extra (not required)
- Complete CRUD.
- Any kind of look & feel or usability improvement for showing your ability/experience in making attractive UI/UX will be evaluated.
- Any extra comment explaining about what was done or what the candidate would had wanted to improve but didn’t due to lack of time, will be appreciated and evaluated.

## 🤩 Good Luck! 🤩


## Description
Simple To-Do App that help you with your day to day tasks.


## User Stories

-  **Create New Habit** As a user I want to create new habit
-  **See my habits** As a user I can see my habits as a daily to-do list, habits can be marked as DONE
-  **Edit my habits** As a user I can edit my habits to update them due to my learnings
-  **See a habit with its total 'DONE' number of days** As a user I want to see a specific habit and my how many days I've done it, to mesure my progress and to keep motivated



# Client

## Routes
| Path | Component | Permissions | Behavior | 
|------|--------|--| -------|
| `/list` | TodayPageComponent | user only | homepage |
| `/add-todo` | AddHabitPageComponent | user only | CreateHabitPage - form to add the new habit by title and navigate to TodayPage after creation |

## Components

-Navbar component
  - Input: user object
  - Output: user object
  
- NoHabit component
  - Input: empty
  - Output: empty
  
- CreateNewHabit component
  - Input: habit: any
  - Output: habit object
  
- List component
  - Input: user object
  - Output: user object


## Services
  
- Habit Service
  - habit.createOne(habitObj)
  - habit.getOne(id)
  - habit.deleteOne(id, habitObj)
  
# Server

## Models
```
  todos: [{type: Schema.Types.ObjectId, ref: 'Habit'}],
  }
  
habit={
  title: String,
  description: String,
  }

```

## Data structure

### Front-end routes

- ('/list') : home page 
- ('/add-habit') : form page to create new habit

## Rest Endpoint:
`http://localhost:4000/api/v1`

## Todo API endpoints

### WARNING: The API is empty so don't expect any result if you don't add data.

### Get All Todos
----
  Returns json data with all todos.
  
  | URL | Method | Params | Data Params | Success response | Error response|
  |--|--|--|--|--|--|
  |`/todos`|GET|None|None|Status 200||


**Get Todo**
----
  Returns json data about a single todo.
  
  | URL | Method | Params | Data Params | Success response | Error response|
  |--|--|--|--|--|--|
  |`/todos/:id`|GET|`id=[ObjectId]`|None|Status 200|Status 404|

**Create Todo**
----
  Returns json data about the created todo.
  
  | URL | Method | Params | Data Params | Success response | Error response|
  |--|--|--|--|--|--|
  |`/todos`|POST|None|`title=[String]`|Status 200|Status 400 |

**Update Todo**
----
  Returns json data about the updated todo.
  
  | URL | Method | Params | Data Params | Success response | Error response|
  |--|--|--|--|--|--|
  |`/todos/:id`|PUT|`id=[ObjectId]`|`title=[String]`|Status 200|Status 400 |


**Delete Todo**
----
  Returns json data about the deleted todo.
  
  | URL | Method | Params | Data Params | Success response | Error response|
  |--|--|--|--|--|--|
  |`/todos/:id`|DELETE|`id=[ObjectId]`|none|Status 200|Status 400 |


