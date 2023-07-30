import {BiChevronDown} from "react-icons/bi";

function Navlinks({ulClassName, liClassName, iconClassName}){

    return(
        <>
       <ul className={ulClassName}>
        <li className={liClassName}><a href="/" >Home</a></li>
        <li className={liClassName}><a href="/category" >Politics</a></li>
        <li className={liClassName}><a href="/category" >Business</a></li>
        <li className={liClassName}><a href="/category" >Sports</a></li>
        <li className={liClassName}><a href="/category" >Science&Tech</a></li>
        <li className={liClassName}><a href="/category" >International</a></li>
        <li className={liClassName}><a href="/category" >Climate</a></li>
        <li className={liClassName}><a href="/" >More </a> <BiChevronDown className={iconClassName}/></li>
       </ul>
       </>
    )
}
export default Navlinks;