import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import CalenderDate from '../CalenderDate/CalenderDate';
import { travelPlaces } from '../Home/Home';
import './PostDetails.css'


const PostDetails = () => {
    const { placeKey } = useParams();

    const post = travelPlaces.find(place => console.log(place));
    // console.log(post)
    console.log(useParams());
    return (

        <div className="container d-flex">
            <div className="col-md-6">
                <h3>{placeKey} comming soon</h3>
            </div>


            <div className="calender col-md-6">
                <CalenderDate></CalenderDate>
            </div>
        </div>

    );
};

export default PostDetails;