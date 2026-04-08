import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Badge, { badgeClasses } from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import useGhazzal from '../../Hooks/useGhazzal';

const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;

export default function Cart() {
    const {cart ,setCart} = useGhazzal()
    
  return (
    <IconButton onClick={()=> setCart(Number(cart) + 1)}>
      <ShoppingCartIcon fontSize="small"  className='text-white' />
      <CartBadge badgeContent={cart}  color='success' overlap="circular" />
    </IconButton>
  );
}