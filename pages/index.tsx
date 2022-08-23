import React from 'react';
import { AvailableGifts } from '../components/Gifts/AvailableGift';
import { AvailableSurprises } from '../components/Surprises/AvailableSurprises';

function App() {
    return (
        <section
            style={{
                display: "grid",
                gridTemplateColumns: "auto auto",
            }}
        >
            <AvailableGifts />
            <AvailableSurprises />
        </section>
    )
}

export default App;
