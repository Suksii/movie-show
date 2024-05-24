import {Link, useLocation} from "react-router-dom";

const Navbar = () => {

    const title = "Movies&TVShows";
    const titleArray = title.split(/(?=&)|(?<=&)/);

    const navLinks = [
        {title: 'Home', path: '/'},
        {title: 'Movies', path: '/movies'},
        {title: 'TV Shows', path: '/tv-shows'},
    ]

    const path = useLocation().pathname;
    console.log(path)

    return (
        <div className="flex p-2 py-4 pr-10 flex-col md:flex-row items-center md:justify-between">
            <p className="text-2xl italic">
                {titleArray.map((part, index) => (
                    <span key={index} style={{ color: index === 1 ? 'white' : 'red' }}>{part}</span>
                ))}
            </p>
            <div className="flex gap-5 p-3">
                {navLinks.map((link, index) => (
                    <Link key={index} to={link.path} className={`text-gray-300 font-semibold text-xl hover:text-red-600 duration-500 ${path === link.path ? 'text-red-600' : ''}`}>{link.title}</Link>
                ))}
            </div>
        </div>
    );
};

export default Navbar;