import { CustomizationProvider } from '../utils/useHook';

export function HomeRoot({ children }) {

  return (
    <CustomizationProvider>
      {children}
    </CustomizationProvider>
  )
}