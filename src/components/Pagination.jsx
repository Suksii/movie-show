import {MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight} from "react-icons/md";

const Pagination = ({prevPage, nextPage, dataPerPage, pages, data}) => {

    const totalPages = Math.ceil(data.length / dataPerPage);

    return (
        <div className="flex items-center justify-center my-12 text-gray-300 py-10 text-xl">
            <button disabled={pages === 1}
                    onClick={prevPage}
                    className={`py-2 px-4 ${pages === 1 ? 'cursor-not-allowed' : 'hover:text-red-600 transition-colors duration-500 cursor-pointer'}`}
            >
                <MdOutlineKeyboardArrowLeft size={28}/>
            </button>
            <button className={`py-2 px-4 ${pages === 1 ? '' : 'cursor-pointer'}`}

                    disabled={pages === 1}
                    onClick={prevPage}>
                {pages === 1 ? '' : pages - 1}
            </button>
            <button className="py-2 px-4 mx-3 cursor-pointer rounded-[50%] border-gray-300 border">
                {pages}
            </button>
            <button className={`py-2 px-4 ${totalPages ? '' : 'cursor-pointer'}`}
                    disabled={pages === totalPages}
                    onClick={nextPage}>
                {pages === totalPages ? '' : pages + 1}
            </button>
            <button disabled={pages === totalPages}
                    className={`py-2 px-4 ${pages === totalPages ? 'cursor-not-allowed' : 'hover:text-red-600 cursor-pointer transition-colors duration-500'}`}
                    onClick={nextPage}>
                <MdOutlineKeyboardArrowRight size={28}/>
            </button>
        </div>
    );
};

export default Pagination;