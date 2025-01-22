import { formatDate } from 'date-fns';
import style from './CryptoHistory.module.css';
import { formateDateToNow } from '../../helpers/formateDateToNow';

const CryptoHistory = ({ items }) => {
  return (
    <table className={style.table}>
  <thead className={style.thead}>
    <tr>
      <th className={style.th}>№</th>
      <th className={style.th}>PRICE</th>
      <th className={style.th}>AMOUNT</th>
      <th className={style.th}>DATE</th>
    </tr>
  </thead>

      <tbody>
        {items.map(({ amount, date, id, price }, index) => (
          <tr key={id} className={style.tr}>
            <td className={style.td}>{index + 1}</td>
            <td className={style.td}>{price}</td>
            <td className={style.td}>{amount}</td>
            <td className={style.td}>{formateDateToNow(date)}</td>
    </tr>
        ))}
    
  </tbody>
    </table>
    );
};

export default CryptoHistory;
