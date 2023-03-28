const fetchProduct = async ({queryKey}) => {
    const productId = queryKey[1];

    const response = await fetch(`http://localhost:3000/productDetails/${productId}`);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

  const data = await response.json();
  return data;
}

export default fetchProduct;