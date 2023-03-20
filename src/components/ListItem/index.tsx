import { useState } from 'react'
import * as C from './styles'
import {Item} from '../../types/Item'


type Props = {
    Item: Item,
    onCheck: (id: number) => void
}

export const ListItem = ({Item, onCheck}: Props) => {
    
    const [isChecked, setIsChecked] = useState(Item.done)

    const handleIsChecked = (e: React.ChangeEvent<HTMLInputElement>) =>{
        onCheck(Item.id);
        setIsChecked(e.target.checked)
    }
    
    return (
        <C.Container done={isChecked}>
            <input 
                type="checkbox" 
                checked={isChecked}
                onChange={ e => handleIsChecked(e)} 
                   
            />
            <label>{Item.name} e {`${Item.done}`}</label>
        </C.Container>
    );
}

