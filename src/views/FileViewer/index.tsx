import { useEffect, useMemo } from "react";
import styled from "styled-components/macro";
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";

const StyledDocViewer = styled(DocViewer)`
  #pdf-download {
    display: none;
  }

  #proxy-renderer {
    user-select: none;
  }
`;

const FileViewerView = () => {
  const docs = useMemo(
    () => [
      {
        uri: "./dummy.pdf",
      },
      {
        uri: "./Untitled.ppt",
      },
      {
        uri: "./noteTest.txt",
      },
      {
        uri: "./image1.jpg",
      },
      {
        uri: "./index.png",
      },
    ],
    []
  );

  useEffect(() => {
    const docContainer = document.getElementById("proxy-renderer");
    if (docContainer) {
      docContainer.addEventListener("contextmenu", (e) => e.preventDefault());
    }
  }, []);

  return (
    <div className="App">
      <StyledDocViewer pluginRenderers={DocViewerRenderers} documents={docs} />
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
    </div>
  );
};

export default FileViewerView;
