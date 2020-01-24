import React from 'react'

type Action = { type: "OPEN_SIDEBAR" } | { type: "CLOSE_SIDEBAR" }
type Dispatch = (action: Action) => void
type State = { sidebar: { open: false, isAnimating: false } }
type AppProviderProps = { children: React.ReactNode }

const AppStateContext = React.createContext<State | undefined>(undefined)
const AppDispatchContext = React.createContext<Dispatch | undefined>(undefined)


function AppReducer(state: State, action: Action) {
  switch (action.type) {
    case "OPEN_SIDEBAR": {
      console.log('OPEN_SIDEBAR');

      return {
        ...state,
        sidebar: {
          ...state.sidebar,
          open: true,
        }
      }
    }

    case "CLOSE_SIDEBAR": {
      console.log('CLOSE_SIDEBAR');

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
  const [state, dispatch] = React.useReducer(AppReducer, { sidebar: { open: false } })
  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  )
}

function useAppState() {
  const context = React.useContext(AppStateContext)
  if (context === undefined) {
    throw new Error('useCountState must be used within a CountProvider')
  }
  return context
}

function useAppDispatch() {
  const context = React.useContext(AppDispatchContext)
  if (context === undefined) {
    throw new Error('useCountDispatch must be used within a CountProvider')
  }
  return context
}



export { AppProvider, useAppState, useAppDispatch }


