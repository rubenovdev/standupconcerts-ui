import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import "./assets/style/main.css"

import { PublicView } from './views/Public/Public';
import { CommonFooter } from './components/Common/Footer';
import { PasswordRecovery } from "./pages/Public/Auth/PasswordRecovery";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCurrentUser } from "./store/account/actions";
import { InnerView } from "./views/Inner/Inner";
import { Login } from "./pages/Public/Auth/Login";
import { Registration } from "./pages/Public/Auth/Registration";
import { Index } from "./pages/Public/Index";
import { selectCurrentUserRoles } from "./store/account/selectors";
import { RootStateType } from "./store/rootReducer";
import { CabinetComedianProfile } from "./pages/Inner/Cabinet/Comedian/CabinetComedianProfile";
import { CabinetComedianVideos } from "./pages/Inner/Cabinet/Comedian/CabinetComedianVideos";
import { CabinetUserView } from "./views/Inner/Cabinet/CabinetUser";
import { CabinetComedianView } from "./views/Inner/Cabinet/CabinetComedian";
import { CabinetUserProfile } from "./pages/Inner/Cabinet/User/CabinetUserProfile";
import { CabinetUserSubscriptions } from "./pages/Inner/Cabinet/User/CabinetUserSubscriptions";
import { CabinetUserFavoriteComedians } from "./pages/Inner/Cabinet/User/CabinetUserFavoriteComedians";
import { CabinetUserSavedVideos } from "./pages/Inner/Cabinet/User/CabinetUserSavedVideos";
import { CabinetUserFavoriteConcerts } from "./pages/Inner/Cabinet/User/CabinetUserFavoriteConcerts";
import { Concerts } from "./pages/Public/Concerts/ConcertsAll";
import { Concert } from "./pages/Public/Concerts/Concert";
import { Comedian } from "./pages/Public/Comedian";
function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    console.log("fetch current user")
    dispatch<any>(fetchCurrentUser())
  }, [])

  const state = useSelector((state: RootStateType) => state)
  const user = useSelector((state: RootStateType) => state.accountReducer.user)
  const isAppLoaded = useSelector((state: RootStateType) => state.appReducer.loaded)

  const roles = selectCurrentUserRoles(state)

  return (

    <>
      {isAppLoaded &&
        <>
          <Routes>
            <Route element={<PublicView />}>
              <Route path="/" element={<Index />} />
              {
                !user ?
                  <>
                    <Route path="/login" element={<Login />} />
                    <Route path="/password-recovery" element={<PasswordRecovery />} />
                    <Route path="/registration" element={<Registration />} />
                  </>
                  :
                  <Route path="*" element={<Navigate to="/cabinet" replace />} />
              }
              <Route path="/catalog" element={<Concerts />} />
              <Route path="/catalog/:id" element={<Concert />} />
              <Route path="/comedians/:id" element={<Comedian />} />
            </Route>
            {
              user ?
                <Route element={<InnerView />}>
                  {
                    roles.includes("comedian") ?
                      <Route element={<CabinetComedianView />} path="/cabinet">
                        <Route index element={<CabinetComedianProfile />} />
                        <Route element={<CabinetComedianVideos />} path="videos" />
                      </Route>
                      :
                      <Route element={<CabinetUserView />} path="/cabinet">
                        <Route element={<CabinetUserProfile />} index />
                        <Route element={<CabinetUserSubscriptions />} path="subscriptions" />
                        <Route element={<CabinetUserFavoriteConcerts />} path="favorite-concerts" />
                        <Route element={<CabinetUserFavoriteComedians />} path="favorite-comedians" />
                        <Route element={<CabinetUserSavedVideos />} path="saved-videos" />
                      </Route>
                  }

                </Route>
                :
                <Route path="*" element={<Navigate to="/login" replace />} />
            }
            <Route path="/catalog" element={<Concerts />} />

            {/* <Route path="*" element={<Navigate to="/" replace />} /> */}

          </Routes >
          <CommonFooter />
        </>
      }
    </>
  )
}

export default App;
