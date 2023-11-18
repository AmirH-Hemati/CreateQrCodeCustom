import { Link } from "react-router-dom";


function NavItem( {ActiveButton , setActiveButton , to , icon}) {
  return (
    <div>

<Link to={`/${to}`}>
          <button
            onClick={() => {
              setActiveButton(to);
            }}
            style={{
              color: ActiveButton !== to ? "#00288A" : "#fff",
              backgroundColor: ActiveButton !== to? "#fff" : "#00288A",
            }}
          >
            {icon}
          </button>
        </Link>
    </div>
  )
}

export default NavItem