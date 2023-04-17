import React, { ReactNode, useEffect } from 'react'
import { useState } from 'react'
import menuAside from '../menuAside'
import AsideMenu from '../components/AsideMenu'
import NavBar from '../components/NavBar'
import { useAppSelector,useAppDispatch } from '../stores/hooks'
import menuNavBar from '../menuNavBar'
import { useRouter } from 'next/router'
import NavBarItemPlain from '../components/NavBarItemPlain'
import { mdiBackburger, mdiForwardburger,mdiMenu } from '@mdi/js'
import BaseIcon from '../components/BaseIcon'
import Image from 'next/image'
type Props = {
  children: ReactNode
}

export default function LayoutAuthenticated({ children }: Props) {
  
    
  const darkMode = useAppSelector((state) => state.style.darkMode)

  const [isAsideMobileExpanded, setIsAsideMobileExpanded] = useState(false)
  const [isAsideLgActive, setIsAsideLgActive] = useState(false)

  const router = useRouter()

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setIsAsideMobileExpanded(false)
      setIsAsideLgActive(false)
    }

    router.events.on('routeChangeStart', handleRouteChangeStart) 

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart)
    }
  }, [router.events])

  const layoutAsidePadding = 'xl:pl-60'

  return (
    <div className={`${darkMode ? 'dark' : ''} overflow-hidden lg:overflow-visible`}>
      <div
        className={`${layoutAsidePadding} ${
          isAsideMobileExpanded ? 'ml-60 lg:ml-0' : ''
        } pt-14 min-h-screen w-screen transition-position lg:w-auto bg-gray-50 dark:bg-slate-800 dark:text-slate-100`}
      >
        <div className="relative">
          <div className="ml-96 sticky top-0">
            
            <Image
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxEHEhIUERIUEBEWEA8PGBUTGA8QEA8SFh0WFhUYGRgYHSggGBomGxYWITEhJiorLi4uFx82ODMsNygtLisBCgoKDg0OGxAQGy0lHx0tKystLy0rLS03LjcrLSsrKystKy0tLS0tNystLS0tLS0rLSstLS0tLS0tLS0rLS0tLf/AABEIAMgAyAMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAYBAwUHAv/EADwQAAIBAgIGBggFAwUBAAAAAAABAgMRBAUGEiExQXEiMlFhkdETFEJSgaGx8DNDYnLBI3PxU4KSouEV/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAIDBAUBBv/EACwRAQACAQQBAwQCAgIDAAAAAAABAgMEESExEgVBURMiMpFCcWGBUrEUFTP/2gAMAwEAAhEDEQA/APcQAAAAAAAAAAAAi43GwwEdao7JtLi9r5FWXLXHG9kbWiOZbaFaNdKUWpRe5ramTraLRvXp7E7tpJ6AAAAAAAAAAAAAAAAAAAAAAAAACi6WY71mrqJ9GnePOT3/AH3HC12XzyeMdQy5bbzt8ImUZpPLZXW2DfSjwfkynT6i2G28dfCNLzWV+wuIjioqcHeLV0fQUvF6+UdS1xO8bw3k3oAAAAAAAAAAAAAAAAAAAAAAAj42v6tTnP3YuRDJfwpNvh5M7Ru80nJzbb3ttv43PmJned2F8gWTQ7H+jk6TeyXSj3SW9eB0vT821vpz7rsNudlxOw0gAAAAAAAAAAAAAAAAAAAAAADk6UT1MNUtx1V4tGTWzthlXl/GVAOAyAG7CVnh5wmt8ZRl4EsdpraLfD2J2nd6bGWsk+659PE+7c+j0AAAAAAAAAAAAAAAAAAAA1zqxp2u0r7rtK5GbRHcvN31F627ae7vULOsN63RqRW9xuua2r6FOpp54rVQvG9ZedHzbGwejMY6zSW9tLxEcj1CjHUjFdkUj6isbREN0NhJ6AAAAAAAAAAAAAAAAAAABVNOF+C/3r6HK9Tj8f8AbPn9lboYqph3eE5Rfc2jmVyWr+M7KYmY6d3LdKZ0rKstePvKykv4Zvw+oWrxflbXNMdvrNMmjj16bCtST2uK2beNvI9z6WMsfUw87+z22Py5qrzoyUtVxalfVtZ61/M53jO/jtyo2npZtH9HpUpKpWSVrOMd7vwbOppNFMT53/TRjxbTvK1nVXgAAAAAAAAAAAAAAAAAAAAK7ppS16UZe7P5STXkc71Gu+OJ+JU5o4Uw4zMAdHJM0lls774NpSXd28zRptROG2/t7p0v4ylYuSq45NO6dWk792wtvMW1XHzCU/8A0d/MdJKOEuo/1Zdkeqvib8uux04jmVtstYcDE6T4ir1Wqa7km/FmC+vy264VTmtKH/8AaxP+tPxRT/5Wb/lKH1LfKXgM+xWtGKkql2o2kk7/ABW0txazP5RG++6Vclt9l6R3mtkAAAAAAAAAAAAAAAAAh5phfXaU4cXHZzW1fMpz4/qY5r8o2jeNnnE4uDaexptNdjWw+bmNp2lifIADN/v5AYAAALPojles/TTWxXUO98WdPQafefqT/pfhp/KVuOu0AAAAAAAAAAAAAAAAAAArufaP+uN1KVlPinsU+/uZztVovqT5U7U5Me/MKriMvq4Z2nTku+za8eJyr4clPyhnmswjuL7H4Mr2eFvDtAwAA7uQ5BLGtTqJxpb7bnPl3G7S6Ocn3W6/7W48e/MrrTgqaSSskrJLgjtxERG0NT7PQAAAAAAAAAAAAAAAAAAAABz87ilh62z8uRn1MR9G39IX/GVc0QpQremjNJxcYKztZ7znen1rbyi3SnDETvunYjRKnN3hOUF2NKSL7+m0n8Z2TnDHs35fozRwzTk3UktqvZRT5cfiWYtBjpO88va4oh3UrG5ayAAAAAAAAAAAAAAAAAAAAABws8z+OAvGFp1P+sOff3GHU6yMf215lVfJFeIVSvm1evfWqSaaaa2atuS2HJtqctt97ds83tPuhp2KUUrCZlWwnUqSXc3ePg9hbjz5Mf4ylF5hYcu0rUtlaOr+qN2vit6Ojh9RieMn7XVzfKyUK0cQlKElJPitqOlW0WjevS6J3bST0AAAAAAAAAcfOc8hllo215tXte1l3mPU6uuHjuVd8kVc2lpen1qTX7ZJ/JozV9S+aoRn+YdbB57h8XsU9V9kui/JmvHrMV+p2/tZGSsumtpqTZAAAAACsaRZ/wCgvTovpbpSXs9y7zmavWeP2U/ajJk24hUm795yGd0MhwPr9aMWrxScpcl/lGjS4fq5Iiek8dfKdmrNsC8vqyg917xfvRe777iGfFOK81eXr4zshlSIBJwOPqYB3pya7V7L5riWYs18c71l7W016W/K9JKWLsp2pz7+q+TOxg11L8W4lprlie3cT1jctZAAAAAAAA8+0lpyhiKmtxaku+Nlb77j57WRMZp3Y8n5S5ZmQAOhgM4rYHqybj7sryj8y/FqcmPqeE63tCzZbpPSxNlU/pS7d8H8eB1MOvpfi3Er65Ynt3YyU1dO67jdE79LX0egBw9Js19Qhqxf9Sd7fpjxZh1uo+nXxjuVWW/jG0KO9pwmVg9F10QwXoKTm1tm9n7Vu/k7Xp+Lxp5z3LThrtG/y6Ga5ZDM42lskurJb4vyNGfT1zV2ntO9ItCkZlldXLn010eElfVfx7Th5tPfFO1o/wBstqTXtBKUQABNwGa1sD1Ju3uvpR8HuLsWoyY/xlKt5jpZMv0rhUsqsdR9qvKPmjpYvUazxeNl9c0T279CvHEK8JKS7U00b63raN6zutiYnptJvQAAAAc/NcrhmcbS2SW6S3x/8M+fT1zRtPaFqRZSMzyuplrtNXjwkr6svJnDzae+Kfu/bLak17QSlEAATsuzarl/Ul0fdd3F+XMvw6nJi/GePhKt5r0tmV6RUsbZS/pz7H1XyfmdbBraZOJ4lorliztm1a84zvFeuVpy4X1V+1bF99585qcnnlmWO872QShBsoU/TSjHtko+LR7WvlaI+SO3ptGmqMVFbEkkvgfT1rFYiIbo4bCT1rq0lWTUkpJ709qZG1YtG0nao57o48PepRu47W473Hl2o5Gq0Xj91Ovhmvi25hXDnKQAAA34TF1MI705OL7tz5rcydMlqTvWdnsWmOlmyvSlTtGstV7tZX1fiuB08HqETxk/a+ub5WWnUVVJxaae5qzTOnExMbwvfZ6AAABrrUY104ySlF709zI2rFo2mN4eTG/ao5zozKheVG8o73HfKPLtRyNRoJr92PmPhnvi25hXbWOcpYAAAOtlmf1cD0W/SQ7HvXJ8DXh1mTHxPMLK5Jhym7353MitgCRl89SrTb3KpB+DRPFO16z/AJh7XuHpp9O3AAABR9KcrWDmpwVoTe73Zb3y/wAnD12njHbyr1LLlptO8e7hGFUAAAADo5TnFTLXsetBvbF7vh2GjBqb4p46+E6Xmq7ZbmVPMY3g9vGL60Tt4c9Msb1aq2i3ScXpNVeqqMZSe5RcvAja3jWZ+HktpJ6AAOLnGQ08wvKPQqdq3S5r+TFqNHXLzHEq744spmNwVTAy1akbPg+D5PicbJitjna0MtqzHaOVvAAAAAALzo9nMcbFRk7VUkrP2+9Hc0mqjJXxnuGrHk3jaXcNy0AAVrTTERjTjD2nNS5JXX82Ob6jePCK+6nNMbbKecdmAAAAAA2YfESw0lKEnGS4r72olS9qTvXiXsTMcrlkukUcZaNS0Km79M/JnZ02trf7b8S00yxPEutmP4VT+3P6M15vwt/SdukksSAAACPi8JDGRcZx1l9OXYV5MdbxtaHkxE8Spuc6PTwN5QvOnv8A1R5rsONqNFbHzXmGa+KY5hxDEqAAAAATsB0cNnmIw2xVG12StJfM0U1eWvUpxktHunQ0srx3xg/hJfRl8eo5I7iEvrS+a2lVeotihDkm38zy3qGWetoJzWcavWlXblNuTe9sxWtNp3nmVUzv21ngAAAAAAAAdvAaQTp05U6t5xcJRT9qN00uaNuLWWik0vzC2uWdtpXo7rUAAAADAFfzjRuGKvKlaE99vYl5M5+o0Nb/AHU4lTfFE8wqGJw88NJxnFxkuD+9qOPelqTtbtnmJjiWoi8AAAAAAAAAAAAAAAAAAB6qfVN4AAAAAACHj8vp4+Nqkb9j9qPJlOXDTLG1kbVi3amZvkNTL7tdOn7y3rmuBxtRo74uY5hmvjmrkmRWAAAAAAAAAAAAAAAAAHqp9U3gAAAAAAAGGrgV3ONGY17yo9CW/V9mXkc7UaCtuacSpviieYVLE4eeGk4zi4yXB/e1HIvS1J2txLPMTHEtRF4AAAAAAAAAAAAAAAeqn1TeAAAAAAAAAAEXG4GnjlapFS7HxXJ8CrJhpkja0I2rE9q5jNEmttKaa7J7H4o52T02f4T+1M4fhyq2QYml+W33xtL6GS2jzR/FXOO0eyNLLa8d9Ka/2y8iucGSP4z+kfG3wwsBWf5U/wDjI8+jk/4z+jxn4bIZTiJ7qM/BolGnyz/GXvhb4SKej2Jn+Xb9ziiyuizT7JRisl0tEq0utOEfGRdX07JPcwlGGU6johBdarJ/tSX1L6+m197JRhj3lIWieHXGp4ryLP8A12L/ACl9GrXU0RpPq1Jrnqv+CM+m09pl59GEHEaI1I9SpGXNOL+Rnv6bePxndCcM+zlYrJ8RhetTlbtj0l8jLfTZad1VzS0eyCZ0WD0eqn1TeAAAAAAAAAAAAAAAAAAAAAAAAACDjMro4zrwTfatkvFFGTT48n5QjNIntXcz0W9BGU6U7pJycZb7b3tW852b0/xibUlTbD7wuB2GgAAAAAAAAAAAAAAAAAAAAAAAAAACNmP4VT+3P6Mrzfhb+kbdJJYkAAAAAAAAAAAAAAAAAAAAAAAAAABGzH8Kp/bn9GV5vwt/SNukksSAAAAAAAAAAAAAAAAAAAAAAAAAAA04il6aEo3teMo332uRvXyrNfl5Mbxs/9k="
              width={100}
              height={60}
              alt="image"
               className="ml-20"
            />
          </div>
        </div>
        <NavBar
          menu={menuNavBar}
          className={`${layoutAsidePadding} ${isAsideMobileExpanded ? 'ml-60 lg:ml-0' : ''}`}
        >
          <NavBarItemPlain
            display="flex lg:hidden"
            onClick={() => setIsAsideMobileExpanded(!isAsideMobileExpanded)}
          >
            <BaseIcon path={isAsideMobileExpanded ? mdiBackburger : mdiForwardburger} size="24" />
          </NavBarItemPlain>
          <NavBarItemPlain
            display="hidden lg:flex xl:hidden"
            onClick={() => setIsAsideLgActive(true)}
          >
            <BaseIcon path={mdiMenu} size="24" />
          </NavBarItemPlain>
        </NavBar>
        <AsideMenu
          isAsideMobileExpanded={isAsideMobileExpanded}
          isAsideLgActive={isAsideLgActive}
          menu={menuAside}
          onAsideLgClose={() => setIsAsideLgActive(false)}
        />
        {children}
      </div>
    </div>
  )
}
