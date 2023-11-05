import { useEffect, useState} from "react";
import TaskCard from "components/elements/tasks/TaskCard";

import {collection, query, orderBy, onSnapshot} from "firebase/firestore"
import {db} from 'FirebaseDataStore';
import { Box } from "@mui/material";

const ListeTaches = () =>
{
    const [tasks, setTasks] = useState<any>()

    useEffect(() => {
        const q = query(collection(db, 'taches'), orderBy('created', 'desc'))
        onSnapshot(q, (snapshot) => {
          setTasks(snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data()
          })))
        })
      },[]
    )
      
    return(
        <Box sx={{display:'flex', flexWrap:'wrap'}}>
            { tasks && tasks.map((task:any) => (
                <TaskCard id={task.id} key={task.id} title={task.data.title} description={task.data.description} completed={task.data.completed}/>
            ))}
        </Box>
    )
}

export default ListeTaches;