import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Card, Input, Button, Layout } from '@/components'
import { checkEquality } from '@/store/slice/inputSlice'
import { AppRoutes, InputValidation } from '@/types'

const initialInputError = {
  firstEntry: false,
  secondEntry: false,
}

const Main = () => {
  const [firstEntry, setFirstEntry] = useState('')
  const [secondEntry, setSecondEntry] = useState('')
  const [inputError, setInputError] = useState<InputValidation>(initialInputError)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleCheckEquality = () => {
    if (firstEntry && secondEntry) {
      dispatch(checkEquality({firstEntry, secondEntry}))
      navigate(AppRoutes.RESULT)
      return
    }
    setInputError({
      firstEntry: !firstEntry,
      secondEntry: !secondEntry,
    })
  }
  
  return (
    <Layout>
      <Card>
        <Input
          error={inputError.firstEntry}
          autoFocus={true}
          value={firstEntry}
          onChange={(e) => setFirstEntry(e.target.value)}
          placeholder="Your first entry input"
          aria-label="Your first entry"
        />
        <Input
          error={inputError.secondEntry}
          value={secondEntry}
          onChange={(e) => setSecondEntry(e.target.value)}
          placeholder="Your second entry input"
          aria-label="Your second entry"
        />
        <Button
          onClick={handleCheckEquality}
          aria-label="Check equality button"
        >
          Check equality
        </Button>
      </Card>
    </Layout>
  )
}

export default Main
