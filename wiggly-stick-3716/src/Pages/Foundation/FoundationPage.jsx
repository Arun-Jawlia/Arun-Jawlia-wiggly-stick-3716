import React from "react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import "./FoundationPage.css";
const FoundationPage=()=>{
    return (
      <div className="main-div">
        <div className="filtering">
          <div className="filterby">
            <p>FILTER BY</p>
            <div className="filter-option">
              <div>Brand</div>
              <div>
                <ChevronRightIcon w={6} h={6} />
              </div>
            </div>
            <div className="filter-option">
              <div>Brand</div>
              <div>
                <ChevronRightIcon w={6} h={6} />
              </div>
            </div>
            <div className="filter-option">
              <div>Brand</div>
              <div>
                <ChevronRightIcon w={6} h={6} />
              </div>
            </div>
            <div className="filter-option">
              <div>Brand</div>
              <div>
                <ChevronRightIcon w={6} h={6} />
              </div>
            </div>
            <div className="filter-option">
              <div>Brand</div>
              <div>
                <ChevronRightIcon w={6} h={6} />
              </div>
            </div>
            <div className="filter-option">
              <div>Brand</div>
              <div>
                <ChevronRightIcon w={6} h={6} />
              </div>
            </div>
            <div className="filter-option">
              <div>Brand</div>
              <div>
                <ChevronRightIcon w={6} h={6} />
              </div>
            </div>
            <div className="filter-option">
              <div>Brand</div>
              <div>
                <ChevronRightIcon w={6} h={6} />
              </div>
            </div>
            <div className="filter-option">
              <div>Brand</div>
              <div>
                <ChevronRightIcon w={6} h={6} />
              </div>
            </div>
            <div className="filter-option">
              <div>Brand</div>
              <div>
                <ChevronRightIcon w={6} h={6} />
              </div>
            </div>
            <div className="filter-option">
              <div>Brand</div>
              <div>
                <ChevronRightIcon w={6} h={6} />
              </div>
            </div>
            <div className="filter-option">
              <div>Brand</div>
              <div>
                <ChevronRightIcon w={6} h={6} />
              </div>
            </div>

          </div>
        </div>
        <div className="product-data-main">
          <div className="sorting">
            <div className="sort">
              <label>SORT:</label>
              <select className="ddlist" value="">
                <option value="">Popularity</option>
                <option value="">Newest</option>
                <option value="">Price :Low to High</option>
                <option value="">Price :High to Low</option>
                <option value="">Discount</option>
              </select>
            </div>
          </div>
          <div className="product-data"></div>
        </div>
      </div>
    );
}

export default FoundationPage;