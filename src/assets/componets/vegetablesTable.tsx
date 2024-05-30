import { TableWrapperProps, FruitsOrVeggies } from './types';

export const VegetablesTable = ({
  inputValue,
  isProductInStock,
}: TableWrapperProps) => {
  const veggies: FruitsOrVeggies = [
    { id: 0, name: 'Kabak', price: '15₺', inStock: true },
    { id: 1, name: 'Patlıcan', price: '21₺', inStock: false },
    { id: 2, name: 'Brokoli', price: '33₺', inStock: true },
    { id: 3, name: 'Maydanoz', price: '11₺', inStock: false },
    { id: 4, name: 'Domates', price: '20₺', inStock: true },
    { id: 5, name: 'Salatalık', price: '23₺', inStock: false },
    { id: 6, name: 'Fasulye', price: '21₺', inStock: true },
    { id: 7, name: 'Patates', price: '24', inStock: true },
    { id: 8, name: 'Soğan', price: '13₺', inStock: false },
  ];

  console.log(inputValue);
  return (
    <>
      <ul className='deneme2'>
        <h1>Sebzeler</h1>
        {veggies.filter((veggy) => {
          const productFilter = veggy.name.toLowerCase().includes(inputValue.toLowerCase());
          const stockControl = !isProductInStock || veggy.inStock;
          return productFilter && stockControl;
        }).map((veggy) => (
          
            <li key={veggy.id}>{veggy.name} {veggy.price}</li>
        
        ))}
      </ul>


      {/* <table className='vegatables'>
        <thead>
          <tr>
            <th>Veggies</th>
          </tr>
        </thead>
        <tbody>
          {veggies.filter((veggy) => {
            const productFilter =  veggy.name.toLowerCase().includes(inputValue.toLowerCase());
            const stockControl = !isProductInStock || veggy.inStock;
            return productFilter && stockControl;
          }).map((veggy ) => (
            <tr key={veggy.id}>
              <td>{veggy.name} {veggy.price}</td>
            </tr>
          ))
          }
        </tbody>
      </table> */}
    </>
  );
};
