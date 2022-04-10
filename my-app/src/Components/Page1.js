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
                        Talking about death can be incredibly difficult. Planning for your own death, even more so. But by
                        thinking about the subject now and taking steps to prepare early, you can help your loved ones focus
                        on grieving, rather than a mountain of difficult decisions, trivial tasks, and financial debt. And for
                        you, getting this out of the way earlier on in your life means you can focus more on the thing that matters
                        most: living.
                        <br></br>
                        <br></br>
                        In the words of Caitlin Doughty, “Facing death is not for the faint-hearted. It is far too challenging to expect that each citizen will do so on [their] own."
                        We hope Momento Mori will accompany you on this journey and make facing death just a little less scary.
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
