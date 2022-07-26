import React from 'react'
import { Dialog, DialogOverlay, DialogContent } from "@reach/dialog";
import "@reach/dialog/styles.css";

function Register(props) {
  const [showDialog, setShowDialog] = React.useState(true);
  const close = () => setShowDialog(false);

  return (
    <Dialog isOpen={showDialog}>
      <p>{props.text}</p>
      <button onClick={close}>Okay</button>
    </Dialog>
  )
}

export default Register