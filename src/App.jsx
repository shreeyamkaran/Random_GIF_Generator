import Random from "./Random";
import Tag from "./Tag";

export default function App() {
    return(
        <div className="w-full min-h-screen flex flex-col background">
            <h1 className="
            bg-white
            rounded-lg
            mt-[40px]
            text-center
            ml-[25px]
            mr-[25px]
            text-3xl
            font-bold
            ">
                Random GIFs
            </h1>
            <div className="flex 
            flex-col
            items-center
            gap-y-10
            mt-[30px]
            ">
                <Random />
                <Tag />
            </div>
        </div>
    );
}
