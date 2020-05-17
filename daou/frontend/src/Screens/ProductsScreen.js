import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { saveProduct, listProducts, deleteProduct } from '../actions/productActions';

function ProductsScreen(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [cat, setCat] = useState('');
  const [countInStock, setCountInStock] = useState('');
  const productList = useSelector(state => state.productList);
  const { loading, products, error } = productList;

  const productSave = useSelector(state => state.productSave);
  const { 
    loading: loadingSave,
     success: successSave,
      error: errorSave 
    } = productSave;

  const productDelete = useSelector(state => state.productDelete);
const { loading: loadingDelete, success: successDelete, error: errorDelete } = productDelete;
  const dispatch = useDispatch();

  useEffect(() => {
    if (successSave) {
      setModalVisible(false);
    }
    dispatch(listProducts());
    return () => {
      //
    };
  }, [successSave, successDelete]);

  const openModal = (product) => {
    setModalVisible(true);
    setId(product._id);
    setName(product.name);
    setPrice(product.price);
    setImage(product.image);
    setCat(product.cat);
    setCountInStock(product.countInStock);
  }
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveProduct({
      _id: id,
      name, price, image, cat,
      countInStock
    }));
  }
  const deleteHandler = (product) => {
    dispatch(deleteProduct(product._id));
  }
  return <div className="content content-margined">

    <div className="product-header">
      <h3>Products</h3>
      <button className="button primary" onClick={() => openModal({})}>Crear Producto</button>
    </div>
    {modalVisible &&
      <div className="form">
        <form onSubmit={submitHandler} >
          <ul className="form-container">
            <li>
              <h2>Create Product</h2>
            </li>
            <li>
              {loadingSave && <div>Loading...</div>}
              {errorSave && <div>{errorSave}</div>}
            </li>

            <li>
              <label htmlFor="name">
                Name
          </label>
              <input type="text" name="name" value={name} id="name" onChange={(e) => setName(e.target.value)}>
              </input>
            </li>
            <li>
              <label htmlFor="price">
                Price
          </label>
              <input type="text" name="price" value={price} id="price" onChange={(e) => setPrice(e.target.value)}>
              </input>
            </li>
            <li>
              <label htmlFor="image">
                Image
          </label>
              <input type="text" name="image" value={image} id="image" onChange={(e) => setImage(e.target.value)}>
              </input>
            </li>
            <li>
              <label htmlFor="cat">
                Categoria
          </label>
              <input type="text" name="cat" value={cat} id="cat" onChange={(e) => setCat(e.target.value)}>
              </input>
            </li>
            <li>
              <label htmlFor="countInStock">
                Stock
          </label>
              <input type="text" name="countInStock" value={countInStock} id="countInStock" onChange={(e) => setCountInStock(e.target.value)}>
              </input>
            </li>
            <li>
              <button type="submit" className="button primary">{id ? "Update" : "Create"}</button>
            </li>
            <li>
              <button type="button" onClick={() => setModalVisible(false)} className="button secondary">Atrás</button>
            </li>
          </ul>
        </form>
      </div>
    }


    <div className="product-list">

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Cat</th>
            <th>--</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (<tr key={product._id}>
            <td>{product._id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.cat}</td>
            <td>
              <button className="button" onClick={() => openModal(product)} >Editar</button>
              {' '}
              <button className="button" onClick={() => deleteHandler(product)} >Eliminar</button>
            </td>
          </tr>))}
        </tbody>
      </table>

    </div>
  </div>
}
export default ProductsScreen;