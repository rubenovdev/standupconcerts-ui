import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { loginActions, yandexAuth } from '../../../../store/auth/login/actions'

export const YandexAuth = () => {
  const [searchParams, _] = useSearchParams()
  const dispatch = useDispatch()

  useEffect(() => {
    if (window.location.hash) {
      const win: Window = window
      win.location = '/socials/yandex' + window.location.hash.replace('#', '?');
    }

    const accessToken = searchParams.get("access_token")

    if (accessToken) {
      dispatch(loginActions.setYandexAccessToken(accessToken))
      dispatch<any>(yandexAuth())
    } else {
      window.close()
    }
  }, [])
  return (
    <div>YandexAuth</div>
  )
}
