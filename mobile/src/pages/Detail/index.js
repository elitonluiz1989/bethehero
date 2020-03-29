import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import * as MailComposer from 'expo-mail-composer';
import { Linking } from 'react-native';

import logoImg from '../../assets/img/logo.png';

import styles from './styles';

export default function Incidents() {
  const navigation = useNavigation();
  const route = useRoute();
  const incident = route.params.incident;

  const currencyFormatted = amout => Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(amout);

  const navigateToBack = () => navigation.goBack();

  const message = `Hi ${incident.name}, I contact you 'cause i have the will to help the ${incident.title} with the amount at ${currencyFormatted(incident.value)}`;
  const sendMail = () => {
    MailComposer.composeAsync({
      subject: `Incident hero: ${incident.title}`,
      recipients: [incident.email],
      body: message
    });
  };

  const sendWhatsapp = () => Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />

        <TouchableOpacity style={styles.detailBtn}
          onPress={navigateToBack}>
          <Feather name="arrow-left" size={16} color="#e02041" />
        </TouchableOpacity>
      </View>

      <View style={styles.incident}>
        <Text style={styles.incidentProperty}>NGO</Text>
        <Text style={styles.incidentValue}>{incident.name}</Text>

        <Text style={styles.incidentProperty}>Title</Text>
        <Text style={styles.incidentValue}>{incident.title}</Text>

        <Text style={styles.incidentProperty}>Value</Text>
        <Text style={styles.incidentValue}>{currencyFormatted(incident.value)}</Text>

      </View>

      <View style={styles.contactBox}>
        <Text style={styles.contactBoxText}>Save the day!</Text>

        <Text style={styles.contactBoxText}>Be the hero from this incident.</Text>

        <Text style={styles.contactBoxContactText}>Contact:</Text>

        <View style={styles.contactBoxBtnContainer}>
          <TouchableOpacity style={styles.contactBoxBtn}
            onPress={sendWhatsapp}>
            <Text style={styles.contactBoxBtnText}>WhatsApp</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.contactBoxBtn}
            onPress={sendMail}>
            <Text style={styles.contactBoxBtnText}>E-mail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}