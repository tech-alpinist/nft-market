import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./nft-card.css";

import Modal from "../Modal/Modal";

const NftCard = (props) => {
  const { title, currentBid, creatorImg, imgUrl, creator, nftUrl} = props.item;

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="single__nft__card">
      <div className="nft__img" onClick={() => setShowModal(true)}>
        <img src={imgUrl} alt="" className="w-100" />
      </div>

      <div className="nft__content">
        <h5 className="nft__title">
          {title}
        </h5>

        <div className="creator__info-wrapper d-flex gap-3">
          <div className="creator__img">
            <img src={creatorImg} alt="" className="w-100" />
          </div>

          <div className="creator__info w-100 d-flex align-items-center justify-content-between">
            <div>
              <h6>Created By</h6>
              <p>{creator}</p>
            </div>

            <div>
              <h6>Current Bid</h6>
              <p>{currentBid} ETH</p>
            </div>
          </div>
        </div>

        <div className=" mt-3 d-flex align-items-center justify-content-between">
          <button
            className="bid__btn d-flex align-items-center gap-1"
            onClick={() => window.open(nftUrl, '_blank').focus()}
          >
            <i className="ri-shopping-bag-line"></i> Buy
          </button>

          {showModal && <Modal setShowModal={setShowModal} item={props.item} />}

          <span className="history__link">
            <Link to="#">View History</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default NftCard;
