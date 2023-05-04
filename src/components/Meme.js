
export default function Meme() {
    return (
        <main>
            <div className="form">
                <input 
                    type="text" 
                    placeholder="Top text" 
                    className="top-text-input" 
                />
                <input 
                    type="text" 
                    placeholder="Bottom text" 
                    className="bottom-text-input" 
                />
                <button className="form-btn">Get a New Meme Image ✨</button>
            </div>
        </main>
    )
}