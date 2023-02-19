import styles from "./styles/styles.module.css";
import Box from "@mui/material/Box";


const Layout = ({children}) => {
	return ( 
		<Box
		className={styles.layout}>
			{children}
		</Box>
	);
}
 
export default Layout;
