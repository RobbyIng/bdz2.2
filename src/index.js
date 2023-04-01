import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
// import { Layout } from './layout';
import { SignIn } from './pages/SignIn';
import { Main } from "./layout/main"
import { Layout } from './layout';
import { Home } from './pages/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'signin',
        element: <SignIn />
      },
      {
        path: "products",
        element: <Main />,
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

// // navigate('todos') : /asd -> asd/todos
// // navigate('/todos') : /asd -> /todos

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         index: true,
//         element: <Home />
//       },
//       {
//         path: "todos",
//         element: <Todos />,
//       },
//       {
//         path: "todos/:idOfTodo", // :idOfTodo = параметр
//         element: <CurrentTodo />,
//         children: [
//           {
//             path: 'update',
//             element: <UpdateForm />
//           }
//         ]
//       },
//       {
//         path: 'contacts',
//         element: <Contacts />
//       }
//     ]
//   },
// ]);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <TodosContextProvider>
//       <RouterProvider router={router} />
//     </TodosContextProvider>
//   </React.StrictMode>
// );
