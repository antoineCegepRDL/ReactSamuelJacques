import { ChangeEvent, FormEvent, useState } from 'react';
import { Cancel, Delete, Edit, Save } from '@mui/icons-material';

import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import {db} from 'FirebaseDataStore';

import {
    Box,
    Button,
    Card,
    CardContent,
    CardActions,
    Checkbox,
    Grid,
    TextField,
    Typography
} from '@mui/material';

import { TaskCardElements } from 'ts/interfaces/ITask';

const TaskCard = ({id, title,description,completed}:TaskCardElements) => {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [task, setTask] = useState<TaskCardElements>({id:id, title:title, description:description, completed:completed});
    const label = { inputProps: { 'aria-label': 'Completed checkbox' } };

    const handleUpdate = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const taskDocRef = doc(db, 'taches', id)
            await updateDoc(taskDocRef, {
                title: task.title,
                description: task.description
            });
            setEditMode(false);
        } catch (err) {
            alert(err)
        }
    }

    const handleChange = async () => {
        const taskDocRef = doc(db, 'taches', id)
        try{
            await updateDoc(taskDocRef, {
            completed: task.completed
            })
        } catch (err) {
            alert(err)
        }
    }

    const handleDelete = async () => {
        const taskDocRef = doc(db, 'taches', id)
        try{
            await deleteDoc(taskDocRef);
            setEditMode(false);
        } catch (err) {
            alert(err)
        }
    }

    return (
        <Card sx={{ width: 400, bgcolor:'background.default', m:1}}>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={2} sx={{display:'flex'}}>
                        <Checkbox {...label} {...{checked:task.completed}} onClick={() => {task.completed = !task.completed}} onChange={handleChange}/>
                    </Grid>
                    <Grid item xs={10}>
                        {editMode ?
                            <Box>
                                <TextField
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => {setTask({...task, title:e.target.value.toUpperCase()})}}
                                    label="Titre" 
                                    value={task.title}
                                    aria-label="Titre de la tâche"
                                    name='TitreTache'
                                    id='Titre'
                                    required
                                    sx={{ width:'100%', mb:2}}
                                />
                                <TextField 
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => {setTask({...task, description:e.target.value})}}
                                    multiline
                                    placeholder='Description'
                                    value={task.description}
                                    minRows={3}
                                    maxRows={5}
                                    aria-label="Description de la tâche"
                                    name='DescriptionTache'
                                    id='Description'
                                    required
                                    sx={{ width:'100%' }}
                                />
                            </Box>
                        :
                            <Box>
                                <Typography gutterBottom variant="h6" component="div">
                                    {title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {description}
                                </Typography>
                            </Box>
                        }
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions>
            <form onSubmit={handleUpdate} name='updateTask'>
                {editMode ?
                    <>
                        <Button size="small" color="primary" startIcon={<Save />} type='submit'>
                            Sauvegarder
                        </Button>
                        <Button size="small" color="primary" startIcon={<Cancel />} onClick={() => {setEditMode(false)}}>
                            Annuler
                        </Button>
                    </>
                :
                    <Button size="small" color="primary" startIcon={<Edit />} onClick={() => {setEditMode(true)}}>
                        Modifier
                    </Button>
                }

                <Button size="small" color="primary" startIcon={<Delete />} onClick={handleDelete}>
                    Supprimer
                </Button>
            </form>
            </CardActions>
        </Card>
    );
}

export default TaskCard;