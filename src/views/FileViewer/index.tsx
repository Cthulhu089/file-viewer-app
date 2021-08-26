import { useMemo } from "react";
import styled from "styled-components/macro";
import DocViewer, {
  PDFRenderer,
  TXTRenderer,
  JPGRenderer,
  MSDocRenderer,
} from "react-doc-viewer";

const StyledDocViewer = styled(DocViewer)`
  #pdf-download {
    display: none;
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
    ],
    []
  );

  return (
    <div className="App">
      <StyledDocViewer
        pluginRenderers={[PDFRenderer, TXTRenderer, JPGRenderer, MSDocRenderer]}
        documents={docs}
        config={{
          header: {},
        }}
      />
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
    </div>
  );
};

export default FileViewerView;
