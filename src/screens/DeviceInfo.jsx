import { View, Text, StyleSheet } from "react-native";
import * as Device from "expo-device";
import Header from "../components/Header";
import Footer from "../components/Footer";



export default function DeviceInfoScreen({ navigation }) {
  return (
        <View >
          <Header  title="Informações do Aparelho" />
    
          <View>
            <Text >
              O nome do seu Aparelho é: {Device.osName}
            </Text>
      
            <Text>
              A Marca do aparelho é: {Device.brand}
            </Text>
      
            <Text >
              O Modelo do aparelho é: {Device.osName}
            </Text>
      
            <Text>
              O nome completo do aparelho é: {Device.osName}
            </Text>
      
            <Text>
              O Design do aparelho é: {Device.osName}
            </Text>
      
            <Text>
              O Ano de lançamento é: {Device.deviceYearClass}
            </Text>
      
            <Text >
              A memória do aparelho é: {Device.totalMemory}
            </Text>
      
            <Text >
              A Versão do sistema é a: {Device.osVersion}
            </Text>
      
            <Text >
              A arquitetura do aparelho é: {Device.osName}
            </Text>
          </View>
    
          <View >
            <Text>Sair</Text>
          </View>
          <Footer />
        </View>
  );
}