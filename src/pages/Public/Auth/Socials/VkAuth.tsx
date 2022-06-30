import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { loginActions, vkAuth } from '../../../../store/auth/login/actions'

export const VkAuth = () => {
  const [searchParams, _] = useSearchParams()
  const dispatch = useDispatch()

  useEffect(() => {
    if (window.location.hash) {
      const win: Window = window
      win.location = '/socials/vk' + window.location.hash.replace('#', '?');
    }

    const accessToken = searchParams.get("access_token")
    const id = searchParams.get("user_id")
    const email = searchParams.get("email")

    if (accessToken && id && email) {
      dispatch(loginActions.setVkAccessToken(accessToken))
      dispatch(loginActions.setVkEmail(email))
      dispatch(loginActions.setVkId(id))
      dispatch<any>(vkAuth())
    } else {
      alert("Email не привязан к аккаунту")
      window.close()
    }
  }, [])

  return (
    <></>
  )
}
