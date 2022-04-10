import React from "react";

const Layout = (props) =>{
    
    return(
        <div>
            {getCondtionalContent()}
        </div>
    );
};

//conditionally renders the three main pages ba
const getCondtionalContent = (page, setPage) =>{
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