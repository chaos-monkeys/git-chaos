import React, { useReducer, createContext, useContext } from 'react'
import ACTION from './actions'

// FIXME: make this dynamic! this is such shit!
type Action = { type: 'OPEN_SIDEBAR' } | { type: 'CLOSE_SIDEBAR' }
type State = { sidebar: { open: boolean } }
type Dispatch = (action: Action) => void
type AppProviderProps = { children: React.ReactNode }

const AppStateContext = createContext<State | undefined>(undefined)
const AppDispatchContext = createContext<Dispatch | undefined>(undefined)


function appReducer(state: State, action: Action) {
  switch (action.type) {
    case ACTION.OPEN_SIDEBAR: {
      return {
        ...state,
        sidebar: {
          ...state.sidebar,
          open: true,
        }
      }
    }

    case ACTION.CLOSE_SIDEBAR: {
      return {
        ...state,
        sidebar: {
          ...state.sidebar,
          open: false,
        }
      }
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function AppProvider({ children }: AppProviderProps) {
  const initialState: State = { sidebar: { open: false } };

  const [state, dispatch] = useReducer(appReducer, initialState)

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  )
}

function useAppState() {
  const context = useContext(AppStateContext)
  if (context === undefined) {
    throw new Error('useCountState must be used within a CountProvider')
  }
  return context
}

function useAppDispatch() {
  const context = useContext(AppDispatchContext)
  if (context === undefined) {
    throw new Error('useCountDispatch must be used within a CountProvider')
  }
  return context
}


export { AppProvider, useAppState, useAppDispatch }
