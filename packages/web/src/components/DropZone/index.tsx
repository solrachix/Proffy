import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { FiUpload } from 'react-icons/fi'

import { Container, P } from './styles'

interface Props{
  text?: string;
  onFileUploaded: (file: File) => void;
}

const DropZone: React.FC<Props> = ({ onFileUploaded, text }) => {
  const [selectedFileUrl, setSelectedFileUrl] = useState('')

  const onDrop = useCallback(acceptedFiles => {
    // Como so terá um arquivo, a imagem sempre estará na pos 0
    const file = acceptedFiles[0]

    const fileUrl = URL.createObjectURL(file)
    setSelectedFileUrl(fileUrl)
    onFileUploaded(file)
  }, [onFileUploaded])

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'video/*' // Somente aceita videos
  })

  return (
    <Container {...getRootProps()} >
      <input {...getInputProps()} accept="video/*" />

      {selectedFileUrl
        ? <video src={selectedFileUrl} />
        : (
          <P>
            <FiUpload />
            {text}
          </P>
        )
      }

    </Container>
  )
}

export default DropZone
