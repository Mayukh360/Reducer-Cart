import ProductItem from './ProductItem';
import classes from './Products.module.css';
const dummy=[
  {id:'p1',
   title:'My First Book',
   price: 200,
   description:'My first Book',
  },
  {id:'p2',
  title:'My Second Book',
  price: 500,
  description:'My Second Book',
 }
]
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
       { dummy.map((item)=>(
       <ProductItem
       key={item.id}
       id={item.id}
          title={item.title}
          price={item.price}
          description={item.description}
        />
        )) }
      </ul>
    </section>
  );
};

export default Products;
