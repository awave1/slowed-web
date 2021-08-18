import { useDropzone } from "react-dropzone";
import { useAction } from "@slowed/store/hooks";
import { MAX_FILES } from "@slowed/features/fileUpload/data/constants";
import { useSongReader } from "@slowed/features/musicPlayer/data/hooks/useSongReader";

export function useFileUpload() {
  const addSong = useAction((actions) => actions.addSong);
  const songReader = useSongReader();

  const onDropAccepted = (acceptedFiles: File[]) => {
    const [file] = acceptedFiles;
    songReader(file, () => addSong(file));
  };

  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: MAX_FILES,
    onDropAccepted,
  });

  return {
    props: {
      getRootProps,
      getInputProps,
    },
  };
}
