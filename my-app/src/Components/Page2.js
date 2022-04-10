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
            <Task description="Set up a funeral fund" title="Funerals can be expensive" info="When a loved one passes on, their family is often left with the burden of funding a funeral and other ceremonies. This can become a significant source of financial stress if you do not plan ahead. Deciding what type of funeral you want and setting aside a funeral fund can help alleviate much of that stress."/>
            <Task description="Manage life insurance policies" title="Make sure your life insurance is in order" info="If you have life insurance policies, you should make sure they will be taken care of by your lived ones."/>
            <Task description="Consider donating to charity" title="Consider donating to charity" info="Making a charitable donation is a common request for people. If you would like to donate to charity, select an organization, or multiple organizations, you would like to donate to and include them in your will. Money can be taken from your estate to help build your legacy."/>

            <h2>Practical</h2>
            <Task description="Create a password list" title="Create a password list" info="It is important to create a list of all important usernames and passwords. Make sure to keep this list secured in a safe place. You should plan for how you want your social media to be handled, as well as who should gain access to your email account, if anyone."/>
            <Task description="Create a file with important documents" title="Store important documents and records safely" info="You should remember to keep all important documents in a safe place so that they can be accessed when you pass on. This includes documents such as your birth certificate or any identifying records. This can help your loved ones when going through your belongings."/>
            <Task description="Create a living will" title="Create a living will" info="Having a living will can give you peace of mind knowing that if you ever are in a "/>
            <Task description="Write a will" title="title for task info" info="more detailed info on task"/>
            <Task description="Choose an executor for your will" title="title for task info" info="more detailed info on task"/>
            <Task description="Select guardians for any children" title="title for task info" info="more detailed info on task"/>

            <h2>Personal</h2>
            <Task description="Preparing an obituary" title="title for task info" info="more detailed info on task"/>
            <Task description="Plan for your final disposition" title="title for task info" info="more detailed info on task"/>
            <Task description="Plan for any religious ceremonies" title="title for task info" info="more detailed info on task"/>
            <Task description="Write messages to loved ones" title="title for task info" info="more detailed info on task"/>
        </div>
    );
};

export default Page2;
