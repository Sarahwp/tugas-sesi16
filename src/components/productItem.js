import ListProduct from "./listProducts";

function ProductItem ({produk}) {


    return(
        <div>
            <ListProduct produk ={produk} />
        </div>
    )
}

export default ProductItem;