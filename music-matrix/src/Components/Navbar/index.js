import Button from "../Button"
import SeacrhBox from "../SearchBox"
import './navbar.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <img src ='logo.png' alt="logo" width={67} height={34}/>
            <SeacrhBox />
            <Button>Give Feedback</Button>
        </div>
    );
}
export default Navbar;