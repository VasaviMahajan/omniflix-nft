import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Mycard.css'

const Mycard = ({nft,setNft}) => {

    const navigate = useNavigate();
    const goToNft = () =>{
        setNft(nft)
    navigate("/nftorg")
    }
    return (
        <>
        <img className='mycard img-fluid' src = {nft.nft.preview_uri} onClick={goToNft} />
        </>
    )
}

export default Mycard