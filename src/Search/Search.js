import React from 'react';
import '../Search/Search.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Search = () => {
    return (
        <div className='search-box'>
            <h2 className='text-center text-white pt-5'>Explore Challenges</h2>
            <div className='d-flex'>
                <InputGroup className="mb-3 box">
                    <InputGroup.Text className='bg-white' id="basic-addon1">🔍</InputGroup.Text>
                    <Form.Control
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
                <DropdownButton
                    variant="outline-secondary"
                    title="Filter"
                    id="input-group-dropdown-1"
                >
                    <p className='mx-3'>Status</p>
                    <Dropdown.Item href="#"><Form.Check aria-label="option 1" label="All" /></Dropdown.Item>
                    <Dropdown.Item href="#"><Form.Check aria-label="option 2" label="Active" /></Dropdown.Item>
                    <Dropdown.Item href="#"><Form.Check aria-label="option 3" label="Upcoming" /></Dropdown.Item>
                    <Dropdown.Item href="#"><Form.Check aria-label="option 4" label="Past" /></Dropdown.Item>
                    <br />
                    <p className='mx-3'>Level</p>
                    <Dropdown.Item href="#"><Form.Check aria-label="option 1" label="Easy" /></Dropdown.Item>
                    <Dropdown.Item href="#"><Form.Check aria-label="option 2" label="Medium" /></Dropdown.Item>
                    <Dropdown.Item href="#"><Form.Check aria-label="option 3" label="Hard" /></Dropdown.Item>
                </DropdownButton>
            </div>
        </div>
    );
};

export default Search;