import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";

const CreateProvider = ({show, onHide}) => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');

    const onAddProvider = async () => {
        const data = {
            name,
            surname,
        }
        await fetch('http://localhost:3001/providers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        onHide();
    }
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить поставщика
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form>
                    </Form>
                    <Form.Control
                        placeholder={"Введите имя поставщика"}
                        value={name}
                        onChange={(event) => {setName(event.target.value)}}
                    />
                    <Form.Control
                        className="mt-4 p-2"
                        placeholder={"Введите фамилию поставщика"}
                        value={surname}
                        onChange={(event) => {setSurname(event.target.value)}}
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

export default CreateProvider;