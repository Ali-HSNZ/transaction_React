import { useState , useEffect } from "react";
import AddTransaction from "../Transction/Add/AddTransaction";
import ShowTransaction from "../Transction/Show/Showtransaction";
import  Styles  from "./App.module.css";


const App = () => {

    const [transaction , setTransaction] = useState([])
    const [filterTransaction , setFilterTransaction] = useState([])
    const [hazine , setHazine] = useState([])
    const [darAmad , setDarAmad] = useState([])

    
    const addTransaction = (getTransaction) => {
        setTransaction([...transaction , {...getTransaction,id : Date.now()}])
    }

    const Search = (e)=> {

        if(e === ""){
            setFilterTransaction(transaction)
        }else{
            setFilterTransaction(transaction.filter(item => item.name.includes(e)))
        }
       
    }

    const deleteHandler = (id)=> {
        const findIndex = transaction.findIndex(item => item.id === id)
        const findItem = transaction[findIndex]


        setTransaction(transaction.filter(item => item.id !== id))
        
        
        if(findItem.action === "هزینه"){
           const hazine = findItem.price;
           setHazine(e => e - hazine)
        }else{
            const darAmad = findItem.price;
            setDarAmad(e => e - darAmad)
        }
    }


    useEffect(()=>{

        var hazine = 0;
        var darAmad = 0;

        transaction.forEach(item => {
            item.action === "هزینه" ? (hazine = hazine + item.price) : (darAmad = darAmad + item.price)
        });
        setHazine(hazine)
        setDarAmad(darAmad)

        setFilterTransaction(transaction)
    },[transaction])



    return ( 
        <div className={Styles.parent}>
            <div className={Styles.parent_center}>
                <ShowTransaction transaction={filterTransaction} deleteHandler={deleteHandler} Search ={Search} hazine = {hazine} darAmad={darAmad}/>
                <AddTransaction addTransaction={addTransaction} />
            </div>
        </div>
    );
}
 
export default App;