import React, { useContext ,useState} from "react";
import {
  Button,
  Platform,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  Switch,
} from "react-native";
import { Ionicons } from "react-native-vector-icons";
import { Avatar } from "react-native-elements";
import AwesomeAlert from "react-native-awesome-alerts";
import { Drawer } from "react-native-paper";
import { AppContext } from "../../AppContext";

function DrawerContent({ navigation }) {
  const [showAlert, setShowAlert] = useState(false);
  const { theme, setTheme, acount, setAcount } = useContext(AppContext);
  const handleTheme = () => {
    setTheme({ ...theme, is: !theme.is });
  };
  const styleTheme = () => {
    return theme.is ? theme.light : theme.dark;
  };

  const styleBox = () => {
    return theme.is ? theme.light.backgroundBox : theme.dark.backgroundBox;
  };
  //const navigation = useNavigation();
  const styleColor = () => {
    return theme.is ? theme.light.color : theme.dark.color;
  };
  return (
    <View style={[styles.container, { backgroundColor: styleBox() }]}>
      <StatusBar hidden={false} backgroundColor="#ddd" />
      <View style={[styles.content, { backgroundColor: styleBox() }]}>
        <View
          style={[
            styles.person,
            { borderColor: theme.is ? "#3FF009" : "#E00707" },
          ]}
        >
          <Avatar
            rounded
            source={{
              uri: acount.avatar,
            }}
            size="large"
            title="LW"
            onPress={() => alert("Works!")}
            activeOpacity={0.7}
          />
          <View style={styles.personName}>
            <Text>{acount.fullname}</Text>
            <Text>@{acount.username}</Text>
          </View>
        </View>
        <View style={[styles.person2, { backgroundColor: styleBox() }]}>
          <Drawer.Section
            style={[styles.drawerSection, { backgroundColor: styleBox() }]}
          >
            <Drawer.Item
              style={styles.drawerItem}
              icon={({ color, size }) => (
                <Ionicons name="home" size={size} color="green" />
              )}
              label="Home"
              onPress={() => navigation.navigate("TabHome")}
            />
          </Drawer.Section>
          <Drawer.Section
            style={[styles.drawerSection, { backgroundColor: styleBox() }]}
          >
            <Drawer.Item
              style={styles.drawerItem}
              icon={({ color, size }) => (
                <Ionicons name="people" size={size} color="#0041F5" />
              )}
              label="Person"
              onPress={() => navigation.navigate("Person")}
            />
          </Drawer.Section>

          <Drawer.Section
            style={[styles.drawerSection, { backgroundColor: styleBox() }]}
          >
            <Drawer.Item
              style={styles.drawerItem}
              icon={({ color, size }) => (
                <Ionicons name="notifications" size={size} color="#ED00F5" />
              )}
              label="Notification"
              onPress={() => navigation.navigate("Notification")}
            />
          </Drawer.Section>
          <Drawer.Section
            style={[styles.drawerSection, { backgroundColor: styleBox() }]}
          >
            <Drawer.Item
              style={styles.drawerItem}
              icon={({ color, size }) => (
                <Ionicons name="log-out" size={size} color="#14F500" />
              )}
              label="Logout"
              onPress={() => setShowAlert(true)} //navigation.navigate("Logout")
            />
          </Drawer.Section>
          <AwesomeAlert
              show={showAlert}
              showProgress={false}
              title="Bạn có chắc chắn muốn đăng xuất ?"
              message="Are you sure you want to log out !"
              closeOnTouchOutside={false}//outline
              closeOnHardwareBackPress={false}//back
              showCancelButton={true}
              showConfirmButton={true}
              cancelText="Quay lại"
              confirmText="Đồng ý"
              confirmButtonColor="red"
              cancelButtonColor="#DD6B55"
              onCancelPressed={() => {
                setShowAlert(false);
              }}
              onConfirmPressed={() => {
                navigation.replace("Login")
              }}
            />
          <Drawer.Section
            style={[styles.drawerSection, { backgroundColor: styleBox() }]}
          >
            <Drawer.Item
              style={styles.drawerItem}
              icon={({ color, size }) => (
                <Ionicons name="help-circle" size={size} color="#8D113B" />
              )}
              label="Help"
              onPress={() => navigation.navigate("Help")}
            />
          </Drawer.Section>
          <Drawer.Section style={styles.viewTheme} title="Theme">
            <View style={styles.theme}>
              <Text style={{ color: styleColor() }}>Light-Dark</Text>
              <Switch onValueChange={handleTheme} value={theme.is} />
            </View>
          </Drawer.Section>
        </View>
      </View>
    </View>
  );
}
export default DrawerContent;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    marginTop: 25,
    backgroundColor: "#fff",
    minHeight: 250,
  },
  person: {
    flexDirection: "row",
    backgroundColor: "#BCF5E7",
    borderBottomWidth: 0.2,
    borderBottomColor: "gray",
    paddingBottom: 5,
    marginHorizontal: 10,
    borderRadius: 8,
    borderWidth: 1,
  },
  personName: {
    flexDirection: "column",
    maxWidth: 190,
    padding: 10,
    justifyContent: "center",
  },
  drawerSection: {
    backgroundColor: "#DEE7D3",
  },
  drawerItem: {
    backgroundColor: "#F0E4AD",
  },

  theme: {
    flexDirection: "row",
  },
  viewTheme: {
    marginHorizontal: 10,
    alignItems: "center",
    backgroundColor: "#406EC4",
    borderRadius: 3,
  },
});
