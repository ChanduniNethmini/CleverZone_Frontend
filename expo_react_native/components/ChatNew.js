import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
  Image,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import "react-native-gesture-handler";
import AwesomeAlert from "react-native-awesome-alerts";
import { Card, Button, Title, Paragraph } from "react-native-paper";
import Slideshow from "./SlideShow";
import { screenNames } from "../constants/navConsts/screenNames";
import { scale } from "react-native-size-matters";
import BottomSheet from "@gorhom/bottom-sheet";
import Icon from "react-native-vector-icons/FontAwesome";
import { Ionicons } from "@expo/vector-icons";

export default class ChatNew extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      showAlert: false,
      title: "",
      index: 1,
      scan: -1,
    };
    this.bottomSheetRef = React.createRef();
    this.state = {
      anatomyBottomSheetVisible: false,
      microBioBottomSheetVisible: false,
      zoologyBottomSheetVisible: false,
    };
  }

  logout = async () => {
    AsyncStorage.clear();
    this.props.navigation.replace("Login");
  };
  handleSheetChanges = (index) => {
    // console.log("handleSheetChanges", index);

    if (index == -1) {
      console.log("handleSheetChanges", index);
      this.setState({
        scan: -1,
      });
    }
  };

  static navigationOptions = ({ navigation }) => ({
    title: "DashBoard",
    headerStyle: {
      backgroundColor: "#131d41",
      elevation: 0,
    },
    headerTintColor: "#ffffff",
    headerTitleStyle: {
      fontWeight: "bold",
      fontSize: 24,
    },
  });

  showAlert = () => {
    this.setState({
      showAlert: true,
    });
  };

  hideAlert = () => {
    this.setState({
      showAlert: false,
      message: "",
      title: "",
    });
  };

  // showBottomSheet = () => {
  //   this.setState({
  //     scan: 0,
  //   });
  // };
  showBottomSheet = (sheetType) => {
    this.setState({
      anatomyBottomSheetVisible: sheetType === "anatomy",
      microBioBottomSheetVisible: sheetType === "microBio",
      zoologyBottomSheetVisible: sheetType === "zoology",
    });
  };

  render() {
    const { showAlert } = this.state;
    const snapPoints = ["25%", "25%"];
    return (

      <ScrollView style={styles.container2}>
        <View
          style={{
            backgroundColor: "#1C4C4E",
            height: scale(240),
            paddingLeft: 20,
            paddingTop: 10,
          }}
        >

        <View
            style={{
              flexDirection: "row",
            //   justifyContent: "center",
              alignItems: "center",
            }}
          >
             <Ionicons name="ios-arrow-back" size={25} color="#fff" />
            <Text
              style={{
                fontSize: 25,
                color: "#fff",
                fontWeight: "500",
                textAlign: "center",
              }}
            >
              Chatbot
            </Text>

          </View>

          <View
            style={{
              flexDirection: "row",
              // justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 30,
                color: "#fff",
                marginTop: scale(10),
                fontWeight: "600",
                marginLeft: scale(10),
              }}
            >
              Welcome to{"\n"}Clever Zone!
            </Text>

          </View>
        </View>
        
        <View
          style={{
            marginHorizontal: scale(20),
            marginTop: scale(20),
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: scale(14),
              color: "#949BA5",
            }}
          >
            Clever Zone covers the 9th, 10 th, 11th lessons of your syllabus.
            Hope this will help you to get a better understanding of your
            syllabus.
          </Text>
        </View>

        <BottomSheet
          ref={this.bottomSheetRef}
          index={this.state.anatomyBottomSheetVisible ? 0 : -1}
          snapPoints={snapPoints}
          onChange={this.handleSheetChanges}
          enablePanDownToClose={true}
          handleComponent={() => <></>}
          style={{}}
          backgroundStyle={{
            borderTopLeftRadius: 26,
            borderTopRightRadius: 26,
            borderWidth: 1,
            borderColor: "black",
          }}
        >
          {/* Anatomy Bottom Sheet Content */}
          <View>
            <View
              style={{
                flex: 1,
                // alignItems: "center",
                backgroundColor: "white",
                height: 100,
                borderTopLeftRadius: 26,
                borderTopRightRadius: 26,
              }}
            >
              <Text
                style={{
                  marginHorizontal: 27,
                  marginBottom: scale(50),
                }}
              >
                Awesome 🎉
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginHorizontal: 27,
                }}
              >
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate("HumanBodyParts")
                  }
                >
                  <View
                    style={{
                      backgroundColor: "#1C4C4E",
                      flexDirection: "row",
                      width: scale(120),
                      height: scale(56),
                      borderRadius: 14,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon
                      name="camera"
                      size={20}
                      style={{ marginRight: 5 }}
                      color="#fff"
                    />
                    <Text style={{ color: "#fff" }}>Scan Now</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View
                    style={{
                      backgroundColor: "#28B67E",

                      width: scale(120),
                      height: scale(56),
                      borderRadius: 14,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon
                      name="book"
                      size={20}
                      style={{ marginRight: 5 }}
                      color="#fff"
                    />
                    <Text style={{ color: "#fff" }}>Lessons</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </BottomSheet>

        <BottomSheet
          ref={this.bottomSheetRef}
          index={this.state.microBioBottomSheetVisible ? 0 : -1}
          snapPoints={snapPoints}
          onChange={this.handleSheetChanges}
          enablePanDownToClose={true}
          handleComponent={() => <></>}
          style={{}}
          backgroundStyle={{
            borderTopLeftRadius: 26,
            borderTopRightRadius: 26,
            borderWidth: 1,
            borderColor: "black",
          }}
        >
          {/* Micro-Bio Bottom Sheet Content */}
          <View>
            <View
              style={{
                flex: 1,
                // alignItems: "center",
                backgroundColor: "white",
                height: 100,
                borderTopLeftRadius: 26,
                borderTopRightRadius: 26,
              }}
            >
              <Text
                style={{
                  marginHorizontal: 27,
                  marginBottom: scale(50),
                }}
              >
                Awesome 🎉
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginHorizontal: 27,
                }}
              >
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate("TextRecognition")
                  }
                >
                  <View
                    style={{
                      backgroundColor: "#1C4C4E",
                      flexDirection: "row",
                      width: scale(120),
                      height: scale(56),
                      borderRadius: 14,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon
                      name="camera"
                      size={20}
                      style={{ marginRight: 5 }}
                      color="#fff"
                    />
                    <Text style={{ color: "#fff" }}>Scan Now</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate("TextRecognitionLesson")
                  }
                >
                  <View
                    style={{
                      backgroundColor: "#28B67E",

                      width: scale(120),
                      height: scale(56),
                      borderRadius: 14,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon
                      name="book"
                      size={20}
                      style={{ marginRight: 5 }}
                      color="#fff"
                    />
                    <Text style={{ color: "#fff" }}>Lessons</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </BottomSheet>

        <BottomSheet
          ref={this.bottomSheetRef}
          index={this.state.zoologyBottomSheetVisible ? 0 : -1}
          snapPoints={snapPoints}
          onChange={this.handleSheetChanges}
          enablePanDownToClose={true}
          handleComponent={() => <></>}
          style={{}}
          backgroundStyle={{
            borderTopLeftRadius: 26,
            borderTopRightRadius: 26,
            borderWidth: 1,
            borderColor: "black",
          }}
        >
          {/* Zoology Bottom Sheet Content */}
          <View>
            <View
              style={{
                flex: 1,
                // alignItems: "center",
                backgroundColor: "white",
                height: 100,
                borderTopLeftRadius: 26,
                borderTopRightRadius: 26,
              }}
            >
              <Text
                style={{
                  marginHorizontal: 27,
                  marginBottom: scale(50),
                }}
              >
                Zoology
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginHorizontal: 27,
                }}
              >
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate("AnimalRecognition")
                  }
                >
                  <View
                    style={{
                      backgroundColor: "#1C4C4E",
                      flexDirection: "row",
                      width: scale(120),
                      height: scale(56),
                      borderRadius: 14,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon
                      name="camera"
                      size={20}
                      style={{ marginRight: 5 }}
                      color="#fff"
                    />
                    <Text style={{ color: "#fff" }}>Scan Now</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate("AnimalRecognitionLesson")
                  }
                >
                  <View
                    style={{
                      backgroundColor: "#28B67E",

                      width: scale(120),
                      height: scale(56),
                      borderRadius: 14,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon
                      name="book"
                      size={20}
                      style={{ marginRight: 5 }}
                      color="#fff"
                    />
                    <Text style={{ color: "#fff" }}>Lessons</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </BottomSheet>

        {/* <View style={styles.cardWrapper}>
          <Card style={styles.card}>
            <View style={styles.cardContentWrapper}>
              <Card.Content style={styles.cardContent}>
                <Title style={styles.title}>Welcome to Clever Zone</Title>
                <Text style={styles.description}>
                  We digitalized your syllabus
                </Text>
              </Card.Content>
              <Image
                source={require("./../assets/homecard.png")}
                style={styles.cardImage}
              />
            </View>
          </Card>
        </View> */}
        {/* <View style={styles.row}>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate(screenNames.HUMAN_BODY)
            }
            style={styles.cardWrapper}
          >
            <Card style={styles.card}>
              <Card.Content style={styles.cardContent2}>
                <Title style={styles.title2}>Anatomy</Title>
              </Card.Content>
              <Image
                source={require("./../assets/human.png")}
                style={styles.cardImage2}
              />
            </Card>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate(screenNames.TEXT_RECOGNITION)
            }
            style={styles.cardWrapper}
          >
            <Card style={styles.card}>
              <Card.Content style={styles.cardContent2}>
                <Title style={styles.title2}>Micro-Bio</Title>
              </Card.Content>
              <Image
                source={require("./../assets/micro.png")}
                style={styles.cardImage2}
              />
            </Card>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate(screenNames.ANIMAL)}
            style={styles.cardWrapper}
          >
            <Card style={styles.card}>
              <Card.Content style={styles.cardContent2}>
                <Title style={styles.title2}>Zoology</Title>
              </Card.Content>
              <Image
                source={require("./../assets/animal.png")}
                style={styles.cardImage2}
              />
            </Card>
          </TouchableOpacity>

          <AwesomeAlert
            show={showAlert}
            title={this.state.title}
            message={this.state.message}
            closeOnTouchOutside={true}
            closeOnHardwareBackPress={false}
            showCancelButton={true}
            cancelText="Close"
            cancelButtonColor="#AEDEF4"
            onCancelPressed={() => {
              this.hideAlert();
            }}
          />
        </View> */}

        {/* <View
          style={{
            flexDirection: "row",
            marginTop: 10,
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 12 }}>
            "Discover life's stories in every cell with our biology app."
          </Text>
        </View> */}
        {/* <View
          style={{
            flexDirection: "row",
            marginTop: 5,
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 10,
              color: "grey",
              marginLeft: 10,
              marginRight: 10,
              marginBottom: 10,
            }}
          >
            Clever Zone covers the 9th, 10 th, 11th lessons of your syllabus.
            Hope this will help you to get a better understanding of your
            syllabus.
          </Text>
        </View> */}

        {/* <View>
          <Slideshow />
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 5,
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 10,
              color: "grey",
              marginLeft: 10,
              marginRight: 10,
              marginBottom: 10,
            }}
          >
            Clever Zone covers the 9th, 10 th, 11th lessons of your syllabus.
            Hope this will help you to get a better understanding of your
            syllabus. Clever Zone covers the 9th, 10 th, 11th lessons of your
            syllabus. Hope this will help you to get a better understanding of
            your syllabus.
          </Text>
        </View>
        <View>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => this.props.navigation.navigate(screenNames.CHAT)}
            style={styles.touchableOpacityStyle}
          >
            <Image
              source={require("./../assets/bot.png")}
              style={styles.floatingButtonStyle}
            />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={[styles.buttonContainer, styles.registerButton]}
            onPress={this.logout}
          >
            <Text style={{ color: "#ffffff", fontWeight: "bold" }}>Logout</Text>
          </TouchableOpacity> */}
        {/* </View> */}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container2: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  cardWrapper: {
    marginTop: 10,
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 10,
  },
  cardContentWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardContent: {
    flex: 1,
  },
  title: {
    color: "darkblue",
    fontWeight: "bold",
  },
  description: {
    color: "grey",
  },
  cardImage: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },
  input: {
    borderBottomWidth: 1,
    width: 80 + "%",
    height: 45,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 4,
    borderBottomColor: "#c4c4c4",
    color: "#000000",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    width: 20 + "%",
    height: 40,
    borderRadius: 60,
    marginTop: 10,
  },
  loginButton: {
    backgroundColor: "#131d41",
  },
  touchableOpacityStyle: {
    position: "absolute",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    right: 30,
    bottom: 0, // mek
  },
  floatingButtonStyle: {
    resizeMode: "contain",
    width: 80,
    height: 80,
  },
  registerButton: {
    backgroundColor: "transparent",
    borderColor: "#131d41",
    borderWidth: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  cardWrapper: {
    flex: 1,
    margin: 10,
  },
  card: {
    elevation: 3,
  },
  cardContent: {
    padding: 10,
  },
  cardContent2: {
    padding: 10,
    paddingBottom: 0,
  },
  title2: {
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
  },
  cardImage2: {
    width: 100,
    height: 100,
    resizeMode: "cover",
  },
});
