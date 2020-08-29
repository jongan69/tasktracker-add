import React from 'react';

import {SafeAreaView, View, StatusBar} from 'react-native';

import {Button} from 'react-native-elements';

import {useAuth, AuthProvider} from './AuthProvider';
import {LogInView} from './LogInView';
import {TasksProvider} from './TasksProvider';
import {TasksView} from './TasksView';

import HomeScreen from './screens/HomeScreen';

const App = () => {
  return (
    <AuthProvider>
      <AppBody />
    </AuthProvider>
  );
};

// The AppBody is the main view within the App. If a user is not logged in, it
// renders the login view. Otherwise, it renders the tasks view. It must be
// within an AuthProvider.
function AppBody() {
  const {user, logOut} = useAuth();

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View>
          {user == null ? (
            <LogInView />
          ) : (
            <TasksProvider projectId="Welcome">
              <TasksView />
            </TasksProvider>
          )}
        </View>
      </SafeAreaView>
    </>
  );
}

export default App;
