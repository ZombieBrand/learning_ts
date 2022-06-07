interface Todo {
  title: string
  description: string
  completed: boolean
}

/**
 * extends 类型约束
 * keyof检查T的keys, keys = "title" |"description" | "completed", 指定U是keys中的一个成员
 */
type MyPick<T, U extends keyof T> = {
  [P in U]: T[P]
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

// const todo: TodoPreview = {
//   title: 'Clean room',
//   completed: false,
// }