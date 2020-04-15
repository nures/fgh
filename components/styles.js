import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    marginBottom: 10,
  },
  subheader: {
    margin: 10,
    fontSize: 20,
  },
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  select: { height: 50, width: 150, borderWidth: 2, borderColor: "#000" },
  item: { color: "blue" },
  output: {
    height: 80,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  button: {
    marginTop: 50,
    marginBottom: 20,
    backgroundColor: "#68a0cf",
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "black",
  },
  selectBlock: {
    marginTop: 40,
    height: 200,
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
