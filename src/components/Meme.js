import { useEffect, useState } from "react";


export default function Meme() {
    const [meme, setMeme] = useState({
        topText: "", 
        bottomText: "", 
        randomImage: "http://i.imgflip.com/1bij.jpg"
    }); 
    const [allMemeImages, setAllMemeImages] = useState([]); 

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json()) // through json --> change to js object that can be used 
        .then(data => setAllMemeImages(data.data.memes)) // set the state with the data --> only want data.memes from api 

    }, []) // empty dependency so it won't render infinitely 

    function getMemeImage() {
        const randomNumber = Math.floor( Math.random() * allMemeImages.length );
        const url = allMemeImages[randomNumber].url;

        setMeme(prevMeme => {
            return {
                ...prevMeme, 
                randomImage: url
            }
        })
    } 

    function handleChange(event) {
        const {name, value} = event.target;

        setMeme(prevMemeState => {
            return {
                ...prevMemeState, 
                // [] -> when dot notation is present or destructured -- or else it won't work 
                // [event.target.name]: event.target.value 
                [name]: value 
            }
        })
    }


    return (
        <main>
            <div className="form">
                <input 
                    type="text" 
                    placeholder="Top text" 
                    className="top-text-input" 
                    onChange={handleChange}
                    name="topText" // ? -> name - to associate which input is being targeted 
                    value={meme.topText} // ? -> value - controlled input - state is now telling what is the value 
                />
                <input 
                    type="text" 
                    placeholder="Bottom text" 
                    className="bottom-text-input" 
                    onChange={handleChange}
                    name="bottomText"
                    value={meme.bottomText}  
                />
                <button 
                    className="form-btn" 
                    onClick={getMemeImage}
                >
                    Get a New Meme Image ✨
                </button>
            </div>

            <div className="meme">
                <img src={meme.randomImage} alt="Meme" className="meme-image" />
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}