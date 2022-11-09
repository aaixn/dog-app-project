import React from "react";

const Header = ({setView}) => {
    return(
        <div className="title">
            <h1>my dog website</h1>
            <div className="links">
                <span onClick={() => {setView('breed list')}}>breed list</span>
                <span onClick={() => {setView('random dogs')}}>random dog pix</span>
            </div>
        </div>
    )
}

export default Header