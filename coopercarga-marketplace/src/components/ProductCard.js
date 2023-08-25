import { useState } from "react";
import Modal from 'react-modal';

const customStyles = {
  content: {
    width: "540px",
    left: '50%',
    right: 'auto',
    transform: 'translate(-50%, 0%)',
  },
};

export default function ProductCard(props) {
  const [modalIsOpen, setIsOpen] = useState(false);
  let product = props.product;

  const detailsModal = () => {
    setIsOpen(!modalIsOpen);
  }

  return (
    <div class="px-2 pt-2 m-2 border border-dark rounded bg-light">
      <div onClick={detailsModal}>
        <img class="border border-dark" src={product.image_url} alt={product.type} width={400} />
        <h5>{product.name}</h5>
        <p>{`${product.type} / ${product.sport}`}</p>
        <p>{product.price}</p>
      </div>
      <Modal isOpen={modalIsOpen} style={customStyles} contentLabel="Modal de exemplo">
        <div className="d-flex flex-column">
          <div>
            <button onClick={detailsModal} className="btn btn-lg pt-0">
              <span aria-hidden="true" class="h4">&times;</span>
            </button>
          </div>
          <img src={product.image_url} alt={product.type} width={470} className="align-self-center" />
          <h3 className="mt-2">{product.name}</h3>
          <p>{`${product.type} / ${product.sport}`}</p>
          <p>{`Marca: ${product.seller}`}</p>
          <p>{product.price}</p>
          <p>{product.details}</p>
          <div>
            <h4>Tamanhos</h4>
            {product.available_sizes.length > 0 ?
              <p>{product.available_sizes.join(" | ")}</p> :
              <p>Indisponível</p>
            }
          </div>
        </div>
      </Modal>
    </div>
  );
}