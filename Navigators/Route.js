import React, {useContext, useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import {AuthContext} from './AuthProvider';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './StackNavigation';

export default function Route() {
  const {user, setUser} = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = user => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  return (
    <NavigationContainer>
      {user ? <StackNavigation /> : null}
    </NavigationContainer>
  );
}
