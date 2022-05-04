import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_ITEMS = [
  {
    id: "p1",
    price: 12,
    title: "My First NFT art",
    description: "My first and beloved NFT art decoration",
  },
  {
    id: "p2",
    price: 18,
    title: "My Second NFT art",
    description: "My Second and beloved NFT art decoration",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_ITEMS.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
