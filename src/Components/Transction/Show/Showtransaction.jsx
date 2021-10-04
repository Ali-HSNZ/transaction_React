import Sort from "../../Sort/Sort";
import  Styles  from "./ShowTransaction.module.css";


const ShowTransaction = ({transaction , hazine , darAmad , Search , deleteHandler , SortItem}) => {
    
    return (  
        <div className={Styles.ShowTransaction}>
            
            <div className={Styles.parentTitle}>
                <span>تومان </span>
               <p style={darAmad-hazine < 0 ? {color : "red"} : {color : "#258f01"}}> { darAmad - hazine}</p>
               <p dir="rtl" style={{marginLeft:'5px'}}>  موجودی : </p>
            </div>

            <div className={Styles.incomeExpense_Parent}>
                <div className={Styles.incomeResult}><p>درآمد</p><span style={{color : "#258f01"}}>{darAmad}</span></div>
                <div className={Styles.expenseResult}><p>هزینه</p><span style={{color : "red"}}>{hazine}</span></div>
            </div>

            <div className={Styles.searchBox}>
                <input type='text' dir='rtl' placeholder='جستجو بر اساس نام فعالیت' onChange={e => Search(e.target.value)}/>
                <p dir='rtl'>جستجو : </p>
            </div>

            <div className={Styles.resultParent}>

                {transaction.length === 0 &&   <div dir="center" style={{justifyContent:'center'}} className={Styles.result}><p>تراکنش ای ثبت نشده است</p></div>}

                {transaction.map((item) => {
                    return (
                        <div key={item.id} className={`${Styles.result}  ${item.action === "درآمد" ? Styles.resultIncome : Styles.resultExpense} `}>
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