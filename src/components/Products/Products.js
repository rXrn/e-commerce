import { Grid } from "@material-ui/core";
import { Component } from "react";
import Product from "./Product";

const products = [
  {
    id: 1,
    name: "Adidas",
    description: "Running shoes",
    price: "$50",
  },
  {
    id: 2,
    name: "Louis Vuitton",
    description: "Cloth and dress",
    price: "$34",
  },
];

const Products = () => {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map((product, key) => {
          return (
            <Grid key={key} xs={12} sm={6} md={4} lg={3}>
              <Product product={product} />
            </Grid>
          );
        })}
      </Grid>
      ;
    </main>
  );
};

export default Products;
