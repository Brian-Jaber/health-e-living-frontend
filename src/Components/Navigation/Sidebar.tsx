import { Link } from 'react-router-dom'

interface SidebarItem {
  label: string,
  path: string; 
}

interface SidebarProps {
  items: SidebarItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ items } ) => {
  return (
    <div>
      <nav>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar;