import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  incident: {
    marginTop: 48,
    marginBottom: 16,
    padding: 24,
    backgroundColor: 'white',
    borderRadius: 8
  },
  incidentProperty: {
    marginTop: 24,
    color: '#41414d',
    fontSize: 14,
    fontWeight: 'bold'
  },
  incidentValue: {
    marginTop: 8,
    color: "#737380"
  },
  contactBox: {
    marginBottom: 16,
    padding: 24,
    backgroundColor: 'white',
    borderRadius: 8
  },
  contactBoxText: {
    color: '#13131a',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 30
  },
  contactBoxContactText: {
    marginTop: 16,
    color: '#737380',
    fontSize: 15
  },
  contactBoxBtnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  contactBoxBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '48%',
    height: 50,
    backgroundColor: '#e02141',
    borderRadius: 8,
  },
  contactBoxBtnText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});