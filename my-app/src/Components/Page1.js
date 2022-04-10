import React, {useState} from "react";


const Page1 = (props) =>{
    const [slide, setSlide] = useState(0);

    return(
        <div className = "page1" >
            <div>
                {getConditionalContent(slide, setSlide, props.setPage)}
            </div>
        </div>
    );
};

//Proof of concept. TODO: add state that saves name
//(using setPage here is lazy bad practice. Go back and fix later)
const getConditionalContent = (slide, setSlide, setPage) =>{
    switch (slide){
        case 0:
            return (
            <div>
                <h2>What is your name?</h2>
                <form onSubmit  = {() => {setSlide(1)}}>
                    <input type= "text" placeholder="Your name.."></input>
                    <br></br>
                    <input type="submit" value="Continue..."></input>
                </form>
            </div>
            );
        case 1:
            return (
                <div>
                    <h2>Hello there Emily!</h2>
                    <p>This is Momento Mori, your place to learn about your death journey. 
                    </p>
                    <button onClick = {() => {setSlide(2)}}>How do we work?</button>
                </div>
                );
        case 2://FILL IN INFO ABOUT HOW 
            return(
                <div>
                    <h2>Our Goal For You:</h2>
                    <p>
                        orem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Etiam sodales velit quis tortor vestibulum, ac pellentesque libero commodo. 
                        Praesent lectus tortor, vestibulum at vulputate et, luctus nec sem. Sed sit 
                        amet sodales ligula, vel commodo dolor. Interdum et malesuada fames ac ante ipsum 
                        primis in faucibus. Curabitur magna nunc, bibendum vitae est vel, sagittis porttitor diam. 
                        Praesent tincidunt efficitur orci vitae cursus. Nulla felis magna, dignissim non faucibus non, 
                        facilisis at tortor. Vivamus in dignissim nunc. 
                    </p>
                    <br></br>
                    <button onClick = {()=> {setPage(1)}}>Lets get started!</button>
                </div>
            )

        default:
            return "oops nothing to see here"
    }
}

export default Page1;
