'use client'
import "./style.css";
import React from "react";
import { BsPlus, BsFilter } from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";
import TaskList from "./components/taskList";
import DonutChart from "./components/DoughnutChart";



export default function Home() {

  return (
    <>
      {/* SIDEBAR */}
      <section id="sidebar">
        <a href="#" className="brand">
          <i className="bx bxs-smile" />
          <span className="text">Acmy Solutions</span>
        </a>
        <ul className="side-menu top">
          <li className="active">
            <a href="#">
              <i className="bx bxs-dashboard" />
              <span className="text">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#" className="logout">
              <i className="bx bxs-log-out-circle" />
              <span className="text">Logout</span>
            </a>
          </li>
        </ul>
      </section>
      {/* SIDEBAR */}
      {/* CONTENT */}
      <section id="content">
        {/* NAVBAR */}
        <nav>
          <i className="bx bx-menu" />
          <a href="#" className="nav-link">
            Categories
          </a>
          <form action="#">
            <div className="form-input">
              <input type="search" placeholder="Search..." />
              <button type="submit" className="search-btn">
                <i className="bx bx-search" />
              </button>
            </div>
          </form>
          {/* <input type="checkbox" id="switch-mode" hidden="" />
          <label htmlFor="switch-mode" className="switch-mode" /> */}
          <a href="#" className="notification">
            <IoMdNotifications />
            <span className="num">8</span>
          </a>
          <a href="#" className="profile">
            <img src="./images/hasa1.ico"  />
          </a>
        </nav>
        {/* NAVBAR */}
        {/* MAIN */}
        <main>
          <div className="box-border">
            <div className="bord">
              <h3>Welcome back, Ravindu Hasaranga</h3>
              <div>
                <p>
                  The end of the year is coming. Are you planning your
                  performance interviews? You can do this super efficiently with
                  Acmy.
                </p>
                <a href="#">Look here for more information</a>
              </div>
            </div>
          </div>
          <div className="table-data">
            <div className="order">
              <div className="head">
                <h3>Tasks</h3>
                <i className="bx bx-search" />
                <i className="bx bx-filter" />
              </div>
              <TaskList />
            </div>
            <div className="todo">
              <div className="head">
                <h3>Activity Feed</h3>
                <BsPlus />
                <BsFilter />
              </div>
              <ul className="todo-list">
                <li className="completed">
                  <div className="image">
                  <img src="img/people.png" />
                  </div>
                  <div className="right">
                  <p>
                    Kushantha Charuka created Contract #00124 need John Beige’s
                    signature Sep 16, 2022 at 11:30 AM
                  </p>
                  </div>
                </li>
                <li className="completed">
                <div className="image">
                  <img src="img/people.png" />
                  </div>
                  <div className="right">
                  <p>
                    Kushantha Charuka created Contract #00124 need John Beige’s
                    signature Sep 16, 2022 at 11:30 AM
                  </p>
                  </div>
                </li>
                <li className="completed">
                <div className="image">
                  <img src="img/people.png" />
                  </div>
                  <div className="right">
                  <p>
                    Kushantha Charuka created Contract #00124 need John Beige’s
                    signature Sep 16, 2022 at 11:30 AM
                  </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <DonutChart/>
          </div>

        </main>
        {/* MAIN */}
      </section>
      {/* CONTENT */}
    </>
  );
}
