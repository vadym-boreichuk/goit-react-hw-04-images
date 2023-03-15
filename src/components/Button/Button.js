import propTypes from 'prop-types';
import { Button } from './ Button.styled';

export const LoadMore = ({ onClick }) => {
  return (
    <Button onClick={onClick} type="button">
      Load more
    </Button>
  );
};

LoadMore.propTypes = {
  onClick: propTypes.func.isRequired,
};
