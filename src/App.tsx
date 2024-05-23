import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import HomeScreen from './screens/Home';
import FunnyBallScreen from './screens/FunnyBall';
import ModalPlayground from './screens/ModalPlayground';

const Stack = createNativeStackNavigator();

function App() {
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen
						options={{ headerShown: false }}
						name="ModalPlayground"
						component={ModalPlayground}
					/>
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
