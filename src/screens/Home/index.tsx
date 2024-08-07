import { StatusBar } from 'expo-status-bar';
import {  Text, View,TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components/Participant';

export default function Home() {
    function handleParticipantAdd() {
        console.log('Adicionando participante');
    }
  return (
    <View style={styles.container}>
      <StatusBar style='light' />
      <Text style={styles.text}>Nome do Evento</Text>
      <Text style={styles.subText}>Data do Evento</Text>
      <View style={styles.form}>
      <TextInput style={styles.input} placeholder="Nome do participante" placeholderTextColor="#6b6b6b"/>
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
            <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <Participant name="Lucas"/>
      <Participant name ="Noleto"/>
      <Participant name="ferreira"/>
      <Participant name="milhonario"/>
    </View>
  );
}