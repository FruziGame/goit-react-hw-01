
import css from "./TransactionHistory.module.css"

export default function TransactionHistory({items}) {

        return (
    
            <table className={css.table}>
                <thead>
                <tr>
                    <th className={css.tableHeader}>Type</th>
                    <th className={css.tableHeader}>Amount</th>
                    <th className={css.tableHeader}>Currency</th>
                </tr>
                </thead>
            
                <tbody>
            
            {items.map(item => (
                <tr key={item.id} className={css.dataContainer}>
                    <td className={css.tableData}>{item.type.charAt(0).toUpperCase() + item.type.slice(1).toLowerCase()}</td>
                    <td className={`${css.tableData} ${css.amount}`}>{item.amount}</td>
                    <td className={`${css.tableData} ${css.currency}`}>{item.currency}</td>
                </tr>
            ))}
                </tbody>
            </table>
          
        )

};