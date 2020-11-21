import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Accordian from './accordian.jsx';
import ItemList from './ItemList.jsx';
import axios from 'axios';


const ProductMenu = (props) => {

  const [modelName, setModelName] = useState(props.modelName);
  const [shoeData, setShoeData] = useState({});
  const [collapseId, setCollapseId] = useState(null);

  useEffect(() => {
    axios({
      method: 'get',
      url: `/products/${props.modelName}/summary`
    })
    .then((response) => {
      setShoeData(response.data);
    })
    .catch((err) => {
      return err;
    });
  }, []);

  const openId = (e, id) => {
    if (collapseId !== id) {
      setCollapseId(id);
    } else {
      setCollapseId(null);
    }
  };

  return (
    <div className='menu'>
      <Accordian title='Core Features' index={1} openedSectionId={collapseId} click={openId} content={<ItemList list={shoeData.coreFeatures}/>} />
      <Accordian title='Description' index={2} openedSectionId={collapseId} click={openId} content={shoeData.description} contentType='text'/>
      <Accordian title='Shipping & returns' index={3} openedSectionId={collapseId} click={openId} contentType='text' content='Free shipping on orders over $50, and our no questions asked return policy for shoes through January 15. Lightly worn shoes get donated to Soles4Souls.'/>
      <Accordian title='Care Guide' index={4} openedSectionId={collapseId} click={openId} contentType='text' content='Pull out the insoles and laces. Slip your shoes into a delicates bag and toss them in the washing machine—gentle cycle with cold water with your favorite mild detergent. When they’re done, shake off any excess water and let them air dry. Handy tips: Don’t put them in the dryer. And don’t worry, they’ll go back to their original shape in no time. You can hand wash your laces and insoles on their own.'/>
    </div>
  )
}

export default ProductMenu;