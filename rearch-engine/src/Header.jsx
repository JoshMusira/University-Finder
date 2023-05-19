

const Header = () =>{

    return(
        <div className="header">
            <span>Current Universities</span>
            <div className="subHeader">
                <input type="text" placeholder="Type any country..." />
                <button>Search...</button>
            </div>
        </div>
    )
}
export default Header;