import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';

export default function Dashboard() {
    const [userFormData, setUserFormData] = useState({
        name: '',
        description: '',
        price: '',
        category: '',
        image: '',
        era: ''
    });

    return (
        <>
            <div className='posted-items'>
                Items you have posted:
            </div>
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="bg-white p-3 rounded w-25 border">
                    <h2>List an Item</h2>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor='item-name'>
                                <strong>Item Name</strong>
                            </Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Item Name'
                                name='name'
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
                                multiple
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label htmlFor='item-era'>
                                <strong>Era</strong>
                            </Form.Label>
                            <Form.Select>
                                <option disabled>Choose an era</option>
                                <option value='1970s'>1970's</option>
                                <option value='1980s'>1980's</option>
                                <option value='1990s'>1990's</option>
                                <option value='2000s'>2000's</option>
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
        </>
    )
}