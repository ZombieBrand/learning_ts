type MyReadonly<T> = {
    /**
     * 遍历对象 => in keyof
     * P in title | description
     * readonly = 只读
     */
   readonly [P in keyof T]: T[P]
}

interface Todo {
    title: string
    description: string
}

// const todo: MyReadonly<Todo> = {
//     title: "Hey",
//     description: "foobar"
// }

// todo.title = "Hello" // Error: cannot reassign a readonly property
// todo.description = "barFoo" // Error: cannot reassign a readonly property