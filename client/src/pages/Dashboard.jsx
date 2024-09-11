import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import { createItem } from '../utils/API';

export default function Dashboard() {
    const [userFormData, setUserFormData] = useState({
        name: '',
        description: '',
        price: '',
        category: '',
        image: '',
        era: '',
        era2: ''
    });
    const [validated] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserFormData({ ...userFormData, [name]: value })
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }

        try {
            const response = await createItem(userFormData); // change to postItem

            if (!response.ok) {
                throw new Error('Something went wrong adding an item.');
            }
            console.log(userFormData);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='posted-items col-6 mt-5 border rounded'>
                        <h4 className='text-center'>Items you have posted:</h4>
                    </div>
                    <div className='d-block col-6 mt-5'>
                        <div className="form-container d-flex justify-content-center align-items-center">
                            <div className="bg-white p-3 rounded w-100 border">
                                <h2 className='text-center'>List an Item</h2>
                                <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
                                    <Form.Group className="mb-3">
                                        <Form.Label htmlFor='item-name'>
                                            <strong>Item Name</strong>
                                        </Form.Label>
                                        <Form.Control
                                            type='text'
                                            placeholder='Item Name'
                                            name='name'
                                            onChange={handleInputChange}
                                            className='form-control rounded'
                                            required
                                        />
                                        <Form.Control.Feedback type='invalid'>Item name is required.</Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label htmlFor='item-description'>
                                            <strong>Description</strong>
                                        </Form.Label>
                                        <Form.Control
                                            type='text'
                                            placeholder='Item Description'
                                            name='description'
                                            onChange={handleInputChange}
                                            className='form-control rounded'
                                            required
                                        />
                                        <Form.Control.Feedback type='invalid'>Item description is required.</Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label htmlFor='item-price'>
                                            <strong>Price</strong>
                                        </Form.Label>
                                        <Form.Control
                                            type='text'
                                            placeholder='Price'
                                            name='price'
                                            onChange={handleInputChange}
                                            className='form-control rounded'
                                            required
                                        />
                                        <Form.Control.Feedback type='invalid'>Item price is required.</Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label htmlFor='item-category'>
                                            <strong>Category</strong>
                                        </Form.Label>
                                        <Form.Control
                                            type='text'
                                            placeholder='Category'
                                            name='category'
                                            onChange={handleInputChange}
                                            className='form-control rounded'
                                            required
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label htmlFor='item-image'>
                                            <strong>Image</strong>
                                        </Form.Label>
                                        <Form.Control
                                            type='file'
                                            name='image'
                                            className='form-control rounded'
                                            onChange={handleInputChange}
                                            multiple
                                            required
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3 d-inline">
                                        <Form.Label htmlFor='item-era'>
                                            <strong>Era</strong>
                                        </Form.Label> <br />
                                        <Form.Check
                                            inline
                                            type='radio'
                                            label="1970s"
                                            value='1970s'
                                            name='era'
                                            id='option-70s'
                                        />
                                        <Form.Check
                                            inline
                                            type='radio'
                                            label="1980s"
                                            value='1980s'
                                            name='era'
                                            id='option-80s'
                                        />
                                        <Form.Check
                                            inline
                                            type='radio'
                                            label="1990s"
                                            value='1990s'
                                            name='era'
                                            id='option-90s'
                                        />
                                        <Form.Check
                                            inline
                                            type='radio'
                                            label="2000s"
                                            value='2000s'
                                            name='era'
                                            id='option-00s'
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label htmlFor='item-era2.0'>
                                            <strong>ERA 2.0</strong>
                                        </Form.Label>
                                        <Form.Select name='era2' onChange={handleInputChange}>
                                            <option disabled>Choose an era</option>
                                            <option value='1970s' >1970s</option>
                                            <option value='1980s'>1980s</option>
                                            <option value='1990s'>1990s</option>
                                            <option value='2000s'>2000s</option>
                                        </Form.Select>
                                    </Form.Group>


                                    <Button
                                        type="submit"
                                        variant="primary"
                                        className="btn btn-primary w-100 rounded">
                                        Add Item
                                    </Button>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}