import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";

// const API_KEY = "lBADoVvgUWreUyg3vJlgxaGw4T8he3QV";
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

export default function Tag() {

    const [name, setName] = useState("");
    const [gif, setGif] = useState("");
    const [loading, setLoading] = useState(false);
    
    async function fetchData() {
        setLoading(true);
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${name}`;
        const response = await axios.get(url);
        setGif(response.data.data.images.downsized_large.url);
        setLoading(false);
    }

    useEffect(function() {
        fetchData();
    }, []);

    function generateGif() {
        fetchData();
    }

    return (
            <div className="w-1/2
            bg-yellow-500
            rounded-lg
            text-center
            border
            border-black
            mb-[30px]
            ">
                <h1 className="
                text-2xl
                underline
                uppercase
                font-bold
                my-[15px]
                ">
                    Random {name} GIF
                </h1>
                <div className="flex justify-center">
                {
                    loading?
                    <div className="flex justify-center">
                        <Spinner />
                    </div>
                    :
                    <>
                        <img src={gif} className="w-3/5 mx-auto h-[150px]" alt="GIF" />
                    </>
                }
                </div>
                <input type="text" value={name} onChange={ev => setName(ev.target.value)} className="
                w-4/5
                py-2
                mt-[15px]
                text-center
                rounded-lg
                "
                />
                <button onClick={generateGif} className="
                w-4/5
                bg-white
                opacity-70
                text-lg
                py-2
                rounded-lg
                my-[20px]
                ">
                    Generate
                </button>
            </div>
    );
}