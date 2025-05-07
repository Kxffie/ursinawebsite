import { useState, useEffect } from 'react'
import {
  HandCoins,
  BadgeDollarSign,
  BadgeEuro,
  BadgeIndianRupee,
  BadgeJapaneseYen,
  BadgePoundSterling,
  BadgeRussianRuble,
  BadgeSwissFranc,
} from 'lucide-react'

const regionToIcon = {
  US: BadgeDollarSign,
  CA: BadgeDollarSign,
  GB: BadgePoundSterling,
  FR: BadgeEuro,
  DE: BadgeEuro,
  ES: BadgeEuro,
  IT: BadgeEuro,
  IN: BadgeIndianRupee,
  JP: BadgeJapaneseYen,
  RU: BadgeRussianRuble,
  CH: BadgeSwissFranc,
}

export default function CurrencyIcon(props) {
  const [Icon, setIcon] = useState(() => HandCoins)

  useEffect(() => {
    const locale = navigator.language || ''
    const region = locale.split('-')[1]?.toUpperCase()
    if (region && regionToIcon[region]) {
      setIcon(() => regionToIcon[region])
    }
  }, [])

  return <Icon {...props} />
}
