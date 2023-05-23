import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";

const CreateCategory = ({show, onHide}) => {
    const [nomination, setNomination] = useState('')

        const onAddCategory = async () => {
            const data = {
                nomination,
            }
            await fetch('http://localhost:3001/categories', {
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
                    Добавить категорию
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form>
                    </Form>
                    <Form.Control
                        value={nomination}
                        onChange={(event) => {setNomination(event.target.value)}}
                        placeholder={"Введите название категории"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={onAddCategory}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateCategory;