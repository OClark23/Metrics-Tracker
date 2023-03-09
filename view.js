import React, { useEffect } from 'react';
import { Text, View, Button } from 'react-native';
import * as Analytics from 'expo-firebase-analytics';

export default function App() {
  useEffect(() => {
    // Track a page view when the component mounts
    Analytics.logEvent('page_view', { screen_name: 'Home' });
  }, []);

  const handleButtonClick = () => {
    // Track a custom event when the button is clicked
    Analytics.logEvent('button_click', { button_name: 'Track' });
  };

  return (
    <View>
      <Text>Track Viewing Metrics</Text>
      <Button title="Track" onPress={handleButtonClick} />
    </View>
  );
}
