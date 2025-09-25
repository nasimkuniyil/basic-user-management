import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <div className="flex justify-start items-center px-10 py-3 shadow bg-white">
        <div>
            <h4><NavLink to={"/admin"}>APP NAME - Admin</NavLink></h4>
        </div>
    </div>
  )
}

export default Header