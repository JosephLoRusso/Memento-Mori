import React from "react";
import Task from './Task.js';

const Page2 = (props) =>{

    return(
        <div>
            <SideBar />
            <TaskList />
        </div>
    );
};


function SideBar(props) {
    return (
        <div>
            <h1>Whatever what we want on the side </h1>
        </div>
    );
};


function TaskList(props) {
    return (
        <div>
            <h2>Financial</h2>
            <Task description="thing to do" title="title for task info" info="more detailed info on task"/>
            <h2>Practical</h2>
            <Task description="thing to do" title="title for task info" info="more detailed info on task"/>
            <h2>Personal</h2>
            <Task description="thing to do" title="title for task info" info="more detailed info on task"/>
        </div>
    );
};

export default Page2;
