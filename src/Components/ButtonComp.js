import { ActivityIndicator, StyleSheet, Text, TouchableOpacity } from 'react-native';

const ButtonComp = ({
    text = 'DONE',
    onPress = () => { },
    disabled = false,
}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
             style={{
                ...styles.container,
                backgroundColor: !disabled? '#D7654D' :"grey"
             }}
            disabled={disabled}
        >

                <Text style={styles.textStyle}>{text}</Text>
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        height: 42,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },

    textStyle: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#fff'
    }
});

export default ButtonComp;