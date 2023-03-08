import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./modal.css";

const Modal = (props) => {
  const setShowModal = props.setShowModal
  const { title, imgUrl, count, currentBid, desc, nftUrl, creator, creator_address } = props.item
  return (
    <div className="modal__wrapper">
      <div className="single__modal">
        <span className="close__modal">
          <i className="ri-close-line" onClick={() => setShowModal(false)}></i>
        </span>
        <Container className="modal-container">
          <Row>
            <Col lg="6" className="left-section">
              <h6 className="text-center text-light">{title}</h6>
              <p className="text-center text-light">
                The price is <span className="money">{currentBid} ETH</span>
              </p>
              <div className="nft__img">
                <img src={imgUrl} alt="" className="w-100" />
              </div>
              <div className="available-count">
                <h6>Available: {count}</h6>
              </div>
            </Col>
            <Col lg="6" className="right-section">
              <div className="description mb-4">
                <h6>Description</h6>
                <p>
                  {desc}
                </p>
              </div>

              <div className="creator-info mb-3">
                <h6>Created by {creator}</h6>
                <code>{creator_address}</code>
              </div>

              <button className="place__bid-btn" 
                onClick={() => window.open(nftUrl, '_blank').focus()}>
                  Buy this NFT
              </button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Modal;
