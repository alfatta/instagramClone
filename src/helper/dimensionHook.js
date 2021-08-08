
import { useEffect, useState } from "react"
import { Dimensions } from "react-native"

const screen = Dimensions.get('screen')
const window = Dimensions.get('window')

export const useDimension = () => {
  const [dimension, setDimension] = useState({ window, screen })
  useEffect(() => {
    const dimensionListener = Dimensions.addEventListener('change', setDimension)

    return () => dimensionListener?.remove()
  })

  const isSmall = dimension.window.width < 480
  const isMedium = dimension.window.width >= 480 && dimension.window.width < 720
  const isLarge = dimension.window.width >= 720

  const select = ({ small, medium, large }) => {
    if (isSmall) return small
    if (isMedium) return medium
    return large
  }

  return {
    ...dimension,
    isSmall,
    isMedium,
    isLarge,
    select
  }
}
