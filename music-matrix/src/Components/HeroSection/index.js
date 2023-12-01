import './heroSection.css';
const HeroSection = () => {
    return (
        <div className="hs-container">
            <div className="hs-content">
                <div>
                    <h1>100 Thousand Songs, ad-free</h1>
                    <h1>Over thousands podcast episodes</h1>
                </div>
                <div className="hs-img-frame">
                    <img className="hs-img" alt="HeroSectionImage" src="heroHeadphone.png"/>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;