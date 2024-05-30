import { TableWrapperProps, FruitsOrVeggies } from './types';

export const FruitsTable = ({
  inputValue,
  isProductInStock,
}: TableWrapperProps) => {
  const fruits: FruitsOrVeggies = [
    { id: 0, name: 'Elma', price: '21₺', inStock: true },
    { id: 1, name: 'Armut', price: '32₺', inStock: true },
    { id: 2, name: 'Kiraz', price: '53₺', inStock: false },
    { id: 3, name: 'Erik', price: '66₺', inStock: true },
    { id: 4, name: 'Muz', price: '26₺', inStock: false },
    { id: 5, name: 'Çilek', price: '43₺', inStock: true },
    { id: 6, name: 'Nektarin', price: '31₺', inStock: true },
    { id: 7, name: 'Vişne', price: '62₺', inStock: false },
    { id: 8, name: 'Ananas', price: '83₺', inStock: true },
  ];

  return (
    <>
      <ul className='deneme1'>
        <h1>Meyveler</h1>
        {fruits.filter((fruit) => {
          const productFilter = fruit.name.toLowerCase().includes(inputValue.toLowerCase());
          const stockControl = !isProductInStock || fruit.inStock;
          return productFilter && stockControl;
        }).map((fruit) => (
          
            <li key={fruit.id}>{fruit.name} {fruit.price}</li>
        
        ))}
      </ul>

{/* 
      <table className='fruits-table'>
        <thead>
          <tr>
            <th>Fruits</th>
          </tr>
        </thead>
        <tbody>
          {fruits.filter((fruit) => {
            const productFilter =  fruit.name.toLowerCase().includes(inputValue.toLowerCase());
            const stockControl = !isProductInStock || fruit.inStock;
            return productFilter && stockControl;
          }).map((fruit ) => (
            <tr key={fruit.id}>
              <td>{fruit.name} {fruit.price}</td>
            </tr>
          ))
          }
        </tbody>
      </table> */}
    </>
  );
};
