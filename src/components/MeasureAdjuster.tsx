import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

interface MeasureAdjusterProps {
    type: 'height' | 'weight';
    value : number;
    onIncremet: () => void;
    onDecrement: () => void
}

export default function MeasureAjduster({type, value, onIncremet, onDecrement} : MeasureAdjusterProps){

    const iconName = type === 'height' ? 'ruler-vertical' : 'weight';
    const label = type === 'height' ? 'Altura (cm)' : 'Peso (Kg)';

   return(
    <View style={styles.container}>
        <View style={styles.labelRow}>
                    <FontAwesome5 name={iconName} size={16} color="#333" style={styles.icon} />
                    <Text style={styles.label}>{label}</Text>
        </View>
        <View style={styles.controls}>
            <TouchableOpacity style={styles.button} onPress={onDecrement}>
                <Text style={styles.buttonSymbol}>-</Text>
            </TouchableOpacity>

            <Text style={styles.value}>{value}</Text>

            <TouchableOpacity style={styles.button} onPress={onIncremet}>
                <Text style={styles.buttonSymbol}>+</Text>
            </TouchableOpacity>
        </View>
    </View>
   )
} 

const styles = StyleSheet.create({
    value: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        minWidth: 50,
        height: 26,
        alignItems: 'center',
        marginHorizontal: 8
    },
    buttonSymbol: {
        fontSize: 22,
        color: '#FFF',
        fontWeight: 'bold',
        lineHeight: 24,
        textAlign: 'center'
    },
    button: {
        width: 28,
        height: 28,
        borderRadius: 14,
        backgroundColor: '#F5A623',
        alignItems: 'center',
        justifyContent: 'center',
    },
    controls: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    label: {
        fontSize: 15,
        color: '#333',
        fontWeight: '500'
    },
    icon: {
        marginRight: 8,
    },
    labelRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#FFF',
        borderRadius: 12,
        paddingVertical: 14,
        paddingHorizontal: 16,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
        shadowOffset: {width: 0, height: 1}
    },
})
