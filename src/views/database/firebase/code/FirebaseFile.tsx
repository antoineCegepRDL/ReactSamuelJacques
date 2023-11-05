import { AvatarListItem } from "ts/interfaces/IAvatarList";

import AvatarList from "components/elements/lists/AvatarList";
import CodeHighligther from "components/styling/CodeHighligther";

const FirebaseFile: React.FC = () => {
    const AppItems: AvatarListItem[] = [
        {avatar:'👉', primaryText:'Créer le fichier', secondaryText:'À la racine du dossier src'},
        {avatar:'👉', primaryText:'Ajouter le code suivant', secondaryText:'Avec votre propre configuration!'},
    ];

    const FirebaseFile = `
    import { initializeApp } from "firebase/app"
    import { getFirestore } from 'firebase/firestore'
    
    const firebaseConfig = {
        apiKey: "",
        authDomain: "",
        projectId: "",
        storageBucket: "",
        messagingSenderId: "",
        appId: ""
    };
    
    const app = initializeApp(firebaseConfig)
    const db = getFirestore(app)
    
    export {db}
    `

    return (
        <>
            <AvatarList items={AppItems}/>
            <CodeHighligther code={FirebaseFile} />
        </>
    );
}


export default FirebaseFile;