import { useState , useEffect } from "react";
import AddTransaction from "../Transction/Add/AddTransaction";
import ShowTransaction from "../Transction/Show/Showtransaction";
import  Styles  from "./App.module.css";


const App = () => {

    const [transaction , setTransaction] = useState([])
    const [filterTransaction , setFilterTransaction] = useState([])
    const [expense , setExpense] = useState([])
    const [income , setIncome] = useState([])

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
        
        
        if(findItem.action === "income"){
           const income = findItem.price;
           setExpense(e => e - income)
        }else{
            const expense = findItem.price;
            setIncome(e => e - expense)
        }
    }

    const SortItem = (e)=> {
        if(e === ""){
            setFilterTransaction(transaction)
        }else{
            const items = transaction.filter(item => item.action.includes(e))
            setFilterTransaction(items)
        }
    }

    useEffect(()=>{

        var income = 0;
        var expense = 0;

        transaction.forEach(item => {
            item.action === "expense" ? (expense = expense + item.price) : (income = income + item.price)
        });
        setExpense(expense)
        setIncome(income)

        setFilterTransaction(transaction)
    },[transaction])

    return ( 
        <div className={Styles.parent}>
            <div className={Styles.parent_center}>
               
                <ShowTransaction transaction={filterTransaction} deleteHandler={deleteHandler} Search ={Search} expense = {expense} income={income}/>
                <AddTransaction SortItem={SortItem} addTransaction={addTransaction} />
                
            </div>
        </div>
    );
}
 
export default App;