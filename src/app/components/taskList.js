"use client";
import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const tasksPerPage = 8; 

  useEffect(() => {
 
    fetch("https://6363c8f68a3337d9a2e7d805.mockapi.io/api/to-do")
      .then((response) => response.json())
      .then((data) => setTasks(data));
  }, []);

  
  const offset = pageNumber * tasksPerPage;
  const currentTasks = tasks.slice(offset, offset + tasksPerPage);

  
  const handlePageChange = (selectedPage) => {
    setPageNumber(selectedPage.selected);
  };

  
  const markTaskAsDone = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: true } : task
    );
    setTasks(updatedTasks);
  };


  return (
    <>
    <div>
      {currentTasks.map((task) => (
        
        <div key={task.id}>
          <table>
            <tbody>
              <tr>
                <td>
                  <FontAwesomeIcon
                    icon={faBell}
                    style={{
                      color: getColorForPriority(task.priority),
                      marginRight: "10px",
                      paddingTop: "8px",
                    }}
                  />
                </td>
                <td>
                <span style={{ fontSize: '12px', marginLeft:'2px'}}>
                  {task.todo}
                  </span>
                  <br />
                  {!task.completed && (
                    <button onClick={() => markTaskAsDone(task.id)}>
                      Mark as Done
                    </button>
                  )}
                </td>
                <td>
                  <span style={{ marginLeft:'100px' }}
                    className={`status ${
                      task.completed ? "completed" : "pending"
                    }`}
                  >
                    {task.completed ? "Done" : "InProgress"}

                  </span>
                </td>
                <td>
                  <span
                    style={{
                      fontSize: "14px",
                     
                    }}
                  >
                    {new Date(task.createdAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
      
      
    </div>
    <div>
        <ReactPaginate
          pageCount={Math.ceil(tasks.length / tasksPerPage)}
          pageRangeDisplayed={3}
          marginPagesDisplayed={1}
          onPageChange={handlePageChange}
          containerClassName="pagination-container"
          pageClassName="pagination-item"
          activeClassName="pagination-item-active"
          previousLabel={<a href="#">&laquo;</a>}
          nextLabel={<a href="#">&raquo;</a>}
          breakLabel={'...'}
          breakClassName={'pagination-item'}
        />
      </div>
    </>
  );
}

export default TaskList;


function getColorForPriority(priority) {
  switch (priority) {
    case "LOW":
      return "blue";
    case "MEDIUM":
      return "yellow";
    case "HIGH":
      return "red";
    default:
      return "black"; 
  }
}
