import { useDispatch, useSelector } from 'react-redux'
import { Card, Button, Layout, Emoji, DisplayLabel } from '@/components'
import { useNavigate } from 'react-router-dom'
import { cleanEntries } from '@/store/slice/inputSlice'
import { RootState } from '@/store'
import { useEffect } from 'react'
import { AppRoutes } from '@/types'
import Success from './Success'
import Failure from './Failure'

const Result = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { firstEntry, secondEntry } = useSelector((state: RootState) => state.input)

  const handleGoBack = () => {
    dispatch(cleanEntries())
    navigate(AppRoutes.MAIN)
  }

  useEffect((): void => {
    if (!firstEntry && !secondEntry) {
      navigate(AppRoutes.MAIN)
    }
  }, [])

  const isEqual = firstEntry === secondEntry

  return (
    <Layout>
      <Card>
        <DisplayLabel>
          {isEqual ?
            <Success />
            :
            <Failure />
          }
        </DisplayLabel>
        <Button
          onClick={handleGoBack}
          aria-label="Go back button"
        >
          Go back
        </Button>
      </Card>
    </Layout>
  )
}

export default Result
