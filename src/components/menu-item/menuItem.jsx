import './menuItem.styles.scss';

const MenuItem = ({title, imageUrl}) => {
    return <div className="menu-item"
        style={{backgroundImage: `url(${imageUrl})`}}
    >
        <div className="content">
            <h1 className="title">
                {title}
            </h1>
            <span>Shop Now</span>
        </div>
    </div>
};

export default MenuItem;