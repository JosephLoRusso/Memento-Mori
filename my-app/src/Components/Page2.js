import React from "react";
import Task from './Task.js';

const Page2 = (props) =>{

    return(
        <div className = "page2">
            <div className = "sidebar">
                <SideBar />
            </div>
            <div className = "tasklist">
                <TaskList />
                <button style = {{float: 'right'}}>All Done!</button>
            </div>
        </div>
    );
};


function SideBar(props) {
    return (
        <div>
            <h1>momento mori</h1>
            <p>~</p>
            <p>be the plans you want to see in the world</p>
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
            <Task description=" Create a password list" title="Create a password list" info="It is important to create a list of all important usernames and passwords. Make sure to keep this list secured in a safe place. You should plan for how you want your social media to be handled, as well as who should gain access to your email and other accounts, if anyone."/>
            <Task description=" Create a file with important documents" title="Store important documents and records safely" info="You should remember to keep all important documents in a safe place so that they can be accessed when you pass on. This includes documents such as your birth certificate or any identifying records. This can help your loved ones when going through your belongings."/>
            <Task description=" Create a living will" title="Create a living will" info="Having a living will can give you peace of mind knowing that if you ever are in a state where you can not speak for yourself, someone else can make decisions on behalf of your best interests. This can save your loved ones a lot of trouble, and ensure that you get what you desire if you ever are in these circumstances."/>
            <Task description=" Write a will" title="Why should I write a will" info="It is important to write a will to decide how your assets and belongings will be distributed after you pass on. There are several types of wills, each with specific benefits depending on your situation. You should decide what objects to include in your will (property, bank and retirement accounts, heirloom items, pets, etc…). You should also decide who inherits what items, or if you want it to go to organizations such as companies or charities. Make sure to sign the will in front of multiple witnesses who are not included in the will, or speak with an attorney. Finally, make sure to keep the will up to date every year and with each major life event such as weddings, divorces, and having children."/>
            <Task description=" Choose an executor for your will" title="Choose an executor for your will" info="Your will executor is the person responsible for your will after you pass on. They will make sure all the specifications are met in your best interests. Make sure to select someone who you trust, such as a family member or close friend. Talk with that person about being your executor and make sure they are comfortable with the task."/>
            <Task description=" Select guardians for any children" title="Selecting guardians for any children" info="If you have children, make sure you have plans written out for who will take care of them after you pass on. Make sure you talk to whoever you are giving them to to make sure they are willing to take on this responsibility."/>

            <h2>Personal</h2>
            <Task description=" Preparing an obituary" title="Preparing an obituary" info="more detailed info on task"/>
            <Task description=" Plan for your final disposition" title="title for task info" info="more detailed info on task"/>
            <Task description=" Plan for any religious ceremonies" title="title for task info" info="more detailed info on task"/>
            <Task description=" Write messages to loved ones" title="title for task info" info="more detailed info on task"/>
        </div>
    );
};

export default Page2;
