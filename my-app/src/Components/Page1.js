import React, {useState} from "react";


const Page1 = (props) =>{
    const [slide, setSlide] = useState(0);
    const handleNextSlide = () => {
        setSlide(slide + 1)
    }
    const handlePreviousSlide = () => {
        setSlide(slide - 1)
    }
    const buttonRenderer = ()=> {
        return(               
        <div>
            <div onClick = {handleNextSlide} class="previous round">&#8249;</div>
            <div onClick = {handlePreviousSlide} class="next round">&#8250;</div>
        </div>
        )
    }

    return(
        <div className = "page1" >
            <div>
                {getConditionalContent(slide, handleNextSlide, handlePreviousSlide)}
            </div>
        </div>
    );
};

//Proof of concept. TODO: add state that saves name
const getConditionalContent = (slide, nextSlide, lastSlide) =>{
    switch (slide){
        case 0:
            return (
            <div>
                <h2>What is your name?</h2>
                <form onSubmit  = {nextSlide}>
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
                    <button onClick = {nextSlide}>How do we work?</button>
                </div>
                );
        case 2://FILL IN INFO ABOUT HOW 
            return(
                <div>
                    <button onClick = {nextSlide}>Lets get started!</button>
                </div>
            )

        default:
            return "oops nothing to see here"
    }
}

export default Page1;
