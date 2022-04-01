import { useCSVReader } from "react-papaparse";
import styles from "./CsvReader.module.scss";
import { MdOutlineDeleteForever as Trash } from "react-icons/md";
import { MdOutlineUpload as Upload } from "react-icons/md";

export default function CSVReader() {
  const { CSVReader } = useCSVReader();

  return (
    <CSVReader
      onUploadAccepted={(results) => {
        console.log("---------------------------");
        console.log(results);
        console.log("---------------------------");
      }}
    >
      {({ getRootProps, acceptedFile, ProgressBar, getRemoveFileProps }) => (
        <>
          <div className={styles.csvReader}>
            <div className={styles.buttons}>
              <button
                type="button"
                {...getRootProps()}
                className={styles.browseFile}
              >
                <Upload /> Subir Arquivo CSV
              </button>

              <button {...getRemoveFileProps()} className={styles.remove}>
                <Trash /> <span className={styles.removeText}>Deletar</span>
              </button>
            </div>
            <div className={styles.acceptedFile}>
              {acceptedFile
                ? acceptedFile.name
                : "O título do seu arquivo aparecerá aqui"}
            </div>
          </div>
          <ProgressBar className={styles.progressBarBackgroundColor} />
        </>
      )}
    </CSVReader>
  );
}