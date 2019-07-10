import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import 'bootstrap-css-only/css/bootstrap.min.css';
export default function Displayshopitem(props) {
    const { productImage, productName, _id, fullPrice } = props.movie
    function changeMessage() {
        Router.push({
            pathname: '/Shop/post',
            query: {
                name: productName
            },
        })
    }
    // function HandleCart(){
    //     Router.push({
    //         pathname: '/add-to-cart/',
    //         query: {    name:productName
    //                 },
    //       }) 
    // }

    function addCart() {
        var oldItems = JSON.parse(localStorage.getItem('order')) || [];
        const newData = {
            productName: props.movie.productName,
            fullPrice: props.movie.fullPrice,


        }
        oldItems.push(newData);
        localStorage.setItem('order', JSON.stringify(oldItems));
    }
    return (
        <div class="col-lg-3 col-md-5 mb-3" key={productName}>
            <div class="card h-80">
                <Link >
                    <a>
                        <img onClick={changeMessage} class="card-img-top img-for-shopcard" src={productImage} alt="" />
                    </a>
                </Link>
                <div class="card-footer">
                    <h4 class="card-title" >
                        <a onClick={changeMessage}>
                            {productName}
                        </a>
                    </h4>
                    <h5>{fullPrice}</h5>
                    {/* <a onClick={HandleCart} class="btn btn-success pull-right" role="button">  */}
                    <a onClick={addCart} class="btn btn-success pull-right" role="button">
                        <i class="fa fa-cart-plus"></i> add cart
                        </a>
                </div>
            </div>
        </div>
    );
}