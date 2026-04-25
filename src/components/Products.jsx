const Products = () => {
  const products = [
    { id: 1, name: "Camiseta Básica Urban", desc: "Algodón 100% orgánico", price: 29, icon: "fi-rr-user" },
    { id: 2, name: "Jeans Slim Fit", desc: "Denim premium stretch", price: 89, icon: "fi-rr-layers" },
    { id: 3, name: "Sudadera Oversize", desc: "Algodón French Terry", price: 65, icon: "fi-rr-settings-sliders" },
    { id: 4, name: "Chaqueta Bomber", desc: "Nylon resistente al agua", price: 120, icon: "fi-rr-trash" },
    { id: 5, name: "Gorra Snapback", desc: "Bordado premium", price: 35, icon: "fi-rr-world" },
    { id: 6, name: "Zapatillas Urban", desc: "Suela de goma antideslizante", price: 95, icon: "fi-rr-clock" }
  ];

  return (
    <section className="products-section">
      <h2 className="products-title">NUESTRA COLECCIÓN</h2>
      <p className="products-subtitle">Estilo urbano para cada ocasión</p>
      
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image-box">
              <i className={`fi ${product.icon} placeholder-icon`}></i>
            </div>
            
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-desc">{product.desc}</p>
              <div className="product-footer">
                <span className="product-price">€{product.price}</span>
                <button className="add-button">AÑADIR</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;