import Dialog from "@mui/material/Dialog";
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AddNewFile from '@mui/icons-material/CreateNewFolder';
import Stack from '@mui/material/Stack';


const UploadFile = ({filesPageLogic, styles}) => {
    return ( 
        <Dialog
        open={filesPageLogic?.openUploadFile}
        TransitionComponent={filesPageLogic?.DialogTransition}
        keepMounted
        onClose={filesPageLogic?.handleCloseUploadFile}
        aria-describedby="alert-dialog-slide-description">
            <DialogTitle>{"Upload file for reading"}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Upload File to server for others to view anywhere
                </DialogContentText>
                <Stack 
                sx={{
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center"
                }} direction="row" alignItems="center" spacing={2}>
                    <Button variant="contained" component="label">
                        Upload
                        <input 
                        hidden 
                        accept=".txt" 
                        type="file" 
                        onChange={filesPageLogic?.submitFile} />
                    </Button>
                    <IconButton color="primary" component="label">
                        <input 
                        hidden 
                        accept=".txt" 
                        type="file" 
                        onChange={filesPageLogic?.submitFile} />
                        <AddNewFile />
                    </IconButton>
                </Stack>
            </DialogContent>
            <DialogActions>
                <Button 
                onClick={filesPageLogic?.handleCloseUploadFile}>
                    Close
                </Button>
            </DialogActions>
        </Dialog>
     );
}
 
export default UploadFile;