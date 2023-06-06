import React from 'react'
import { useNavigate } from 'react-router-dom';

export const NFTOrg = ({ nft }) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1)
  }

  return (
    <>
      <button className='btn btn-primary m-5 text-center fs-3 rounded' onClick={goBack}>
        &#8672;
      </button>
      <div className='container bg-secondary p-5 d-flex align-items-center justify-content-center flex-column mt-5 mb-5'>
        <h3> {nft.nft.name}</h3>
        <div className='d-flex flex-row'>
          <p className="fw-normal">Denom : </p>
          <p className="fw-light">{nft.price.denom}</p>
        </div>
        <div className='d-flex flex-row'>
          <p className="fw-normal">Amount : </p>
          <p className="fw-light">{nft.price.amount}</p>
          
        </div>
        <div className='d-flex flex-row'>
          <p className="fw-normal">Id :  </p>
          <p className="fw-light">{nft.nft_id}</p>
          
        </div>
        <div className='d-flex flex-row'>
          <p className="fw-normal">Owner :  </p>
          <p className="fw-light">{nft.owner}</p>
          
        </div>
        <div className='d-flex flex-row'>
          <p className="fw-normal">Discrption: </p>
          <p className="fw-light">{nft.nft.description}</p>
           
        </div>
        <div className='d-flex flex-row'>
          <p className="fw-normal">Creator: </p>
          <p className="fw-light">{nft.nft.creator}</p>
           
        </div>
        <div className='d-flex flex-row'>
          <p className="fw-normal">Created at : </p>
          <p className="fw-light">{nft.nft.created_at}</p>
        </div>
      </div>


    </>
  )
}
