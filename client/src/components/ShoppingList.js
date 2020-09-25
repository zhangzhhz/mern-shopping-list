import React, { useEffect } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../actions';
import PropTypes from 'prop-types';

function ShoppingList(props) {
  useEffect(() => {
    dispatch(actions.itemActions.getItems());
  }, []);

  const items = useSelector(state => state.itemReducer).items;
  const dispatch = useDispatch();

  return (
    <Container>
      <ListGroup>
        <TransitionGroup>
          {items.map(({ id, name }) => (
            <CSSTransition key={id} timeout={500} classNames="fade">
              <ListGroupItem>
                <Button
                  className="remove-btn"
                  color="danger"
                  size="sm"
                  onClick={() => {
                    dispatch(actions.itemActions.deleteItem(id));
                  }}
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