import './cards.css';

const Cards = () => {
    return (
        <div className="page">
            <div className="sidebar">
                <h3 className="app-name">RFID Guardian</h3>

                <ul className="sidebar-items">
                    <li className="sidebar-item">
                        <i className="fa fa-chart-pie"></i>
                        Stats
                    </li>
                    <li className="sidebar-item sidebar-item-active">
                        <i className="fa fa-users"></i>
                        Card Holders
                    </li>
                    <li className="sidebar-item">
                        <i className="fa fa-id-card-alt"></i>
                        Cards
                    </li>
                </ul>
            </div>
            <div className="main">
                <div className="app-bar">
                    <div>Cards</div>
                </div>
            </div>
        </div>
    );
};

export default Cards;
