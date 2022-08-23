import React from 'react';
import { availableSurplisesList } from './constants/surprises';
import { ISurpliseList } from './types'


export const AvailableSurprises: React.FC = () => {
    return(
        <section>
            <h1
                style={{
                    textAlign: 'center',
                    padding: '10px 0 0 10px'
                }}
            >Gift on Demand</h1>
            {
                availableSurplisesList.map((item: ISurpliseList, key) => 
                    <div
                        key={key}
                        style={{
                            backgroundColor: '#e2dada',
                            padding: '10px',
                            margin: '5px',
                            borderRadius: "5px",
                        }}
                    >
                        <p>Names: {item.name}</p>
                        <p>Messages: {item.description}</p>
                        <p>Type: {item.giftType}</p>
                        <p>Price: {item.priceWorth}</p>
                        <p>Date created: {item.dateCreated}</p>
                        <p>Date Remain: {item.dateExecution}</p>
                    </div>
                )
            }
        </section>
    )
}
