import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SelectDropdown from 'react-native-select-dropdown'
import { IcChevronDown } from '../../../assets'

type Props = {
  text: string
  items: string[]
  onSelect: ((text: string) => void)
}

const Select = ({ text, items, onSelect }: Props) => {
  return (
    <View>
      <Text>{text}</Text>
      <View style={{ height: 6 }} />
      <View>
        <SelectDropdown
          data={items}
          onSelect={(selectedItem, index) => {
            onSelect(selectedItem)
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            return selectedItem
          }}
          rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item
          }}
          defaultButtonText={items[0]}
          buttonStyle={styles.buttonStyle}
          buttonTextStyle={styles.buttonTextStyle}
          renderDropdownIcon={() => {
            return <IcChevronDown />
          }}
          rowStyle={styles.rowStyle}
          rowTextStyle={styles.rowTextStyle}
        />
      </View>
    </View>
  )
}

export default Select

const styles = StyleSheet.create({
  textInput: { paddingHorizontal: 10, paddingVertical: 10, borderColor: '#020202', borderWidth: 1, borderRadius: 8 },
  buttonStyle: {
    paddingHorizontal: 0,
    height: 40,
    width: '100%',
    backgroundColor: 'white',
    borderColor: '#020202',
    borderWidth: 1,
    borderRadius: 8
  },
  buttonTextStyle: {
    textAlign: 'left',
    fontSize: 14,
    color: '#020202'
  },
  rowStyle: {
    height: 40
  },
  rowTextStyle: {
    textAlign: 'left',
    fontSize: 14,
    color: '#020202'
  }
})