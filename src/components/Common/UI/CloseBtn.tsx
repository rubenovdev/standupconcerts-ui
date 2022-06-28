import React from 'react'

const iconClose = require("../../../assets/img/x.png")

type PropsType = {
  onClose: () => void
  classes?: string 
}

export const CloseBtn: React.FC<PropsType> = ({ classes, onClose }) => {
  return (
    <img onClick={onClose} className={classes} src={iconClose} alt="" />
  )
}
