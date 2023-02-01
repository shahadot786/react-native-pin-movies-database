import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import Home from './screens/Home';

const App = () => {
  return (
    <SafeAreaView className="flex-1">
      {/* <StatusBar backgroundColor="transparent" /> */}
      <ScrollView>
        <Home />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
