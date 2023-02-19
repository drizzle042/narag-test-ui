import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Auth } from "../../../lib/Endpoints/Endpoints";
import usePost from "../../../lib/Requests/usePost";


const SigninLogic = () => {
    /*************Accessories***************/
	const [code, setCode] = useState('')

    /*************Network requests***************/
	const { 
		message: SigninMessage, 
		messageSeverity: SigninMessageSeverity, 
		postFunc: PostSignin,
		isLoading: SigninLoading 
	} = usePost(Auth.generateToken)

    /*************Network SideEffects************/
	const navigate = useNavigate()

	useEffect(() => {
		if (SigninMessage?.data?.authToken) {
			localStorage.setItem(
				"authToken", SigninMessage?.data?.authToken
				)
			navigate("/file-management")
		}
	// eslint-disable-next-line
	}, [SigninMessage])

    const signinLogic = {
        code,
        setCode,
        SigninMessage, 
        SigninMessageSeverity, 
        PostSignin,
        SigninLoading
    }

    return ({signinLogic})
}

export default SigninLogic;