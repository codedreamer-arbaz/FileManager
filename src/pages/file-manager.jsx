import { Helmet } from "react-helmet-async";

import FileManagerView from "src/sections/filemanager/filemanagerview";

export default function FileManager() {
    return (
      <>
        <Helmet>
          <title>FileManager</title>
        </Helmet>
  
        <FileManagerView />
      </>
    );
  }