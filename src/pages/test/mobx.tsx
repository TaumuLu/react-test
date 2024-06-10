import { observer } from 'mobx-react-lite'
import makeAutoObservable from 'mobx-store-inheritance'
import { useEffect } from 'react'

class BaseStore {
  baseField = 1

  theField = 1

  theMethod() {
    return this.theField
  }

  changeTheMethod() {
    this.theField = 2222
  }
}

class TestStore extends BaseStore {
  constructor() {
    super()
    makeAutoObservable(this)
  }

  theField = 2

  theProperty = 'Ineritance is good'

  changeTheMethod() {
    this.theField = 33333
  }
}

export const testStore = new TestStore()

export const Component = observer(() => {
  useEffect(() => {
    setTimeout(() => {
      testStore.changeTheMethod()
      console.log(66666, testStore)
    }, 1000)
  }, [])

  return <div>mobx x: {testStore.theField}</div>
})
