import Sidebar from '../components/sidebar/Sidebar';
import './cards.css';

const Cards = () => {
    return (
        <div className="page">
            <Sidebar />
            <div className="main">
                <div className="app-bar">
                    <div>Cards</div>
                </div>
            </div>
        </div>
    );
};

export default Cards;
