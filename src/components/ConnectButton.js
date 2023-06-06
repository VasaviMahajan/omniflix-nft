

import { useNavigate } from 'react-router-dom';
const ConnectButton = ({setAccount}) => {
  const navigate = useNavigate();
  async function connect() {

    console.log("called connect::::::::::::;");
    if (window.getOfflineSigner) {
      try {
        await window.keplr.enable('omniflixhub-1');
        const offlineSigner = window.getOfflineSigner('omniflixhub-1');
        const accounts = await offlineSigner.getAccounts();

        if (accounts.length > 0) {
          setAccount(accounts[0].address);
          console.log('Connected to Keplr account:', accounts[0]);
          navigate('/nft')
        }


      } catch (error) {
        console.error('Error connecting to Keplr:', error);
      }
    } else {
      alert("please install keplr")
    }
  };

  return (
    <>
      <div className="container d-flex align-items-center justify-content-center mt-5 p-3 flex-column">
        <div className='card w-50 shadow-sm p-5 mb-5 bg-body rounded'>
          <button className="btn btn-primary p-3 m-3 pe-auto" onClick={connect}>Connect kepler</button>
        </div>
      </div>
    </>
  );
};
export default ConnectButton;