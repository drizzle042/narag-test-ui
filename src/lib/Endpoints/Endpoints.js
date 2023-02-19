const apiUrl = process.env.REACT_APP_API_URL

const Auth = {
    generateToken: `${apiUrl}/auth/`
}

const FileManager = {
    file: `${apiUrl}/file-manager/`
}

const FileReader = {
    readFile: `${apiUrl}/file-reader/`
}

export {
    Auth,
    FileManager,
    FileReader
}