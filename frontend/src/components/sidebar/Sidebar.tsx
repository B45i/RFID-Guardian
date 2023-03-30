import './sidebar.css';

const Sidebar = () => {
    return (
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
    );
};

export default Sidebar;
