import React from 'react';
import {OBJModel} from 'react-3d-viewer'
import model from '../assets/models/bottomBody.obj'




function RocketBottom(props) {

   return(
     <div>
      <OBJModel src={model} texPath=""/>

    </div>

  );
}

export default RocketBottom