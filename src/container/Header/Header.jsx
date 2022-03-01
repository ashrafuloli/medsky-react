import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {images} from '../../constants'
import {Col, Container, Row} from "react-bootstrap";
import {MdSearch, MdShoppingBasket, MdOutlineAccountCircle} from "react-icons/md";
import navMenu from "../../components/data/navMenu";
import Cart from "../../components/Cart/Cart";
import useAppContext from "../../hooks/useAppContext";

const Header = () => {
    const {cart} = useAppContext().useProduct;
    const [openCart, setOpenCart] = useState(false);

    const handlerOpenCart = () => {
        setOpenCart(true)
        console.log(openCart)
    }

    const handlerCloseCart = () => {
        setOpenCart(false)
        console.log(openCart)
    }

    return (
        <>
            <div className="header-area">
                <Container fluid>
                    <Row className="align-items-center">
                        <Col xl={3}>
                            <div className="logo">
                                <Link to="/">
                                    <img src={images.logo} alt="logo"/>
                                </Link>
                            </div>
                        </Col>
                        <Col xl={6} className="text-center">
                            <div className="main-menu">
                                <ul>
                                    {
                                        navMenu.map((item, key) => (
                                            <li key={key}>
                                                <Link to={item.link}>{item.title}</Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </Col>
                        <Col xl={3} className="text-end">
                            <div className="attr-menu">
                                <button onClick={handlerOpenCart}><MdShoppingBasket/></button>
                                <button><MdSearch/></button>
                                <button>
                                    <MdOutlineAccountCircle/> <span>Ashraful Oli</span>
                                </button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Cart cart={cart} handlerCloseCart={handlerCloseCart} cartStatus={openCart}/>
        </>
    );
};

export default Header;
