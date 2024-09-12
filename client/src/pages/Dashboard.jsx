import { Form, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { postItem, getAllUserItems /* Change to getAllUserItems*/, removeItem } from '../utils/API';

export default function Dashboard() {
    const [userFormData, setUserFormData] = useState({
        name: '',
        description: '',
        price: '',
        category: '',
        imageURL: '',
        era: '',
        // era2: '',
        sellerId: ''
    });
    const [validated] = useState(false);
    const [allItems, setAllItems] = useState([]);
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);

    useEffect(() => {
        itemRetreival();
    }, [])

    const itemRetreival = async (e) => {
        try {
            const response = await getAllUserItems(); // will need to change the name of getAllItems to getAllUserItems
            const items = await response.json();
            console.log(items);
            setAllItems(items);

        } catch (err) {
            console.log(err);
        }
    }


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserFormData({ ...userFormData, [name]: value })
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            setImagePreview(URL.createObjectURL(file));
        }
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }
        const user = JSON.parse(localStorage.getItem('user'));


        try {
            const response = await postItem({ ...userFormData, sellerId: user._id });

            if (!response.ok) {
                throw new Error('Something went wrong adding an item.');
            }
            console.log(userFormData);
            console.log(response);
            itemRetreival();
        } catch (err) {
            console.log(err);
        }
    }

    // Need to work on Delete function
    const handleDeleteItem = (itemId) => {

        console.log('delete');
        try {
            const response = removeItem(itemId);
            console.log(itemId); // Returning undefined - Need to fix          

            if (!response.ok) {
                throw new Error('Something went wrong deleting an item.');
            }
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
                        {allItems.length > 0 && allItems.map((item) => (
                            <div className='d-flex justify-content-center' key={item._id}>
                                <div className='item-card m-2 w-50'>
                                    <div className='item-image'>
                                        <img src={item.imageURL} alt={item.name} />
                                    </div>
                                    <div className='text-center'>
                                        <h5>{item.name}</h5>
                                        <p>{item.description} from the {item.era} era.</p>
                                        <p>{item.price}</p>
                                    </div>
                                    <div className='text-center'>
                                        <button className='btn btn-danger' onClick={() => handleDeleteItem(item._id)}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        )
                        )}
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
                                            name='imageURL'
                                            accept='image/*'
                                            className='form-control rounded'
                                            onChange={handleImageChange}
                                            required
                                        />
                                    </Form.Group>
                                    {imagePreview && (
                                        <div className="text-center my-3">
                                            <img
                                                src={imagePreview}
                                                alt="Image preview"
                                                style={{ maxWidth: '100%', maxHeight: '400px' }}
                                            />
                                        </div>
                                    )}

                                    <Form.Group className="mb-3 d-inline">
                                        <Form.Label htmlFor='item-era'>
                                            <strong>Era</strong>
                                        </Form.Label>
                                        <Form.Control
                                            type='text'
                                            id='item-era'
                                            name='era'
                                            className='form-control rounded'
                                            onChange={handleInputChange}
                                            placeholder='Enter era (70, 80, 90, or 00)'
                                            pattern='70|80|90|00'
                                            required
                                        />
                                    </Form.Group>
                                    <Form.Control.Feedback type='invalid'>
                                        Please enter a valid value: 70, 80, 90, 00.
                                    </Form.Control.Feedback>
                                    {/* <br />
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
                                        /> */}
                                    {/* </Form.Group> */}

                                    {/* <Form.Group className="mb-3">
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
                                    </Form.Group> */}


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