import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ContentRoutes } from './routes';
import ListScreen from '../screens/ListScreen';
import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const getTabBarIcon = ({ focused, color, size, name }) => {
  const iconName = focused ? name : `${name}-outline`;
  return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
};

const ContentTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={ContentRoutes.HOME}
        component={HomeScreen}
        options={{
          tabBarIcon: (props) => getTabBarIcon({ ...props, name: 'home' }),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name={ContentRoutes.LIST}
        component={ListScreen}
        options={{
          tabBarIcon: (props) => getTabBarIcon({ ...props, name: 'post' }),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name={ContentRoutes.MAP}
        component={MapScreen}
        options={{
          tabBarIcon: (props) => getTabBarIcon({ ...props, name: 'map' }),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name={ContentRoutes.PROFILE}
        component={ProfileScreen}
        options={{
          tabBarIcon: (props) => getTabBarIcon({ ...props, name: 'account' }),
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

export default ContentTab;
