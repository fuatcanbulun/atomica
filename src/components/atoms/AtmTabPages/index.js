import React, {useState, useRef} from 'react';
import Style from './style';
import {View, Animated, PanResponder} from 'react-native';
import {Dimensions} from 'react-native';
import {useEffect} from 'react/cjs/react.development';
const pageWidth = Dimensions.get('window').width;

function AtmTabPages({children, height, count, activeTab, onChange}) {
  const styles = [Style.default, Style[height]];
  const holderWidth = count * 100 + '%';

  const swipeAnim = useRef(new Animated.Value(0)).current;
  const swipeContainer = useRef();
  const [swiperWidth, setSwiperWidth] = useState(0);
  const pan = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderRelease: (evt, gestureState) => {
      if (gestureState.dx > 10 && activePage > 1) {
        setActivePosition(activePosition + swiperWidth);
        setActivePage(activePage - 1);
        Animated.timing(swipeAnim, {
          useNativeDriver: true,
          toValue: activePosition + swiperWidth,
          duration: 500,
        }).start();
      }
      if (gestureState.dx < 10 && activePage < count) {
        setActivePosition(activePosition - swiperWidth);
        setActivePage(activePage + 1);
        Animated.timing(swipeAnim, {
          useNativeDriver: true,
          toValue: activePosition - swiperWidth,
          duration: 500,
        }).start();
      }
    },
  });
  const [activePosition, setActivePosition] = useState(0);
  const [activePage, setActivePage] = useState(1);
  const [panResponder, setPanResponder] = useState(pan);

  useEffect(() => {
    setPanResponder(pan);
    onChange(activePage);
    // eslint-disable-next-line
  }, [activePosition, swiperWidth]);

  useEffect(() => {
    let pageBetween;
    if (activeTab > activePage) {
      pageBetween = activeTab - activePage;
      setActivePosition(activePosition - pageBetween * swiperWidth);
      setActivePage(activePage + pageBetween);
      Animated.timing(swipeAnim, {
        useNativeDriver: true,
        toValue: activePosition - pageBetween * swiperWidth,
        duration: 500,
      }).start();
    } else if (activePage > activeTab) {
      pageBetween = activePage - activeTab;
      setActivePosition(activePosition + pageBetween * swiperWidth);
      setActivePage(activePage - pageBetween);
      Animated.timing(swipeAnim, {
        useNativeDriver: true,
        toValue: activePosition + pageBetween * swiperWidth,
        duration: 500,
      }).start();
    }
    // eslint-disable-next-line
  }, [activeTab]);

  return (
    <>
      <View
        style={styles}
        {...panResponder.panHandlers}
        ref={swipeContainer}
        onLayout={event => {
          setSwiperWidth(event.nativeEvent.layout.width);
        }}>
        <Animated.View
          style={[
            Style.holder,
            {width: holderWidth, transform: [{translateX: swipeAnim}]},
          ]}>
          {children}
        </Animated.View>
      </View>
    </>
  );
}

export default AtmTabPages;
