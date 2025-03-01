import React from 'react';
import { CardProps } from './cart.props';
import './card.css';
import Image from 'next/image';


const Card = ({ animal }: CardProps) => {
    const url = animal.photos.length > 0 ? animal.photos[0].medium : '';
    return (
        <div className=" cardHover custom-border p-0 m-0 h-[350px] min-h-[300px] relative z-0">
            <div style={{ backgroundImage: `url(${url})` }} className='z-0 h-[350px] bg-cover bg-center'></div>

            <div
                className='info bottom-0 absolute w-[100%] p-4 pt-12 text-white '>
                <h2 >{animal.name}</h2>
                <p>{animal.description}</p>
            </div>
        </div >
    );
};

export default Card;