import React, {useState} from "react";

function ListProduct () {
    const [produk, setProduk] = useState (
        [{Makanan : "Roti", Jumlah : 30}, 
        {Makanan : "Bakpao", Jumlah : 20}
    ])
    console.log(produk);

    return (
        <div>
            <h1>List Products</h1>
            {produk.map(item =>(
                <div>
                <h3>Makanan : <span>{item.Makanan}</span></h3>
                <h3>Jumlah : <span>{item.Jumlah}</span></h3>
                </div>
            ))}
        </div>
    );
}

export default ListProduct;