import React from 'react'
const prezzo = "39"
const img = "https://a71eba0458acf57331d3-d31ce5ebd093935dff8526660841b743.ssl.cf2.rackcdn.com/products/f9322.jpg"
export const Product = () => {
    return (
        <article class="articolo">
            <div className='card'>
                <img src={img} alt="" />
                <h5>10$ Amazon</h5>
                <hr />
                <p>2,18$</p>
                <p style={{
                    color: "red"
                }}>Bamby000</p>
                <p>RIAPRE PRESTO</p>
                <button>
                    {prezzo} $
                </button>
            </div>
        </article>
    )
};

export default Product;
