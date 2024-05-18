import {Link} from "react-router-dom";

const Navbar = () => {

    const title = "Movies&TVShows";
    const titleArray = title.split(/(?=&)|(?<=&)/);

    const navLinks = [
        {title: 'Home', path: '/'},
        {title: 'Movies', path: '/movies'},
        {title: 'TV Shows', path: '/tv-shows'},
    ]

    return (
        <div className="flex p-2 py-4 pr-10">
            <p className="text-2xl italic">
                {titleArray.map((part, index) => (
                    <span key={index} style={{ color: index === 1 ? 'white' : 'red' }}>{part}</span>
                ))}
            </p>
            <div className="flex ml-auto gap-5">
                {navLinks.map((link, index) => (
                    <Link key={index} to={link.path} className="text-gray-300 font-semibold text-xl hover:text-red-500 duration-500">{link.title}</Link>
                ))}
            </div>
        </div>
    );
};

export default Navbar;