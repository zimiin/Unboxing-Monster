import React from 'react';

import TwoColumnBoxList from './twoColumnBoxList';

import boxItems from '../../assets/data/boxItems';

const BoxProductList = () => {
    return (
        <TwoColumnBoxList items={boxItems} />
    );
}

export default BoxProductList;