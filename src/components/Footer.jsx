import React from "react";

const date = new Date()
const currentYear = date.getFullYear();

function Footer(){
    return (
        <footer>
        <div>
            <p>{`Copyright ⓒ ${currentYear}`}</p>
        </div>
        </footer>
       
    )
}
export default Footer;