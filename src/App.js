import './App.css';

import ConnectButton from './components/ConnectButton';
import NFTList from './components/NFTList';

import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import { NFTOrg } from './components/NFTOrg';
function App() {

  const [account,setAccount] = useState("")
  const [nft, setNft] = useState({})
  const [nfts, setNFTs] = useState([]);
  return (

    <Router>
        <Routes>
          <Route exact path='/' element={< ConnectButton setAccount={setAccount}/>}></Route>
          <Route exact path='/nft' element={< NFTList account ={account} setAccount={setAccount} setNft={setNft} nfts={nfts} setNFTs={setNFTs}/>}></Route>
          <Route exact path='/nftorg' element={< NFTOrg nft = {nft} />}></Route>
        </Routes>
    </Router>
  );
}

export default App;
