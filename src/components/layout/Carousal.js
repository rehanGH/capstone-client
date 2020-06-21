import React, { Component } from "react";
import "./style/carousal.css";
import pic from "./pic.png";
export class Carousal extends Component {
  render() {
    return (
      <div>
        <div
          className="container"
          style={{ paddingBottom: "60px", paddingTop: "50px" }}
        >
          <div className="row blog">
            <div className="col-md-12">
              <div
                id="blogCarousel"
                className="carousel slide"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    data-target="#blogCarousel"
                    data-slide-to="0"
                    className="active"
                  ></li>
                  <li data-target="#blogCarousel" data-slide-to="1"></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row">
                      <div className="col-md-3">
                        <a href="#">
                          <img
                            src={pic}
                            alt="Image"
                            style={{
                              maxWidth: "100%",
                              height: "250px",
                              width: "250px",
                            }}
                          />
                        </a>
                      </div>
                      <div className="col-md-3">
                        <a href="#">
                          <img
                            src="https://games.vodacom.co.za/assets/rich/placeholder_games_cover.png"
                            alt="Image"
                            style={{ maxWidth: "100%" }}
                          />
                        </a>
                      </div>
                      <div className="col-md-3">
                        <a href="#">
                          <img
                            src="https://games.vodacom.co.za/assets/rich/placeholder_games_cover.png"
                            alt="Image"
                            style={{ maxWidth: "100%" }}
                          />
                        </a>
                      </div>
                      <div className="col-md-3">
                        <a href="#">
                          <img
                            src="https://games.vodacom.co.za/assets/rich/placeholder_games_cover.png"
                            alt="Image"
                            style={{ maxWidth: "100%" }}
                          />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-md-3">
                        <a href="#">
                          <img
                            src="https://games.vodacom.co.za/assets/rich/placeholder_games_cover.png"
                            alt="Image"
                            style={{ maxWidth: "100%" }}
                          />
                        </a>
                      </div>
                      <div className="col-md-3">
                        <a href="#">
                          <img
                            src="https://games.vodacom.co.za/assets/rich/placeholder_games_cover.png"
                            alt="Image"
                            style={{ maxWidth: "100%" }}
                          />
                        </a>
                      </div>
                      <div className="col-md-3">
                        <a href="#">
                          <img
                            src="https://games.vodacom.co.za/assets/rich/placeholder_games_cover.png"
                            alt="Image"
                            style={{ maxWidth: "100%" }}
                          />
                        </a>
                      </div>
                      <div className="col-md-3">
                        <a href="#">
                          <img
                            src="https://games.vodacom.co.za/assets/rich/placeholder_games_cover.png"
                            alt="Image"
                            style={{ maxWidth: "100%" }}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Carousal;