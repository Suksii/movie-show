import {MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight} from "react-icons/md";

const Pagination = ({prevPage, nextPage, dataPerPage, pages, data}) => {


    return (
        <div className="flex items-center justify-center my-12 text-white py-10">
            <button disabled={pages === 1}
                    onClick={prevPage}>
                <MdOutlineKeyboardArrowLeft size={28}/>
            </button>
            <button className={`py-2 px-4 ${pages === 1 ? '' : 'cursor-pointer'}`}

                    disabled={pages === 1}
                    onClick={prevPage}>
                {pages === 1 ? '' : pages - 1}
            </button>
            <button className="py-2 px-4 mx-3 cursor-pointer rounded-[50%] border-white border">
                {pages}
            </button>
            <button className={`py-2 px-4 ${Math.ceil(data.length / dataPerPage) ? '' : 'cursor-pointer'}`}
                    disabled={pages === Math.ceil(data.length / dataPerPage)}
                    onClick={nextPage}>
                {pages === Math.ceil(data.length / dataPerPage) ? '' : pages + 1}
            </button>
            <button disabled={pages === Math.ceil(data.length / dataPerPage)}
                    onClick={nextPage}>
                <MdOutlineKeyboardArrowRight size={28}/>
            </button>
        </div>
    );
};

export default Pagination;