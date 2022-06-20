import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootStateType } from '../../../store/rootReducer'
import { sidepanelActions } from '../../../store/sidepanel/actions'
const iconBurgerRect1 = require("../../../assets/img/rect1.png")
const iconBurgerRect2 = require("../../../assets/img/rect2.png")
const iconBurgerRect3 = require("../../../assets/img/rect3.png")

export const Burger = () => {
  const dispatch = useDispatch()
  const { isOpened } = useSelector((state: RootStateType) => state.sidepanelReducer)

  return (
    <div className="burger" onClick={() => dispatch(sidepanelActions.setIsOpened(!isOpened))}>
      <img src={iconBurgerRect1} alt="" />
      <img src={iconBurgerRect2} alt="" />
      <img src={iconBurgerRect3} alt="" />
    </div>
  )
}
