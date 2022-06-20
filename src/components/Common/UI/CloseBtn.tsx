import React from 'react'

const iconClose = require("../../../assets/img/x.png")

type PropsType = {
  onClose: () => void
}

export const CloseBtn: React.FC<PropsType> = ({ onClose }) => {
  return (
    <div onClick={onClose}>
      <img src={iconClose} alt="" />
    </div>
  )
}
