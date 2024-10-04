import React from 'react'
import './categories.scss'
import { Link } from 'react-router-dom'
const Categories = () => {
  return (
    <div className='categories'>
      <div className="col">
        <div className="row">
            <img src="https://previews.123rf.com/images/varijanta/varijanta1605/varijanta160500044/56755965-thin-line-flat-design-banner-for-sale-web-page-shopping-e-commerce-discounts-and-clearance-sale.jpg" alt="" />
            <button>
                <Link className='link' to="/products/1">Sale</Link>
            </button>
        </div>
        <div className="row">
            <img src="https://zigverve.com/wp-content/uploads/2020/03/Women-Accessories-Featured-Image.jpg" alt="" />
            <button>
                <Link className='link' to="/products/1">Accessories</Link>
            </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
            <img src="https://m.media-amazon.com/images/I/51QONpnC5ZL._AC_UF350,350_QL80_.jpg" alt="" />
            <button>
                <Link className='link' to="/products/1">New Season</Link>
            </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
            <div className="col">
                <div className="row">
                    <img src="https://img.freepik.com/free-photo/cute-woman-bright-hat-purple-blouse-is-leaning-stand-with-dresses-posing-with-package-isolated-background_197531-17610.jpg" alt="" />
            <button>
                <Link className='link' to="/products/1">Women</Link>
            </button>
                </div>
            </div>
            <div className="col">
                <div className="row">
                <img src="https://media.istockphoto.com/id/626085868/photo/mens-accessories.webp?b=1&s=170667a&w=0&k=20&c=EHt5OBGhlIr7X1Yo24B9GQHI-BSg2Y_xtzB_rz4ZIGo=" alt="" />
                <button>
                    <Link className='link' to="/products/1">Men</Link>
                </button>
                </div>
            </div>
        </div>
        <div className="row">
            <img src="https://i0.wp.com/michiganmamanews.com/wp-content/uploads/2018/01/capture2.png?ssl=1" alt="" />
            <button>
                <Link className='link' to="/products/1">Kids</Link>
            </button>
        </div>
      </div>
    </div>
  )
}

export default Categories
