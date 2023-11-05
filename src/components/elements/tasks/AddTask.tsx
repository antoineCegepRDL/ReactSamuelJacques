import {FormEvent, ChangeEvent, useState} from 'react';
import {db} from 'FirebaseDataStore';
import {collection, addDoc, Timestamp} from 'firebase/firestore';

import { Add } from '@mui/icons-material';

import {
  Button,
  Grid,
  TextField
} from '@mui/material';

import { TaskCardElements } from 'ts/interfaces/ITask';

const AddTask:React.FC = () => {
  const [task, setTask] = useState<TaskCardElements>({id:'', title:'',description:'',completed:false});

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      await addDoc(collection(db, 'taches'), {
        title: task.title,
        description: task.description,
        completed: false,
        created: Timestamp.now()
      });
    } catch (err) {
      alert(err)
    }
  }

  return (
      <form onSubmit={handleSubmit} name='addTask'>
        <Grid>
          <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {setTask({id:'', title:e.target.value.toUpperCase(), description:task.description,completed:false})}}
                  label="Titre" 
                  value={task.title}
                  aria-label="Titre de la tâche"
                  name='TitreTache'
                  id='Titre'
                  required
                  sx={{width:'100%', mb:2}}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField 
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {setTask({id:'', title:task.title, description:e.target.value,completed:false})}}
                  multiline
                  placeholder='Description'
                  value={task.description}
                  minRows={5}
                  aria-label="Description de la tâche"
                  name='DescriptionTache'
                  id='Description'
                  required
                  sx={{ width:'100%', mb:2}}
                />
            </Grid>
            <Grid item xs={12}>
                <Button variant="contained" startIcon={<Add />} type='submit'>Ajouter</Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
  )
}

export default AddTask