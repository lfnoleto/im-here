
import {useState} from "react";
import { StatusBar } from 'expo-status-bar';
import {  Text, View,TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components/Participant';

export default function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState('');
  

    function handleParticipantAdd() {
        if(participants.includes(participantName)) {
            Alert.alert('Participante existe','Participante já adicionado na lista');
            return;
        }
        setParticipants(previState => [...previState, participantName]);
        setParticipantName('');
    }

    function handleParticipantRemove(name: string) {
    
        Alert.alert('Remover participante',`Deseja remover o participante ${name}?`,
        [
        {
            text: 'Não',
            style: 'cancel'
        },
        {
            text: 'Sim',
            onPress: () => {
                Alert.alert('Participante removido','Participante removido com sucesso');
                setParticipants(previState => previState.filter(participant => participant !== name ));
            }
        }
        ]);
        ;
        
    }
  return (
    <View style={styles.container}>
      <StatusBar style='light' />
      <Text style={styles.text}>Nome do Evento</Text>
      <Text style={styles.subText}>Data do Evento</Text>
      <View style={styles.form}>
      <TextInput style={styles.input} placeholder="Nome do participante" placeholderTextColor="#6b6b6b" onChangeText={text => setParticipantName(text)} value={participantName}/>
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
            <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList 
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({item}) => (
          <Participant name={item} onRemove={() => handleParticipantRemove(item)}/>
        )}
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.emptyText}>Nenhum participante adicionado</Text>
        )}
      />
      
     
    
    </View>
  );
}