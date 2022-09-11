import { useState, useEffect } from 'react';
import './home.css'

import { BsFillAlarmFill } from 'react-icons/bs'

    function Home() {

        const [input, setInput] = useState('')
        const [tarefas, setTarefas] = useState([
          'Estudar Node JS',
          'Praticar React JS',
          'Praticar JavaScript'
        ])
    
        useEffect(() => {
          const tarefasStorage = localStorage.getItem('@tarefa')
          if(tarefasStorage){
            setTarefas(JSON.parse(tarefasStorage))
          }
        }, [])
    
        useEffect(() => {
          
          localStorage.setItem('@tarefa', JSON.stringify(tarefas))
    
        }, [tarefas])
       
        function handleRegister(e) {
          e.preventDefault()
    
          setTarefas([...tarefas, input])
          setInput('')
        }

        function excluirTarefa(id) {
            let filtroTarefas = tarefas.filter((item) => {
                return (item.id !== id)
            })
        }


            
       
        return (
            <div className='container'>
            <div className='App'>
                <h1>Cadastrando Tarefas</h1>
            </div>

            <form className='formulario' onSubmit={handleRegister}>
                <label>Nome da tarefa:</label>
                <br/>
                <input placeholder='Digite uma tarefa'
                value={input}
                onChange={(e) => setInput(e.target.value) }/><br/>

                <button type='submit'>Registrar</button>
            </form>

            <br/><br/>

            <div className='tarefas'>
                <br/>
            <ul>
             {tarefas.map( tarefa => (
                <li key={tarefa} ><BsFillAlarmFill  onClick={() => excluirTarefa(tarefa.id)} className="icone"/>{tarefa}</li>
             ))}
          </ul>
            </div>
            </div>
        )
    }

    export default Home;