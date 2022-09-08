import React, { useState } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
  }

  return (
    <Form onSubmit={submitHandler} inline>
    <Row className='pl-5'>
    <Col>
    <Form.Control
      as='select'
      name='q'
      onChange={(e) => {
        setKeyword(e.target.value)
        if (e.target.value !== 'All') {
          history.push(`/search/${e.target.value}`)
        } else {
          history.push('/')
        }
      }}
    >
      {['All', 'Wedding','Parties', 'Funeral', 'Traditional'].map(
        (x,index) => (
          <option key={index} value={x}>
            {x}
          </option>
        )
      )}
    </Form.Control>
    </Col>
  </Row>
    <Form.Control
      type='text'
      name='q'
      onChange={(e) => setKeyword(e.target.value)}
      placeholder='Search...'
      className='mr-sm-2 ml-sm-5'
    ></Form.Control>
    <Button type='submit' variant='primary' className='p-2'>
      Search
    </Button>
    </Form>
  )
}

export default SearchBox
