import Shoes from './../shoes.json';
import { useParams } from 'react-router';

function ProductItem() {
	const { id } = useParams();
	// console.log(id);

    const shoe = Shoes[id]
 
    if(!shoe){
        return <h2>Product not found!</h2>
    }
	return (
		<div>
			<h1>Product Item</h1>

            <div className='link' >
							<h4>{shoe.name}</h4>
							<img src={shoe.img} height={400} alt="shoe"/>
						</div>
		</div>
	);
}

export default ProductItem;
