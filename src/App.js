import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const App = () => {
  return (
   <>
      
      <TodoForm />
      <TodoList />
   </>
  );
};

export default App;






// import React, { useEffect } from "react";
// import "./styles.css";
// import InputField from "./components/InputField";
// import TodosList from "./components/TodosList";
// // import { deleteAll, persistTodos } from "./components/redux/redux/action/addTodo";
// import { connect } from "react-redux";
// import { deleteAll, persistTodos } from "./redux/redux/action/addTodo";
// const App = () => {
//   useEffect(() => {
//     persistTodos();
//   }, [persistTodos]);
//   return (
//     <div className="App">
//       <h1 style={{ textDecoration: "underline" }}> Todos App</h1>
//       <InputField />
//       <TodosList />
//       <div>
//         <button
//           style={{ marginTop: "20px", cursor: "pointer" }}
//           onClick={deleteAll}
//         >
//           {" "}
//           Delete All
//         </button>
//       </div>
//     </div>
//   );
// };

// const mapDispatchToProps = dispatch => ({
//   deleteAll: () => dispatch(deleteAll()),
//   persistTodos: () => dispatch(persistTodos())
// }); 
// export default connect(
//   null,
//   mapDispatchToProps
// )(App);
