import {useState} from 'react';
import * as C from './App.styles';
import {Item} from './types/Item';
import {ListItem} from './components/ListItem';
import {AddArea} from './components/AddArea';

const App = () =>{
  const [list, setList] = useState<Item[]>([
    {id:1, name:'comprar o pão na padaria', done:false},
    {id:2, name:'comprar um bolo na padaria', done:true},
  ]);

  const handleAddTask = (taskName: string) =>{
    const newList = [...list];
    newList.push({
      id: list.length +1,
      name: taskName,
      done:false
    });

    setList(newList);
  }

  const handleDone = (id: number) =>{
    const newList = [...list];
    newList[id-1].done = !list[id-1].done ;

  }
  return(
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

          <AddArea onEnter={handleAddTask} />

          {list.map((item, index) =>(
              <ListItem key={index} Item={item} onCheck ={handleDone} />
          ))}

      </C.Area>
    </C.Container>
  );
}

export default App;