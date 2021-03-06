import { useState } from 'react';
import Sort from '../../Sort/Sort';
import Styles from './AddTransaction.module.css'
const AddTransaction = ({addTransaction , SortItem}) => {


    const [values , setValues] = useState({
        name: "" , 
        price: 0 , 
        action : ""
    })



    const changeHandler =(e)=> {
        setValues({...values , [e.target.name] :  e.target.value})

    }

    const submitHandler = (e)=>{ 
        

        e.preventDefault()
        values.price = parseInt(values.price)

        if(values.action === ""){
           alert("انتخاب کنید : درآمد / هزینه ")
        }
        else if (values.name === ""){
                alert("انتخاب نام / توضیحات :فیلد نباید خالی باشد")
        }
        else if (values.price === 0){
            alert("قیمت نباید 0 تومان باشد")
        }

        values.action !== "" && values.name !== "" &&values.price !== 0 &&  addTransaction(values)
        

       
    values.name = ""
    values.price = 0
       
    }

   

    return ( 
        <div>
        <form onSubmit={submitHandler} className={Styles.addTransaction}>
            
            <div className={Styles.group_title}><p dir='rtl'>ثبت تراکنش : </p></div>
            <div className={Styles.group}>
                <input 
                    type="text" 
                    name="name" 
                    onChange={changeHandler} 
                    value={values.name} 
                    dir='rtl' 
                    className={`${Styles.nameInput} ${Styles.inputGroup}`} 
                    placeholder='خرید نان  , دریافت حقوق , ... ,'
                />
                <p dir='rtl'> توضیحات (کوتاه) : </p>
            </div>

            <div className={Styles.group}>
            <p dir='rtl' style={{marginRight:'5px'}}>تومان </p>
                <input 
                    type="number" 
                    min={0} 
                    name="price" 
                    value={values.price} 
                    onChange={changeHandler}
                    className={`${Styles.priceInput} ${Styles.inputGroup}`} 
                    placeholder='هزینه یا درآمد دریافتی' 
                    style={{textAlign : 'center'}}
                />
                <p dir='rtl'>قیمت  : </p>
            </div>
            
            <div className={Styles.groupRadio}>


                    <div className={Styles.radioCenter}>
                        <label className={Styles.radioLabel} htmlFor='income'>درآمد</label>
                        <input type='radio' onChange={changeHandler} id="income" className={Styles.incomeRadio} name='action' value='income'/>
                    </div>

                
                    <div className={Styles.radioCenter}>
                        <label className={Styles.radioLabel} htmlFor='expense'>هزینه</label>
                        <input type='radio'  onChange={changeHandler} id='expense' className={Styles.expenseRadio}  name='action' value="expense" />
                    </div>
                    

            </div>

            <button type='submit' className={Styles.submitBtn}>ثبت</button>



        </form>
        <Sort SortItem={SortItem}/>
</div>
    );
}
 
export default AddTransaction;