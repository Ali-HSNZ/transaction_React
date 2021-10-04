import  Styles  from "./ShowTransaction.module.css";


const ShowTransaction = ({transaction , expense , income , Search , deleteHandler}) => {
    
    return (  
        <div className={Styles.ShowTransaction}>
            
            <div className={Styles.parentTitle}>
                <span>تومان </span>
               <p style={income-expense < 0 ? {color : "red"} : {color : "#258f01"}}> { income - expense}</p>
               <p dir="rtl" style={{marginLeft:'5px'}}>  موجودی : </p>
            </div>

            <div className={Styles.incomeExpense_Parent}>
                <div className={Styles.incomeResult}><p>درآمد</p><span style={{color : "#258f01"}}>{income}</span></div>
                <div className={Styles.expenseResult}><p>هزینه</p><span style={{color : "red"}}>{expense}</span></div>
            </div>

            <div className={Styles.searchBox}>
                <input type='text' dir='rtl' placeholder='جستجو بر اساس نام تراکنش' onChange={e => Search(e.target.value)}/>
                <p dir='rtl'>جستجو : </p>
            </div>

            <div className={Styles.resultParent}>

                {transaction.length === 0 &&   <div dir="center" style={{justifyContent:'center'}} className={Styles.result}><p>تراکنش ای ثبت نشده است</p></div>}

                {transaction.map((item) => {
                    return (
                        <div key={item.id} className={`${Styles.result}  ${item.action === "income" ? Styles.resultIncome : Styles.resultExpense} `}>
                            <p>{item.price}</p>
                            <div className={Styles.name_btn_parent}>
                                <p>{item.name}</p>
                                <button className={Styles.deleteBtn} onClick={()=>deleteHandler(item.id)}>حذف</button>
                            </div>
                            
                           
                        </div>
                    )
                })}


                {/* <div className={Styles.result}>داده ای موجود نیست</div> */}
            </div>
        </div>   
    );
}
 
export default ShowTransaction;