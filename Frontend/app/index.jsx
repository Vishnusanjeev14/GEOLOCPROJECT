import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View,Image, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../components/CustomButton';
import { Redirect,router } from 'expo-router';

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{height: '100%'}}>
        <View className="w-full justify-center items-center h-full px-4">
          <Text className="text-white font-psemibold text-xl">
            Welcome To GeoLoc!
          </Text>
          <CustomButton
            title="Head Officer"
            handlePress={() => {
              router.push('/sign-in-officer')
            }}
          />
          <CustomButton
            title="Worker"
            handlePress={() => {
              router.push('/sign-in-worker')
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
