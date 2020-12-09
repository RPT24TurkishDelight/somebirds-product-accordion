import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Accordion from './Accordion.jsx';
import ItemList from './ItemList.jsx';
import IconBox from './IconBox.jsx';
import axios from 'axios';
import accStyles from './css/accordionStyles.module.css';


const ProductMenu = (props) => {

  const [modelName, setModelName] = useState('mens-wool-runners');
  const [modelId, setModelId] = useState(props.modelId || 1);
  const [shoeData, setShoeData] = useState({});
  const [coreFeatures, setCoreFeatures] = useState([]);
  const [collapseId, setCollapseId] = useState(null);
  const [render, setRender] = useState(props.render || false);

  useEffect( () => {

    axios({
      method: 'get',
      url: `/products/${modelId}/summary`
    })
    .then((response) => {
      setShoeData(response.data);
      setModelName(response.data.name);
      setCoreFeatures(response.data.coreFeatures);
      setRender(true);
    })
    .catch((err) => {
      return err;
    });
  }, []);

  const openId = (e, id) => {
    (collapseId !== id) ? setCollapseId(id) : setCollapseId(null)
  };

  return (
    <div className={accStyles.menu}>
      {render && <div>
        <IconBox modelName={modelName}/>
        <Accordion title='Core Features' index={1} openedSectionId={collapseId} click={openId} content={<ItemList list={coreFeatures}/>} />
        <Accordion title='Description' index={2} openedSectionId={collapseId} click={openId} content={shoeData.description} contentType='text'/>
        <Accordion title='Shipping & returns' index={3} openedSectionId={collapseId} click={openId} contentType='text' content='Free shipping on orders over $50, and our no questions asked return policy for shoes through January 15. Lightly worn shoes get donated to Soles4Souls.'/>
        <Accordion title='Care Guide' index={4} openedSectionId={collapseId} click={openId} contentType='text' content='Pull out the insoles and laces. Slip your shoes into a delicates bag and toss them in the washing machine—gentle cycle with cold water with your favorite mild detergent. When they’re done, shake off any excess water and let them air dry. Handy tips: Don’t put them in the dryer. And don’t worry, they’ll go back to their original shape in no time. You can hand wash your laces and insoles on their own.'/>
      </div>}
    </div>
  )
}

export default ProductMenu;