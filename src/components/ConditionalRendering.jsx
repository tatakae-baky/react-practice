import React from "react";

const ConditionalRendering = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <ul key={index}>
          <li>
            {task.task} : {task.isDone ? "Done" : "Do it"}{" "}
          </li>
        </ul>
      ))}
    </div>
  );
};

// here it means that if isDone is equal to true then and only then only you execute the "Done".

//  Similarly if its !isDone that would mean that if and only if isDone is false then execute the "Done".

// const ConditionalRendering = ({ tasks }) => {
//   return (
//     <div>
//       {tasks.map((task, index) => (
//         <ul key={index}>
//           <li> {task.task} : {task.isDone && "Done"} </li>
//           {/* <li> {task.task} : {!task.isDone && "Do it"} </li> */}
//         </ul>
//       ))}
//     </div>
//   );
// };

// here it means that if isDone is false then only you should execute "Do it". And !isDone means true in that sense.

// const ConditionalRendering = ({ tasks }) => {
//   return (
//     <div>
//       {tasks.map((task, index) => (
//         <ul key={index}>
//           <li> {task.task} : {task.isDone || "Do it"} </li>
//           {/* <li> {task.task} : {!task.isDone || "Done"} </li> */}
//         </ul>
//       ))}
//     </div>
//   );
// };

export default ConditionalRendering;
