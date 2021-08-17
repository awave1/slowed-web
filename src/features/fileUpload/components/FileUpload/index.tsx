import React from "react";
import {
  FileUploadWrapper,
  InputContainer,
  UploadText,
} from "@slowed/features/fileUpload/components/FileUpload/styles.css";
import { useFileUpload } from "@slowed/features/fileUpload/components/FileUpload/useFileUpload";

export const FileUpload = () => {
  const { props } = useFileUpload();

  return (
    <div className={FileUploadWrapper}>
      <div className={InputContainer} {...props.getRootProps()}>
        <input {...props.getInputProps()} />
        <p className={UploadText}>Drop an audio file here or click to add</p>
      </div>
    </div>
  );
};
