import React from 'react'
import { storesContext } from 'src/stores/context'

export const useStores = () => React.useContext(storesContext)