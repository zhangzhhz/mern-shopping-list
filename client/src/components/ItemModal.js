import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../actions';

export default function ItemModal() {
  const items = useSelector(state => state.itemReducer).items;
  const dispatch = useDispatch();
  const [isModal, setIsModal] = useState(false);
  const [name, setName] = useState('');

  const toggle = () => {
    setIsModal(isModal => !isModal);
  };

  const onChange = e => {
    setName(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    dispatch(actions.itemActions.addItem(name));
    toggle();
  };

  return (
    <div>
      <Button
        color='dark'
        style={{marginBottom: '2rem'}}
        onClick={toggle}
      >Add Item</Button>
      <Modal
        isOpen={isModal}
        toggle={toggle}
      >
        <ModalHeader
          toggle={toggle}
        >
          Add to Shopping List
        </ModalHeader>
        <ModalBody>
          <Form
            onSubmit={onSubmit}
          >
            <FormGroup>
              <Label for="item">
                Item
              </Label>
              <Input
                type='text'
                name='name'
                id='item'
                placeholder='Add shopping item'
                value={name}
                onChange={onChange}
              />
              <Button
                color='dark'
                style={{marginTop: '2rem'}}
                block
              >
                Add Item
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
  
};