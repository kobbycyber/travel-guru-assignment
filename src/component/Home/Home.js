import React from 'react';
import './Home.css';
import Post from '../Post/Post';
import background from '../../images/background.png'
import { Button } from '@material-ui/core';


export const travelPlaces = [
    {
        "destination": "COXE'S bazar",
        "key": "1",
        "img": "https://i.ibb.co/XCJvQ4D/Sajek.png",
        "description": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero written in 45 BC. "
    },
    {
        "destination": "SREEMANGAL",
        "key": "2",
        "img": "https://i.ibb.co/t49TDSW/Sreemongol.png",
        "description": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero written in 45 BC. "
    },
    {
        "destination": "SUNDORBANS",
        "key": "3",
        "img": "https://i.ibb.co/n8T74t4/sundorbon.png",
        "description": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero written in 45 BC. "
    }
];



const Home = () => {

    const style = {
        display: 'flex',
        margin: '10px',
        justifyContent: 'space-around',
        position: 'absolute',
        top: "20%",
        left: 0,
        right: 0,

    }

    return (
        <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${background})` }} className="background">
            <div className="row d-flex">

                <div style={style} className="col-md-6 ml-auto">
                    {
                        travelPlaces.map(place => <Post key={place.key} place={place}></Post>)
                    }
                </div>

                <div className="col-md-6">
                    <div className="fixed-place">
                        <h2>COXE'S BAZAR</h2>
                        <p>"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero written in 45 BC. </p>
                        <button className="bg-warning">
                            Booking
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;