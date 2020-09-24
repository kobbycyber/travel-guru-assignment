import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import CalenderDate from '../CalenderDate/CalenderDate';
import { travelPlaces } from '../Home/Home';
import Post from '../Post/Post';
import './PostDetails.css'


const PostDetails = () => {
    const { placeKey } = useParams();
    // console.log(placeId)

    const post = travelPlaces.find(place => place.key === placeKey);
        // console.log(post)
   
    // const [place, setPlace] = useState([travelPlaces]);
    // console.log(place)

    // useEffect(() => {
       
    //     const setPlace = travelPlaces.find(place => place.key === placeKey);
    //     console.log(setPlace)
    //     // setPlace(post)
    // }, [placeId])



    // const [selectplace, setSelectPlace] = useState({});      

    // const allPlaces = travelPlaces;


    //   useEffect(() => {
    //         const singlePlace = travelPlaces.find(place => allPlaces.id === postId)
    //         console.log(singlePlace)
    //         // setSelectPlace(singlePlace)
    //     }, [postId])

    return (

        <div className="container">
            <h3>{placeKey} comming soon</h3>
            <Post post={post}></Post>
            {/* <div className="row">
                <div className="place-item col-md-6">
                    <Card className="detail-place">
                        <Card.Body>
                            <Card.Title>{}</Card.Title>
                            <Card.Text>
                                {}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div >
                <div className="calender col-md-6">
                    <CalenderDate></CalenderDate>
                </div>
            </div> */}
        </div>

    );
};

export default PostDetails;