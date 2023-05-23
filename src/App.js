import React, {useState} from "react";
import {Button, Container} from "react-bootstrap";
import CreateCategory from "./assets/modals/createCategory";
import CreateProduct from "./assets/modals/createProduct";
import CreateProvider from "./assets/modals/createProvider";
import ProductList from "./assets/components/ProductList";

const App = () => {

    const [CategoryVisible, setCategoryVisible] = useState(false)
    const [ProductVisible, setProductVisible] = useState(false)
    const [ProviderVisible, setProviderVisible] = useState(false)

    return (
        <Container className="d-flex flex-column">
            <ProductList/>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setCategoryVisible(true)}
            >
                Добавить категорию
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setProductVisible(true)}
            >
                Добавить товар
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setProviderVisible(true)}
            >
                Добавить поставщика
            </Button>
            <CreateCategory show={CategoryVisible} onHide={() => setCategoryVisible(false)}/>
            <CreateProduct show={ProductVisible} onHide={() => setProductVisible(false)}/>
            <CreateProvider show={ProviderVisible} onHide={() => setProviderVisible(false)}/>
        </Container>
    );
}

export default App;
