import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.result}>

      </View>
      <View style={styles.botaonumeros}>
        <TouchableOpacity>
          <Text>
            1
          </Text>
        </TouchableOpacity>

      </View>
    


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
