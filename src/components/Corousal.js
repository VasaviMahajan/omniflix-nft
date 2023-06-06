import React, { useRef, useState } from 'react'
import Mycard from './Mycard.js'
import './Imagecarousel.css'

export const Corousal = ({ nfts, setNft }) => {
    const boxRef = useRef(null);
    const vwInPixels = window.innerWidth;
    const btnpressprev = () => {
            const box = boxRef.current;
            box.scrollLeft = box.scrollLeft - vwInPixels - 10;
        
    }

    const btnpressnext = () => {
        const box = boxRef.current;
        box.scrollLeft = box.scrollLeft + vwInPixels + 10;

    }
    return (
        <div className="product-carousel">
            <button className="pre-btn" onClick={btnpressprev}><p>&lt;</p></button>
            <button className="next-btn" onClick={btnpressnext}><p>&gt;</p></button>


            <div className="product-container" ref={boxRef}>
                {nfts.map((nft, index) => (
                    <Mycard nft={nft} setNft={setNft} key={nft._id} />
                ))}
            </div>
        </div>
    )
}
