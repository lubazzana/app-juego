import { Dimensions, StyleSheet } from "react-native";

import theme from "../../constants/theme";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
    containerGeneric: {
        flex: 1,
    },
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    title: {
        color: theme.colors.primary,
        fontSize: theme.fontSize.large,
        marginVertical: 10,
    },
    subtitle: {
        fontSize: theme.fontSize.large,
    },
    inputContainer: {
        width: "80%",
        maxWidth: "90%",
        minWidth: width * 0.7,
        alignItems: 'center',
        paddingVertical: 20,
        marginTop: 10,
        marginBottom: 10,
    },
    input: {
        width: 40,
        textAlign: 'center',
        fontSize: theme.fontSize.xLarge,
        height: 60,
    },
    buttonContainer: {
        flexDirection: 'row',
        width: width / 1.8,
        justifyContent: 'space-between',
        paddingVertical: width > 600 ? 20 : 10,
    },
    cardTitle: {
        fontSize: theme.fontSize.large,
        marginBottom: 10,
        color: theme.colors.primary,
    },
})