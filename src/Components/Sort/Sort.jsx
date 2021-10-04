import Styles from './Sort.module.css'
import Select from 'react-select'

const Sort = ({SortItem}) => {

    const options = [
        { value: '', label: 'نمایش همه' },
        { value: 'expense', label: 'هزینه' },
        { value: 'income', label: 'درآمد' }
    ]
    
    return ( 
        // <select className={Styles.sort}>
        //     <option>درآمد</option>
        //     <option>هزینه</option>
        // </select>

       <div className={Styles.parent}>
            <Select 
                className={Styles.sort} 
                options={options} 
                onChange= {e=> SortItem(e.value)}
                defaultValue = { { value: '', label: 'نمایش همه' }}
            />
           <p dir='rtl'>انتخاب  درآمد / هزینه : </p>
       </div>
    );
}
 
export default Sort;