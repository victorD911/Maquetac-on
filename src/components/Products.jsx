const Products = () => {
  const products = [
    { id: 1, name: "Camiseta Básica Urban", desc: "Algodón 100% orgánico" },
    { id: 2, name: "Jeans Slim Fit", desc: "Denim premium stretch" },
    { id: 3, name: "Sudadera Oversize", desc: "Algodón French Terry" },
    { id: 4, name: "Chaqueta Bomber", desc: "Nylon resistente al agua" }
  ];

  return (
    <section className="products-section">
      <h2 className="products-title">NUESTRA COLECCIÓN</h2>
      <p className="products-subtitle">Estilo urbano para cada ocasión</p>
      
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image-placeholder">
              <span className="icon-placeholder">●●</span> 
            </div>
            <h3 className="product-name">{product.name}</h3>
            <p className="product-desc">{product.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;