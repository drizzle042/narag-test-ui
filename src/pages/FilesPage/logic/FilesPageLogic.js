import { useState, useEffect, forwardRef } from "react";
import Slide from '@mui/material/Slide';
import { FileManager, FileReader } from "../../../lib/Endpoints/Endpoints";
import useFetch from "../../../lib/Requests/useFetch";
import usePost from "../../../lib/Requests/usePost";


const FilesPageLogic = () => {

    /*************Accessories****************/
    const [fileSelected, setFileSelected] = useState('')
    const [lineInput, setLineInput] = useState('')
    const [queryParams, setQueryParams] = useState({
        id: fileSelected,
        read_line: lineInput
    })
    const [openUploadFile, setOpenUploadFile] = useState(false);
    const handleOpenUploadFile = () => {
        setOpenUploadFile(true);
    }
    const handleCloseUploadFile = () => {
        setOpenUploadFile(false);
    };
    const DialogTransition = forwardRef(function Transition(props, ref) {
      return <Slide direction="up" ref={ref} {...props} />;
    });

    /*************Network requests****************/
    const {
        data: FilesData,
        isLoading: FilesDataIsLoading,
        error: FetchFilesDataError,
        fetchData: FetchFilesData
    } = useFetch(FileManager.file)

    const {
        postFunc: PostFile,
        isLoading: FilePostIsLoading,
        message: FilePostMessage,
        messageSeverity: FilePostMessageSeverity
    } = usePost(FileManager.file)
    
    const {
        data: ReadFilesData,
        error: ReadFileError,
        queryData: ReadFile
    } = useFetch(`${FileReader.readFile}?`)

    useEffect(() => {
        ReadFile(queryParams)
    // eslint-disable-next-line
    }, [queryParams])

    const postFileSideEffect = () => {
        handleCloseUploadFile()
        FetchFilesData()
    }

    const submitFile = (e) => {
        const formData = new FormData()
        formData.set('name', e?.target?.files[0].name)
        formData.set('file', e?.target?.files[0])

        PostFile(
            formData, 
            postFileSideEffect, 
            'POST', 
            'multipart/form-data'
        )
    }


    const filesPageLogic = {
        fileSelected,
        setFileSelected,
        lineInput,
        setLineInput,
        setQueryParams,
        openUploadFile,
        handleOpenUploadFile,
        handleCloseUploadFile,
        DialogTransition,
        FilesData,
        FilesDataIsLoading,
        FetchFilesDataError,
        FilePostIsLoading,
        FilePostMessage,
        FilePostMessageSeverity,
        submitFile,
        ReadFilesData,
        ReadFileError,
    }

    return ({filesPageLogic});
}
 
export default FilesPageLogic;