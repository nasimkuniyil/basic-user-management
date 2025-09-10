import { useNavigate } from "react-router-dom"
import Button from "../components/Button"

const Header = () => {

    const navigate = useNavigate();
    const handleClick = ()=>{
        navigate("/profile/123")
    }

  return (
    <div className="flex justify-between items-center px-10 py-3 shadow bg-white">
        <div>
            <h4>APP NAME</h4>
        </div>
        <div>
            <Button onClick={handleClick}>Profile</Button>
        </div>
    </div>
  )
}

export default Header