import React from 'react';
import Image from 'next/Image';
import { availableGiftsList } from './constants/images';
import { Igift } from './types';

export const AvailableGifts: React.FC = () => {    

    return (
        <section>
            <h1
                style={{
                    textAlign: 'center',
                    padding: '10px 0 0 10px'
                }}
            >Best Gifts</h1>
            <div 
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'auto auto auto'
                }
            }>
                {
                    availableGiftsList.map((item: Igift, key) => (
                        <div 
                            key={key}
                            style={{
                                display: 'grid',
                                textAlign: "center",
                                backgroundColor: "red",
                            }}
                        >
                            <div style={{
                                width: "300px",
                                height: "300px",
                                backgroundColor: "yellow",
                            }}>
                                <Image 
                                    src={item.image}
                                    alt={item.name}
                                />
                            </div>
                            <span
                                style={{
                                    display: "block",
                                    fontSize: "1.3rem" 
                                }}
                            >{item.name}</span>
                        <hr />
                        </div>
                    ))
                }
            </div>

        </section>
    )
}
