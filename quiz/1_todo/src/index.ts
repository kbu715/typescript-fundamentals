type Todo = {
  id: number;
  title: string;
  done: boolean;
};

let todoItems: Todo[];

// api
function fetchTodoItems(): Todo[] {
  const todos = [
    { id: 1, title: '안녕', done: false },
    { id: 2, title: '타입', done: false },
    { id: 3, title: '스크립트', done: false },
  ];
  return todos;
}

// crud methods
function fetchTodos(): Todo[] {
  const todos = fetchTodoItems();
  return todos;
}

function addTodo(todo: Todo): void {
  todoItems.push(todo);
}

function deleteTodo(index: number): void {
  todoItems.splice(index, 1);
}

function completeTodo(index: number, todo: Todo): void {
  todo.done = true;
  todoItems.splice(index, 1, todo);
}

// business logic
function logFirstTodo(): Todo {
  return todoItems[0];
}

function showCompleted(): Todo[] {
  return todoItems.filter(item => item.done);
}

function addTwoTodoItems(): void {
  const item1 = { id: 4, title: '코딩테스트', done: false };
  const item2 = { id: 5, title: '운동', done: false };
  addTodo(item1);
  addTodo(item2);
}

// NOTE: 유틸 함수
function log(): void {
  console.log(todoItems);
}

// 실행 Part
todoItems = fetchTodos();
addTwoTodoItems();
log();
logFirstTodo();

completeTodo(1, { id: 1, title: '안녕', done: false });
log();
logFirstTodo();

deleteTodo(1);

log();
logFirstTodo();

console.log(showCompleted());
