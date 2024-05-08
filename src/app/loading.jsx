import { BarLoader, BeatLoader, PropagateLoader } from "react-spinners";

export default function Loading(){

    return(
        <div className="w-full h-full absolute top-0 left-0 z-10
         bg-slate-50 flex justify-center items-center">
            <PropagateLoader color="#36d7b7" width={'100%'}/>
        </div>
    );
}