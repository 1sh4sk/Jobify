import { useDashboardContext } from "../pages/DashboardLayout"
import links from "../utils/links"
import { NavLink } from "react-router-dom"

const NavLinks = ({ isBigSidebar }) => {
    const { toggleSidebar, user } = useDashboardContext()
    return (
        <div className="nav-links">
            {links.map((link) => {
                const { text, path, icon } = link;
                const { role } = user

                if (path === 'admin' && role !== 'admin') return;

                return (
                    <NavLink
                        to={path}
                        key={text}
                        className='nav-link'
                        onClick={isBigSidebar ? null : toggleSidebar}
                        end>
                        {/* end prop is used in navlink to make the parent link inactive, because it always stays active since the other links are nested */}
                        <span className='icon'>{icon}</span>
                        {text}
                    </NavLink>
                );
            })}
        </div>
    )
}
export default NavLinks 