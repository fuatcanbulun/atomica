import React, {useRef, useEffect} from 'react';
import {Animated, TouchableHighlight} from 'react-native';
import Style from './style';

const AtmSwitch = ({status, onChange}) => {
  const styles = [Style.basic, Style[status]];

  const switchAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    if (status) {
      Animated.timing(switchAnim, {
        useNativeDriver: false,
        toValue: 30,
        duration: 200,
      }).start();
    } else {
      Animated.timing(switchAnim, {
        useNativeDriver: false,
        toValue: 0,
        duration: 200,
      }).start();
    }
    //eslint-disable-next-line
  }, [status]);

  return (
    <TouchableHighlight style={styles} onPress={onChange}>
      <Animated.View style={[Style.handle, {left: switchAnim}]} />
    </TouchableHighlight>
  );
};

export default AtmSwitch;
