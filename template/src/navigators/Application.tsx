import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { Example, Startup } from '@/screens';

import type { ApplicationStackParamList } from '@/types/navigation';

const Stack = createStackNavigator<ApplicationStackParamList>();

function ApplicationNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator key="dark" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Startup" component={Startup} />
        <Stack.Screen name="Example" component={Example} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default ApplicationNavigator;
