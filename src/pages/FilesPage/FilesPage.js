import styles from "./styles/style.module.css";
import Layout from "../layout/Layout";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Snackbar from "@mui/material/Snackbar";
import Alert from '@mui/material/Alert';
import AddNewFile from '@mui/icons-material/CreateNewFolder';
import UploadFile from "./files/UploadFile";
import FilesPageLogic from "./logic/FilesPageLogic";


const FilesPage = () => {

    const { filesPageLogic } = FilesPageLogic();

    return ( 
        <Layout>
            <Paper
            className={styles.main}
            elevation={0}
            sx={{
                borderRadius: "15px"
            }}>
                <div className={styles.fileSection}>
                    <TextField
                    select
                    label="Select File to Read"
                    className={styles.selectInput}
                    sx={{
                        minWidth: "250px"
                    }}
                    value={filesPageLogic?.fileSelected}
                    onChange={(e) => {
                        filesPageLogic?.setFileSelected(e?.target?.value)
                    }}>
                        {
                            filesPageLogic?.FilesData?.data &&
                            filesPageLogic?.FilesData?.data?.map((file) => (
                                <MenuItem key={file.id} value={file.id}>{file.name}</MenuItem>
                            ))
                        }
                    </TextField>
                    <AddNewFile
                    color="primary"
                    fontSize="large"
                    style={{cursor: "pointer", margin: '10px'}}
                    onClick={filesPageLogic?.handleOpenUploadFile} />
                </div>
                <TextField
                sx={{
                    minWidth: "300px",
                    margin: "5px"
                }}
                value={filesPageLogic?.lineInput}
                onInput={(e) => {
                    filesPageLogic?.setLineInput(e?.target?.value)
                    filesPageLogic?.setQueryParams({
                        id: filesPageLogic?.fileSelected,
                        read_line: e?.target?.value
                    })
                }}/>
                {
                    filesPageLogic?.ReadFilesData?.data &&
                    <code className={styles.output}>
                        {filesPageLogic?.ReadFilesData?.data}
                    </code>
                }
            </Paper>
            <UploadFile filesPageLogic={filesPageLogic} styles={styles}/>
			<Snackbar 
			open={filesPageLogic?.SigninMessage?.message ?  true : false} 
			autoHideDuration={3000}>
				{ filesPageLogic?.SigninMessage?.message && 
					<Alert severity={filesPageLogic?.SigninMessageSeverity} sx={{ width: '100%' }}>
						{filesPageLogic?.SigninMessage?.message}
					</Alert>
				}
			</Snackbar>
			<Snackbar 
			open={filesPageLogic?.SigninMessage?.data ?  true : false} 
			autoHideDuration={3000}>
				{ filesPageLogic?.SigninMessage?.data && 
					<Alert severity={filesPageLogic?.SigninMessageSeverity} sx={{ width: '100%' }}>
						{filesPageLogic?.SigninMessage?.status}
					</Alert>
				}
			</Snackbar>
        </Layout>
    );
}
 
export default FilesPage;