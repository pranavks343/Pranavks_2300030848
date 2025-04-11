import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  CircularProgress,
  Alert,
  Rating,
  Chip,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const ApiProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setError("Failed to load products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const truncateDescription = (text, maxLength = 60) => {
    return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
  };

  const addToCart = (productId) => {
    console.log(`Added product ${productId} to cart`);
    alert('Product added to cart!');
  };

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center px-4 py-12"
      style={{
        background: 'linear-gradient(to right, #fdfbfb, #ebedee)' // light gradient background
      }}
    >
      <div className="w-full max-w-7xl">
        <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text mb-10">
          Explore Our Stylish Collection
        </h2>

        {loading && (
          <div className="flex justify-center my-8">
            <CircularProgress />
          </div>
        )}

        {error && (
          <Alert severity="error" className="my-4">
            {error}
          </Alert>
        )}

        {!loading && !error && (
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
              <Card
                key={product.id}
                className="transition-transform duration-300 hover:-translate-y-1 shadow-xl rounded-2xl"
              >
                <CardMedia
                  component="img"
                  height="220"
                  image={product.image}
                  alt={product.title}
                  sx={{ objectFit: 'contain', padding: '20px', backgroundColor: '#fdfdfd' }}
                />
                <CardContent>
                  <Chip
                    label={product.category.toUpperCase()}
                    color="secondary"
                    size="small"
                    sx={{ mb: 1 }}
                  />
                  <Typography
                    variant="subtitle1"
                    fontWeight={600}
                    gutterBottom
                    sx={{ minHeight: '48px', lineHeight: 1.3 }}
                  >
                    {product.title}
                  </Typography>
                  <Rating
                    name="read-only"
                    value={product.rating?.rate || 0}
                    precision={0.5}
                    readOnly
                    size="small"
                  />
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 1, minHeight: '40px' }}
                  >
                    {truncateDescription(product.description)}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
                  <Typography variant="h6" color="error">
                    ${product.price}
                  </Typography>
                  <Button
                    variant="contained"
                    size="small"
                    startIcon={<ShoppingCartIcon />}
                    onClick={() => addToCart(product.id)}
                    sx={{
                      background: 'linear-gradient(45deg, #ff416c, #ff4b2b)',
                      color: 'white',
                      borderRadius: '20px',
                      textTransform: 'none',
                      '&:hover': {
                        background: 'linear-gradient(45deg, #ff4b2b, #ff416c)'
                      }
                    }}
                  >
                    Add
                  </Button>
                </CardActions>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ApiProducts;
