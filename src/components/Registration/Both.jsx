
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Login from '../Registration/SingIn';
import { useContext, useState } from 'react';
import SingUp from '../Registration/SingUp';
import AuthContext from '../../contex/AuthContext';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  border:0,
  bgcolor: 'white',
  borderRadius: 1 
  

};

export default function Registration() {
  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [change, setChange] = useState(false)
  const user = useContext(AuthContext);

  const handleCard = () => {
    !change?setChange(true):setChange(false)
    !user.message ? handleClose() : handleOpen()
    window.location.reload();
  }

  return (
    <div className='mr-2'>
      <Button style={{color:"white"}} onClick={handleOpen}>Login</Button>
      <Modal
       
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          
          <Box sx={style}>
            
            {!change && <Login handleCard={handleCard}/>}
            {change && <SingUp handleCard={ handleCard}/>}
            
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
