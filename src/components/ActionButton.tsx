import { StyleSheet, Text, TouchableOpacity } from "react-native"

interface ActionButonProps{
    title: string,
    onPress: ()=> void;
}

export default function ActionButton({title, onPress} : ActionButonProps){


    return(
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>
                Botão
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#F5A623',
        borderRadius: 30,
        paddingVertical: 16,
        paddingHorizontal: 40,
        alignItems: 'center',
        width: '100%',
        shadowColor: '#F5A623',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 1,
    },

    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
    }
})