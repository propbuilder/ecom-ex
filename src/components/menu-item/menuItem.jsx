import './menuItem.styles.scss';
import { withRouter } from 'react-router-dom';

const MenuItem = ({
    title, 
    imageUrl, 
    size, 
    history,
    linkUrl,
    match
}) => {
    const navigateToPage = () => {
        console.log('history', match)
        history.push(`${match.url}${linkUrl}`);
    }
    return <div className={`${size} menu-item`}
        onClick={navigateToPage}
    >
        <div 
            className= "background-image" 
            style={{backgroundImage: `url(${imageUrl})`}}
        />
        <div className="content">
            <h1 className="title">
                {title.toUpperCase()}
            </h1>
            <span>Shop Now</span>
        </div>
    </div>
};

export default withRouter(MenuItem);