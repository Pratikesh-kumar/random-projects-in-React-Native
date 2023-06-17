import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const {width, height} = Dimensions.get('window');

const Occupation = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon style={styles.icon} name="arrowleft" />
        </TouchableOpacity>

        <Text style={styles.occupation}>Occupation</Text>

        <Text style={styles.comp}>Compl...</Text>
      </View>
      <View style={styles.line}></View>
      <View style={styles.card}>
        <Text>Please select your industry</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Profile');
          }}>
          <Icon name="right" size={20} />
        </TouchableOpacity>
      </View>
      <View style={styles.secondline}></View>
      <View style={styles.item}>
        <View>
          <Text>Company</Text>
        </View>
        <View>
          <Text>Please enter company </Text>
          <Text>name</Text>
        </View>

        <Icon name="right" size={20} />
      </View>
      <View style={styles.secondline}></View>
      <View style={styles.card}>
        <Text>Occupation</Text>
        <Text>Please enter your job </Text>
        <Icon name="right" size={20} />
      </View>
      <View style={styles.secondline}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    width: width,
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  occupation: {
    fontFamily: 'Roboto',
    fontSize: 18,
    fontWeight: 500,
    color: '#000000',
    left: -45,
  },
  comp: {
    color: '#1A94EC',
    fontSize: 18,
  },
  line: {
    width: 360,
    height: 8,
    backgroundColor: 'rgba(217, 217, 217, 0.4)',
  },
  icon: {
    color: 'black',
    fontSize: 24,
    justifyContent: 'space-evenly',
    height: 30,
  },
  card: {
    flexDirection: 'row',
    padding: 30,
    justifyContent: 'space-between',
  },
  secondline: {
    width: 360,
    height: 4,
    backgroundColor: 'rgba(217, 217, 217, 0.4)',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 30,
  },
});

export default Occupation;
