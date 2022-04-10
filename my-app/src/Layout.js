import React from "react";
import Page1 from "./Components/Page1"
import Page2 from "./Components/Page2"
import Page3 from "./Components/Page3"

const Layout = (props) =>{

    return(
        <div>
            {getCondtionalContent()}
        </div>
    );
};

//conditionally renders the three main sections
const getCondtionalContent = (page) =>{
    switch (page) {
        case 0:
            return <Page1 />
        case 1:
            return <Page2 />;
        case 2:
            return <Page3 />;
        }
}


export default Layout;