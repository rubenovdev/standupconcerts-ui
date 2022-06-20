import React, { useRef } from 'react'
import { CloseBtn } from '../../Common/UI/CloseBtn'

type Props = {
  active: boolean,
  setActive: (active: boolean) => void,
  fileUpload: (file: File) => void
}

export const ModalUploadImage: React.FC<Props> = ({ active, setActive, fileUpload }) => {
  const fileUploadHandler = (file: File) => {
    fileUpload(file)
    setActive(false)
  }
  const fileInputRef = useRef(null)
  
  const triggerFileInput = () => {
    if (!fileInputRef.current) {
      return
    }

    // @ts-ignore
    fileInputRef.current.click()
  }

  return (
    active ?
      <div className="parMain modal">
        < div className="par" >
          <CloseBtn onClose={() => setActive(false)} />
          <p className="ParTxt1">Загрузить фото</p>
          <p className="ParTxt2" style={{ opacity: 0.3 }}>Чтобы начать загрузку, выберите фото на компьютере</p>
          <button className="parButton" onClick={triggerFileInput}>Выбрать фото</button>
          <input type="file" ref={fileInputRef} onChange={(e) => e.target.files && fileUploadHandler(e.target.files[0])} hidden/>
        </div >
      </div>
      :
      <></>
  )
}
