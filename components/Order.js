import Link from "next/link";


const Order = ({ pizza }) => {
  console.log(pizza.topping)
  return (
    <div className="container order">
      <h2>Thank you for your order :)</h2>
      <p>You ordered a {pizza.base} pizza with:</p>
      {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}

      <Link href='/' >
       <h2>
       Go Back
       </h2>
      </Link>
    </div>
  )
}

export default Order;