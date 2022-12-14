import { Image } from 'phosphor-react';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone'
import Text from '../Text';

interface DropzoneProps {
    onFileUploaded: (file: File) => void;
}

function Dropzone({onFileUploaded}: DropzoneProps) {
    const [selectedFileUrl, setSelectedFileUrl] = useState('');

    const onDrop = useCallback((acceptedFiles: any) => {
        const file = acceptedFiles[0];

        const fileUrl = URL.createObjectURL(file);

        setSelectedFileUrl(fileUrl);
        onFileUploaded(file);
      }, [onFileUploaded]);

      const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
    
      return (
        <div className='flex flex-row mt-4' {...getRootProps()}>
          <input {...getInputProps()} />

           {selectedFileUrl ? (
            <img src={selectedFileUrl} alt="Foto" />
           ) : (
            <p className='flex items-center gap-2'>
                <Image size={32} weight="thin" />
                <Text>Arraste ou clique para selecionar a imagen</Text>
            </p>
           )} 
        </div>
      )
}

export default Dropzone;