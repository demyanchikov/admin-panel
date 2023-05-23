import React, {useEffect, useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";

const CreateProduct = ({show, onHide}) => {
    const [categories, setCategories] = useState([])
    const [providers, setProviders] = useState([])
    const [nominations, setNominations] = useState([])
    const [descriptions, setDescriptions] = useState([])
    const [prices, setPrices] = useState([])
    const [periods, setPeriods] = useState([])
    const [countries, setCountries] = useState([])

    const [provider, setProvider] = useState('');
    const [category, setCategory] = useState('');

    const onAddProvider = async () => {
        const data = {
            nominations,
            descriptions,
            prices,
            periods,
            countries,
            provider,
            category,
        }
        fetch('http://localhost:3001/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        onHide();
    }

    async function fetchCategories() {
        let res = await fetch('http://localhost:3001/categories', {
            headers: {
                'Content-type': 'application/json',
            }
        });
        res = await res.json();
        setCategories(res.categories);
    }

    useEffect(() => {
        fetchCategories();
    }, [])

    async function fetchProviders() {
        let res = await fetch('http://localhost:3001/providers', {
            headers: {
                'Content-type': 'application/json',
            }
        });
        res = await res.json();
        setProviders(res.providers);
    }

    useEffect(() => {
        fetchProviders();
    }, [])

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить товар
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form>
                        <Form.Select className={"mb-4"} onChange={event => {
                            setCategory(event.target.value)
                        }}>
                            <option selected disabled>Категории</option>
                            {categories.map(c => (
                                <option value={c.id}>{c.nomination}</option>
                            ))}
                        </Form.Select>
                    </Form>
                    <Form>
                        <Form.Select className={"mb-4"} onChange={event => {
                            setProvider(event.target.value)
                        }}>
                            <option selected disabled>Поставщики</option>
                            {providers.map(p => (
                                <option value={p.id}>{p.surname} {p.name}</option>
                            ))}
                        </Form.Select>
                    </Form>
                    <Form.Control
                        className="mt-4 p-2"
                        placeholder={"Введите название товара"}
                        value={nominations}
                        onChange={(e) => {
                            setNominations(e.target.value)
                        }}
                    />
                    <Form.Control
                        className="mt-4 p-2"
                        placeholder={"Введите описание товара"}
                        value={descriptions}
                        onChange={(e) => {
                            setDescriptions(e.target.value)
                        }}
                    />
                    <Form.Control
                        className="mt-4 p-2"
                        placeholder={"Введите цену товара"}
                        value={prices}
                        onChange={(e) => {
                            setPrices(e.target.value)
                        }}
                    />
                    <Form.Control
                        className="mt-4 p-2"
                        placeholder={"Введите период действия товара"}
                        value={periods}
                        onChange={(e) => {
                            setPeriods(e.target.value)
                        }}
                    />
                    <Form.Control
                        className="mt-4 p-2"
                        placeholder={"Введите страну-производителя товара"}
                        value={countries}
                        onChange={(e) => {
                            setCountries(e.target.value)
                        }}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={onAddProvider}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateProduct;