import { Howl } from "howler";
import { useDropzone } from "react-dropzone";
import { useAction } from "@slowed/store/hooks";
import { MAX_FILES } from "@slowed/features/fileUpload/data/constants";

export function useFileUpload() {
  const setCurrentSong = useAction((actions) => actions.setCurrentSong);
  const setCurrentSound = useAction((actions) => actions.setCurrentSound);
  const addSong = useAction((actions) => actions.addSong);

  const onFileLoaded = (file: File) => {
    setCurrentSong(file);
    addSong(file);

    // https://github.com/Tonejs/Tone.js#effects

    // TODO: uglyyyyyyyyyyyyyyyyyyy
    const fileReader = new FileReader();
    fileReader.addEventListener("load", () => {
      const { result } = fileReader;
      setCurrentSound(
        new Howl({
          src: result as string,
          format: [file.name.split(".").pop()?.toLowerCase() ?? "mp3"],
          rate: 0.9, // TODO: set this somehow
        })
      );
    });
    fileReader.readAsDataURL(file);
  };

  const onDropAccepted = (acceptedFiles: File[]) => {
    const [file] = acceptedFiles;
    onFileLoaded(file);
  };

  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: MAX_FILES,
    onDropAccepted,
  });

  return {
    operations: {
      getRootProps,
      getInputProps,
    },
  };
}
