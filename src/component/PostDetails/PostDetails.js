import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import CalenderDate from '../CalenderDate/CalenderDate';
import { travelPlaces } from '../Home/Home';
import './PostDetails.css'


const PostDetails = () => {
    const { placeKey } = useParams();
    
    const post = travelPlaces.find(place => console.log(place) );
        // console.log(post)
        console.log(useParams());
    return (

        <div className="container">
            <h3>{placeKey} comming soon</h3>
          
        </div>

    );
};

export default PostDetails;