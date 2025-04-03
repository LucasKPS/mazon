import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../global.css'; // Importação do CSS global

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const products = [
      { id: 1, name: 'Controle sem fio DualSense Midnight Black', price: 'R$ 398,97', image: 'https://m.media-amazon.com/images/I/61WRPyQAIIL._AC_SX679_.jpg', description: 'Controle sem fio para PlayStation 5 com design elegante e confortável.' },
      { id: 2, name: 'Smart TV 4K 65" LG QNED 65QNED80T', price: 'R$ 4.083,05', image: 'https://m.media-amazon.com/images/I/61E2-ioXeIL._AC_SY355_.jpg', description: 'Smart TV 4K com tecnologia Quantum Dot e processador AI.' },
      { id: 3, name: 'Havit HV-H2232d - Fone de Ouvido Gamer', price: 'R$ 109,90', image: 'https://m.media-amazon.com/images/I/516HwNOJoUL._AC_SX466_.jpg', description: 'Fone de ouvido gamer com iluminação RGB e microfone integrado.' },
    ];

    const selectedProduct = products.find((p) => p.id === parseInt(id));
    setProduct(selectedProduct);
  }, [id]);

  if (!product) {
    return <div>Produto não encontrado.</div>;
  }

  return (
    <div>
      <Navbar />

      <div className="product-detail-page">
        <div className="product-details-container">
          <div className="product-details-content">
            <h1>{product.name}</h1>

            <div className="image-container">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
            </div>

            <div className="description-container">
              <p><strong>Descrição:</strong> {product.description}</p>
            </div>

            <div className="price-container">
              <p><strong>Preço:</strong> {product.price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;