import React from 'react';
import {FaCopy, FaShare, FaYoutube} from "react-icons/fa6";
import {RiNetflixFill} from "react-icons/ri";
import {toast} from "react-toastify";

const Actions = ({title, trailer, netflix}) => {

    const openLink = (url) => {
        window.open(url)
    }

    const copyLinkFromUrl = () => {
        navigator.clipboard.writeText(window.location.href)
        if (navigator.clipboard.writeText) {
            toast.success('Link copied to clipboard')
        } else {
            toast.error('Failed to copy link to clipboard')
        }
    }

    const shareLinkOnSocialMedia = () => {
        navigator.share({
            title: title,
            text: `Check out this ${title}`,
            url: window.location.href
        })
            .then(() => console.log('Successful share'))
            .catch((error) => console.log('Error sharing', error));
    }

    return (
        <div className="text-black flex flex-col gap-2">
            <div onClick={() => openLink(trailer)} className="flex gap-2 justify-center py-3 px-2 min-w-[170px] text-center bg-gray-300 w-fit items-center cursor-pointer">
                <FaYoutube size={22}/>
                <p>Watch trailer</p>
            </div>
            <div onClick={shareLinkOnSocialMedia} className="flex gap-2 justify-center py-3 px-2 min-w-[170px] bg-gray-300 w-fit items-center cursor-pointer">
                <FaShare size={22}/>
                <p>Share link</p>
            </div>
            <div onClick={copyLinkFromUrl} className="flex gap-2 justify-center py-3 px-2 min-w-[170px] text-center bg-gray-300 w-fit items-center cursor-pointer">
                <FaCopy size={22}/>
                <p>Copy link</p>
            </div>
            {netflix ? <div onClick={() => openLink(netflix)} className="flex gap-2 justify-center py-3 px-2 min-w-[170px] bg-gray-300 w-fit items-center cursor-pointer">
                <RiNetflixFill/>
                <p>Watch on Netflix</p>
            </div> : null}
        </div>
    );
};

export default Actions;