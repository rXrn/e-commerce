import {
  Card,
  CardActions,
  CardMedia,
  IconButton,
  Typography,
  CardContent,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import React from "react";
import useStyles from "./styles";
const Product = ({ product }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} title={product.name}></CardMedia>
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h5">{product.price}</Typography>
        </div>
        <Typography variant="body2" color="textSecondary">
          {product.description}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions} disableSpacing>
        <IconButton aria-label="Add To Cart">
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
