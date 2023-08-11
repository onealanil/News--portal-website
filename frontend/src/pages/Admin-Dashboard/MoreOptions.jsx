import { IoMdTrash } from "react-icons/io";
import { AiFillEye } from "react-icons/ai";
import { IoMdSend } from "react-icons/io";
import {GrRevert} from "react-icons/gr";


function MoreOptions({published}){



    const options = [
        {
            icon: published ?  <GrRevert className="text-2x"/> : <IoMdSend/>,
            text: published ? "Revert to Draft" :  "Publish",
        },
        {
            icon: <AiFillEye/>,
            text: "View",
        },
        
        {
            icon: <IoMdTrash/>,
            text: "Delete",
        },
        
        
    ] 
    return(
        <div 
      className="absolute  bg-white border rounded shadow"
      onClick={e => e.stopPropagation()}
    >
            {options.map((val)=>(
                <span className="text-txtLight flex w-full px-4 items-center border-b-[1px] border-gray-300 hover:bg-gray-200 gap-1 hover:text-dark cursor-pointer">{val.icon} {val.text}</span>
            ))}
        </div>
    )
}

export default MoreOptions;