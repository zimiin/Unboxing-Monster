import React from 'react';

import TwoColumnBoxList from '../../components/twoColumnBoxList';

import boxItems from '../../data/boxItems';

const BoxProductList = () => {
    return (
        <TwoColumnBoxList items={boxItems} />
    );
}

export default BoxProductList;