import React, { useState, useRef } from "react";
import {
    View,
} from 'react-native';

import Carousel, { Pagination } from 'react-native-snap-carousel';
import carouselItems from '../../data/notices';
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './CarouselCardItem';

const NoticeBox = () => {
    const isCarousel = useRef(null);
    const [activeSlide, setActiveSlide] = useState(0);

    return (
        // Carousel
        <View>
            <Carousel
                layout="default"
                layoutCardOffset={9}
                ref={isCarousel}
                data={carouselItems}
                renderItem={CarouselCardItem}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                inactiveSlideShift={0}
                inactiveSlideScale={1}
                useScrollView={true}
                onSnapToItem={(index) => setActiveSlide(index)}
                style={{
                    position: 'relative',
                }}
            />
    
            <Pagination 
                dotsLength={carouselItems.length}
                activeDotIndex={activeSlide}
                containerStyle={{ 
                    backgroundColor: 'rgba(0, 0, 0, 0.0)',
                    paddingVertical: 0,
                    position: 'absolute',
                    width: '100%',
                    bottom: 32,
                }}
                dotStyle={{
                    width: 8,
                    height: 8,
                    borderRadius: 5,
                    marginHorizontal: 4,
                    backgroundColor: 'rgba(255, 255, 255, 0.92)',
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={1}
            />
        </View>
    );
};

export default NoticeBox;