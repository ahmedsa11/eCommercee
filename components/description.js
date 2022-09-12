import React, { useState, useRef, useEffect } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Style from "../styles/description.module.css";
import AddRateStyle from "../styles/addRate.module.css";
import editRateStyle from "../styles/editRate.module.css";
import reviewItem from "../styles/reviewItem.module.css";
import Rating from "@mui/material/Rating";
import CloseIcon from "@mui/icons-material/Close";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { SvgIcon } from "@mui/material";
import axios from "axios";
const Description = ({ productData }) => {
  const [key, setKey] = useState("description");
  const [newReview, setNewReview] = useState("");
  const [value, setValue] = useState(0);
  const [message, setMessage] = useState("");
  const [reviews, setReviews] = useState([]);
  const [myReview, setMyReview] = useState("");
  const [myRate, setMyRate] = useState(0);
  const [ReviewId, setReviewId] = useState("");
  const [editMessage, setEditMessage] = useState("");
  const addReviewRef = useRef(null);
  const editReviewRef = useRef(null);
  const sendReview = () => {
    if (newReview === "" || newReview.length < 5) {
      setMessage("Please add a valid review and rate the product");
    } else if (value === 0) {
      setMessage("Please add a valid review and rate the product");
    } else {
      setMessage("");

      axios({
        method: "POST",
        url: "https://e-commerce-app-api-v1.herokuapp.com/api/v1/reviews",
        data: {
          title: newReview,
          ratings: value,
          product: productData._id,
          user: JSON.parse(localStorage["user"]).id,
        },
        headers: {
          Authorization: `Bearer ${localStorage["token"]}`,
        },
      })
        .then((res) => {
          toggleAddReview();
          let reGetProductData = new Event("reGetProductData");
          document.dispatchEvent(reGetProductData);
        })
        .catch((err) => {
          console.log(err.response);
        });
    }
  };
  const deleteReview = (id) => {
    axios({
      method: "DELETE",
      url: `https://e-commerce-app-api-v1.herokuapp.com/api/v1/reviews/${id}`,
      headers: {
        Authorization: `Bearer ${localStorage["token"]}`,
      },
    })
      .then((res) => {
        setMyReview("");
        setMyRate(0);
        setReviewId("");
        let reGetProductData = new Event("reGetProductData");
        document.dispatchEvent(reGetProductData);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  const editReview = () => {
    if (myReview === "" || myReview.length < 5) {
      setEditMessage("Please add a valid review and rate the product");
    } else if (myRate === 0) {
      setEditMessage("Please add a valid review and rate the product");
    } else {
      setEditMessage("");

      axios({
        method: "PUT",
        url: `https://e-commerce-app-api-v1.herokuapp.com/api/v1/reviews/${ReviewId}`,
        body: {
          title: myReview,
          ratings: myRate,
        },
        headers: {
          Authorization: `Bearer ${localStorage["token"]}`,
        },
      })
        .then((res) => {
          toggleEditReview();
          let reGetProductData = new Event("reGetProductData");
          document.dispatchEvent(reGetProductData);
        })
        .catch((err) => {
          console.log(err.response);
        });
    }
  };

  const toggleAddReview = () => {
    if (addReviewRef.current.style.display === "none") {
      addReviewRef.current.style.display = "block";
    } else {
      addReviewRef.current.style.display = "none";
      setValue(0);
      setNewReview("");
    }
  };
  const toggleEditReview = () => {
    if (editReviewRef.current.style.display === "none") {
      editReviewRef.current.style.display = "block";
    } else {
      editReviewRef.current.style.display = "none";
    }
  };

  useEffect(() => {
    if (productData.reviews) {
      productData.reviews.map((p) => {
        if (p.user._id === JSON.parse(localStorage["user"]).id) {
          setMyReview(p.title);
          setMyRate(p.ratings);
          setReviewId(p._id);
        }
      });
    }
  }, [productData]);
  return (
    <>
      <div className={`container ${Style.description}`}>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >
          <Tab eventKey="description" title="Description">
            <p>{productData.description}</p>
          </Tab>
          <Tab eventKey="reviews" title="Reviews">
            {productData.reviews &&
              productData.reviews.length > 0 &&
              productData.reviews.map((review) => {
                return (
                  <div key={review._id} className={reviewItem.reviewItem}>
                    <div className={reviewItem.leftSide}>
                      <span className={reviewItem.userName}>
                        {review.user ? review.user.name : "Closed user"}
                      </span>
                      <Rating
                        name="read-only"
                        value={review.ratings}
                        readOnly
                      />
                      <p className={reviewItem.comment}>{review.title}</p>
                      <span>
                        <SvgIcon component={AccessAlarmsIcon} inheritViewBox />{" "}
                        {new Date(review.updatedAt).toDateString()}
                      </span>
                    </div>
                    {review.user &&
                      review.user._id ===
                        JSON.parse(localStorage["user"]).id && (
                        <div className={reviewItem.rightSide}>
                          <div
                            onClick={() => {
                              toggleEditReview();
                            }}
                          >
                            <SvgIcon
                              className="icon"
                              component={EditIcon}
                              inheritViewBox
                            />{" "}
                          </div>
                          <div
                            onClick={() => {
                              deleteReview(review._id);
                            }}
                          >
                            <SvgIcon
                              className="icon"
                              component={DeleteIcon}
                              inheritViewBox
                            />{" "}
                          </div>
                        </div>
                      )}
                  </div>
                );
              })}
            {ReviewId === "" && (
              <button
                onClick={() => toggleAddReview()}
                style={{
                  background: "#cdb6a8",
                  border: "none",
                  color: "#fff",
                  padding: "5px 10px",
                  borderRadius: "5px",
                }}
              >
                Add Review
              </button>
            )}
          </Tab>
        </Tabs>
      </div>
      <div ref={addReviewRef} className={AddRateStyle.addRate}>
        <div className={AddRateStyle.overlay}></div>
        <div className={AddRateStyle.rateBox}>
          <div
            className={AddRateStyle.closeIcon}
            onClick={() => toggleAddReview()}
          >
            <SvgIcon
              className={AddRateStyle.icon}
              component={CloseIcon}
              inheritViewBox
            />
          </div>
          <div className={AddRateStyle.message}>
            {message !== "" && message}
          </div>
          <input
            className={AddRateStyle.input}
            type="text"
            placeholder="add new review"
            value={newReview}
            onChange={(e) => {
              setNewReview(e.target.value);
            }}
          />
          <br />
          <div className={AddRateStyle.rateMessage}>
            Your rating is: {value}
          </div>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
          <br />
          <button
            onClick={() => {
              sendReview();
            }}
            className={AddRateStyle.submit}
          >
            Add review
          </button>
        </div>
      </div>

      <div ref={editReviewRef} className={editRateStyle.editRate}>
        <div className={editRateStyle.overlay}></div>
        <div className={editRateStyle.rateBox}>
          <div
            className={editRateStyle.closeIcon}
            onClick={() => toggleEditReview()}
          >
            <SvgIcon
              className={editRateStyle.icon}
              component={CloseIcon}
              inheritViewBox
            />
          </div>
          <div className={editRateStyle.message}>
            {editMessage !== "" && editMessage}
          </div>
          <input
            className={editRateStyle.input}
            type="text"
            placeholder="Update your review"
            value={myReview}
            onChange={(e) => {
              setMyReview(e.target.value);
            }}
          />
          <br />
          <div className={editRateStyle.rateMessage}>
            Your rating is: {myRate}
          </div>
          <Rating
            name="simple-controlled"
            value={myRate}
            onChange={(event, newValue) => {
              setMyRate(newValue);
            }}
          />
          <br />
          <button
            onClick={() => {
              editReview();
            }}
            className={editRateStyle.submit}
          >
            Edit review
          </button>
        </div>
      </div>
    </>
  );
};

export default Description;
