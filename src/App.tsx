import React from 'react';
import HomeScreen from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FunnyBallScreen from './screens/FunnyBall';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

function App() {
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen
						options={{ headerShown: false }}
						name="FunnyBall"
						component={FunnyBallScreen}
					/>
					<Stack.Screen
						options={{ headerShown: false }}
						name="Home"
						component={HomeScreen}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</GestureHandlerRootView>
	);
}

export default App;
