import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Badge, { badgeClasses } from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import useGhazzal from '../../Hooks/useGhazzal';
import { Link } from 'react-router';

const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;

export default function Cart() {
    const {cart} = useGhazzal()
    
  return (
    <IconButton >
      <Link to={'/cart'}>
        <ShoppingCartIcon fontSize="small"  className='text-white' />
        <CartBadge badgeContent={cart.length} color='success' overlap="circular" />
      </Link>
    </IconButton>
  );
}