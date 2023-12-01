import './section.css';
import Card from "../Card";
import Carousel from '../Carousel';
import { useState } from 'react';

const Section = ({navId, title, data}) =>{

    const [isCollapsed, setIsCollapsed] = useState(false);
    return (
        <div className='section'>
            <div className='section-header'>
                <h1 className='title'>{title}</h1>
                <h1 className='section-toggle-btn'
                    onClick={() => {
                        setIsCollapsed(!isCollapsed)
                    }}
                >{isCollapsed? 'Collapse' : 'Show all'}</h1>
            </div>
            {!isCollapsed ? <Carousel navId={navId} data ={data}/>:
                <div className='card-container'>
                {data.map(cardData => <Card
                    key={cardData.id}
                    imgSrc={cardData.image}
                    label={cardData.title}
                    followersCount={cardData.follows}
                />)}
            </div>}
        </div>
    );

}

export default Section;