import { FlatList, Text, View } from 'react-native';

const data = [
    {id:'1', title: 'Title 1'},
    {id:'2', title: 'Title 2'},
    {id:'3', title: 'Title 3'},
    {id:'4', title: 'Title 4'},
    {id:'5', title: 'Title 5'},
    {id:'6', title: 'Title 6'}
];

const renderItem = ({item}) => (
    <View style={{padding: 10, marginTop: 5, backgroundColor: 'green'}}>
        <Text>{item.title}</Text>
    </View>
);

const DetailList = () => {
    return (
        <FlatList
            data = {data}
            renderItem = {renderItem}
        />
    );
}

export default DetailList;