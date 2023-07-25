import {BiChevronDown} from "react-icons/bi";

function Navlinks({ulClassName, liClassName, iconClassName}){

    return(
        <>
       <ul className={ulClassName}>
        <li className={liClassName}><a href="www.google.com" >Home</a></li>
        <li className={liClassName}><a href="www.google.com" >Politics</a></li>
        <li className={liClassName}><a href="www.google.com" >Business</a></li>
        <li className={liClassName}><a href="www.google.com" >Sports</a></li>
        <li className={liClassName}><a href="www.google.com" >Science&Tech</a></li>
        <li className={liClassName}><a href="www.google.com" >International</a></li>
        <li className={liClassName}><a href="www.google.com" >Climate</a></li>
        <li className={liClassName}><a href="www.google.com" >More </a> <BiChevronDown className={iconClassName}/></li>
       </ul>
       </>
    )
}
export default Navlinks;