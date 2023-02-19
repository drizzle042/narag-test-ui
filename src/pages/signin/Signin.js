import styles from "./styles/styles.module.css";
import Layout from "../layout/Layout";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Alert from '@mui/material/Alert';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import CircularProgress from '@mui/material/CircularProgress';
import SigninLogic from "./logic/SigninLogic";

const Signin = () => {
	
	const { signinLogic } = SigninLogic();

	return ( 
		<Layout>
			<Paper
			className={styles.main}
			elevation={0}
			sx={{
				borderRadius: "15px"
			}}>
				{ signinLogic?.SigninLoading && <CircularProgress />}
				<Typography 
				textAlign={"center"}
				paragraph
				sx={{
					fontWeight: "bold"
				}}>
					Enter your access code to use this platform
				</Typography>
				<TextField
				className={styles.codeInput}
				sx={{
					margin: "10px", 
					padding: "5px",
				}}
				variant="standard"
				placeholder="Code"
				value={signinLogic?.code}
				onChange={(e) => signinLogic?.setCode(e?.target?.value)}
				InputProps={{
					startAdornment: <QrCode2Icon />,
					disableUnderline: true,
					classes: {
						input: styles.input,
					}
				}}/>
				<Button 
				className={styles.button}
				sx={{
					textTransform: "none"
				}}
				variant="contained"
				onClick={
					() => signinLogic?.PostSignin(
						JSON.stringify({code: signinLogic?.code})
					)
				}>Submit</Button>
			</Paper>
			<Snackbar 
			open={signinLogic?.SigninMessage?.message ?  true : false} 
			autoHideDuration={3000}>
				{ signinLogic?.SigninMessage?.message && 
					<Alert severity={signinLogic?.SigninMessageSeverity} sx={{ width: '100%' }}>
						{signinLogic?.SigninMessage?.message}
					</Alert>
				}
			</Snackbar>
			<Snackbar 
			open={signinLogic?.SigninMessage?.data ?  true : false} 
			autoHideDuration={3000}>
				{ signinLogic?.SigninMessage?.data && 
					<Alert severity={signinLogic?.SigninMessageSeverity} sx={{ width: '100%' }}>
						{signinLogic?.SigninMessage?.status}
					</Alert>
				}
			</Snackbar>
		</Layout>
	);
}
 
export default Signin;