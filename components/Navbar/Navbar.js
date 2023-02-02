
const Navbar = () => {
    return (
        <div className="px-20 pt-10 bg-transparent">
            <div className="flex justify-between items-center">
            <div className="flex font-[Grotesque] items-center text-xl">
                <span className="bg-[#6765F0] text-white rounded-[10px]  px-[6px] py-[3px]">
                    <h1>Gym</h1>
                </span>
                <h1 className="text-[#6765F0] mx-1">baran</h1>
            </div>
            <div className="flex gap-10 text-base items-center">
                <p>Home</p>
                <p>Program</p>
                <p>Blog</p>
                <p>About us</p>
                <button className="drop-shadow-2xl rounded-[10px] px-8 py-3 bg-[#264373] text-white">Log in</button>
            </div>
            </div>
        </div>
    );
};

export default Navbar;