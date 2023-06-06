import React, { useEffect } from 'react';
import getNFTsFromOmniFlix from './api';
import { useNavigate } from 'react-router-dom';
import { Corousal } from './Corousal';
import { ThreeDots } from 'react-loader-spinner';


const NFTList = ({ account, setAccount, setNft, nfts, setNFTs }) => {

  console.log(account)
  const navigate = useNavigate();
  

  console.log("function");
  
  useEffect(() => {
    const handleAccountChange= async () => {
      const offlineSigner = window.getOfflineSigner('omniflixhub-1');
      const accounts = await offlineSigner.getAccounts();
  
      if (accounts.length > 0) {
        setAccount(accounts[0].address);
      }
    }

    const intervalId = setInterval(handleAccountChange, 1000); // Call the function every 1 second

    return () => {
      clearInterval(intervalId); // Clean up the interval when the component unmounts
    };
  }, []); 

  

  useEffect(() => {
    // Fetch NFTs from OmniFlix blockchain using your API integration

    if(nfts.length==0){
    const fetchNFTs = async () => {
      try {
        const fetchedNFTs = await getNFTsFromOmniFlix().then(data => {
          setNFTs(data)
          console.log(nfts)
        }); // Call your API function to retrieve NFTs
        // setNFTs(fetchedNFTs.list);
      } catch (error) {
        console.error('Error fetching NFTs:', error);
      }
    };

    fetchNFTs();
  }
  }, []);

  return (
    <>
      <div className="container d-flex flex-row align-items-center justify-content-center mt-5 p-3 flex-column">
        <h3> Connected account:</h3>
        <div>{account}</div>
      </div>

      <div>
        {
          nfts.length != 0 ? <Corousal nfts={nfts} setNft={setNft} /> : (
            <div className='d-flex align-items-center justify-content-center'>
            <ThreeDots
              height="80"
              width="80"
              radius="9"
              color="#4fa94d"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
            </div>
          )
        }
      </div>
    </>
  );
};

export default NFTList;
