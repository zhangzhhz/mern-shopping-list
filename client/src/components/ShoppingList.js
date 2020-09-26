import React, { useEffect } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import actions from '../actions';
import PropTypes from 'prop-types';

function ShoppingList(props) {
  const items = useSelector(state => state.itemReducer).items;
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      dispatch(actions.itemActions.setItemsLoading());
      const res = await axios.get('/api/items');
      dispatch(actions.itemActions.getItems(res.data));
    };
    fetchData();
  }, []);

  const onDelete = async (id) => {
    const res = await axios.delete(`/api/items/${id}`);
    if (res.data.success) {
      dispatch(actions.itemActions.deleteItem(id));
    }
  }

  return (
    <Container>
      <ListGroup>
        <TransitionGroup>
          {items.map(({ _id, name }) => (
            <CSSTransition key={_id} timeout={500} classNames="fade">
              <ListGroupItem>
                <Button
                  className="remove-btn"
                  color="danger"
                  size="sm"
                  onClick={() => onDelete(_id)}
                >&times;</Button>
                {name}
              </ListGroupItem>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ListGroup>
    </Container>
  );
}

ShoppingList.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
};

export default ShoppingList;