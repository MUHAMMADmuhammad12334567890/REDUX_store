export const printPrice = (product) => {
  const { price, discount } = product;

  if (!discount) {
    return <h4>{product.price} ₽</h4>;
  }

 if (discount) {
 return  <h4>{product.price * (100 - product.discount) / 100}</h4>  

 }

 
 };
