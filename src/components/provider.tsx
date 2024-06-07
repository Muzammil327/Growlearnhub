import ThemeSwitcher from './provider/ThemeSwitcher'

type Props = {
  children: React.ReactNode
}

const Provider = ({ children }: Props) => {
  return <ThemeSwitcher>{children}</ThemeSwitcher>
}

export default Provider
