import {SafeAreaView} from 'react-native';
import Home from './screens/Home';

const App = () => {
  return (
    <SafeAreaView className="flex-1">
      {/* <StatusBar backgroundColor="transparent" /> */}
      <Home />
    </SafeAreaView>
  );
};

export default App;
