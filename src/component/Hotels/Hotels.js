import React from 'react';
import HotelRoom from '../HotelRoom/HotelRoom';
import MapGoogle from '../MapGoogle/MapGoogle';

const hotelPlaces = [
    {
        title: 'Light bright airy stylish apt & safe peaceful',
        description: 'Standard Single Rooms are designed in open -concept living area and have many facilities.',
        imgUrl: 'https://i.ibb.co/L0wxQPT/Rectangle-26.png',
        review: 4.9,
        capacity: '4 guests 2 bedrooms 2 beds 2 baths',
        bedType: 'Single',
        price: 34
    },
    {
        title: 'Apartment in Lost Panorama',
        description: 'Superior Double Rooms are perfectly equipped for traveling couples or friends.',
        imgUrl: 'https://i.ibb.co/7j3SzdN/Rectangle-27.png',
        review: 4.9,
        capacity: '4 guests 2 bedrooms 2 beds 2 baths',
        bedType: 'Double',
        price: 52
    },
    {
        title: 'AR Lounge & pool(r& + b&b)',
        description: ' Have lots of in-room facilities and are designed in open-concept living area.',
        imgUrl: 'https://i.ibb.co/pnkKdgp/Rectangle-28.png',
        review: 4.9,
        capacity: '4 guests 2 bedrooms 2 beds 2 baths',
        bedType: 'Family',
        price: 44
    }
];

const Hotels = () => {
    return (
        <div className="d-flex">
            <div>
                {
                    hotelPlaces.map(room => <HotelRoom room={room}></HotelRoom>)
                }
            </div>
            
            <div className="ml-auto">
                {/* <MapGoogle></MapGoogle> */}
            </div>
        </div>
    );
};

export default Hotels;