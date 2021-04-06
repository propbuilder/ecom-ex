import React, {useEffect, useState} from 'react';
import MenuItem from '../menu-item/menuItem';
import {sectionsData} from '../../utils/directorydata';
import './directory.styles.scss';

const Directory = () => {
    const [sections, setSections] = useState([]);
    useEffect(() => {
        setSections(sectionsData);
    }, []);
    return <div className="directory-menu">
        {sections.map(({title, imageUrl, id}) => 
        <MenuItem 
            key={id} 
            title={title} 
            imageUrl={imageUrl}
        />)}
    </div>
};

export default Directory;