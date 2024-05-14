const Navbar = () => {

    const title = "Movies&TVShows";
    const titleArray = title.split(/(?=&)|(?<=&)/);

    const navLinks = [
        {title: 'Home', path: '/'},
        {title: 'Movies', path: '/movies'},
        {title: 'TV Shows', path: '/tv-shows'},
    ]

    return (
        <div className="flex p-2 pr-10">
            <p className="text-2xl italic">
                {titleArray.map((part, index) => (
                    <span key={index} style={{ color: index === 1 ? 'white' : 'red' }}>{part}</span>
                ))}
            </p>
            <div className="flex ml-auto gap-5">
                {navLinks.map((link, index) => (
                    <a key={index} href={link.path} className="text-white hover:text-red-500 duration-500">{link.title}</a>
                ))}
            </div>
        </div>
    );
};

export default Navbar;