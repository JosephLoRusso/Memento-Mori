import React, {useState} from "react";
import Page1 from "./Components/Page1"
import Page2 from "./Components/Page2"
import Page3 from "./Components/Page3"

const Layout = (props) =>{
    const [page, setPage] = useState(0);
    return(
        <div>
            {getCondtionalContent(page, setPage)}
        </div>
    );
};


//conditionally renders the three main sections
const getCondtionalContent = (page, setPage) =>{
    switch (page) {
        case 0:
            return <Page1 setPage = {setPage}/>
        case 1:
            return <Page2 setPage = {setPage}/>;
        case 2:
            return <Page3 setPage = {setPage}/>;
        }
}


export default Layout;