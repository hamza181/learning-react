import Shoes from './../shoes.json';
import { Link } from 'react-router-dom';

function Product() {
	console.log(Shoes);

	// sari keys le kar ae ga object ki, key means its name
	// console.log(Object.keys(Shoes));
	return (
		<div>
			<h1>Product</h1>
			<div className="productContainer">
				{Object.keys(Shoes).map((keyName) => {
					const shoe = Shoes[keyName];
					return (
						<Link key={keyName} className='link' to={`/product/${keyName}`}>
							<h4>{shoe.name}</h4>
							<img src={shoe.img} height={150}  alt="shoe"/>
						</Link>
					);
				})}
			</div>
		</div>
	);
}

export default Product;
