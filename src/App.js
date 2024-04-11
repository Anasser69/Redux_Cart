import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import {useSelector,useDispatch} from 'react-redux'
import {clacTotals,getCartItems} from './features/cart/Cartslice'
import { useEffect } from "react";
import Modal from "./components/Modal";
function App() {
  const dispatch = useDispatch();
  const {cartItems,isLoading}= useSelector((storee)=> storee.cart);
  const {isOpen}= useSelector((storee)=> storee.modal);

  useEffect(()=>{
    dispatch(clacTotals())
  },[cartItems])


  useEffect(()=>{
dispatch(getCartItems())
  },[])

  if(isLoading){
    return <div className="loading">
      <h1>Loading ....</h1>
    </div>
  }

  return(
    <main>
      {isOpen &&  <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
