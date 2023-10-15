import { useState } from "react"


type SwitchType = [boolean, () => void, () => void, () => void]


export const useSwitch = (defaultValue: boolean): SwitchType => {
    const [value, setValue] = useState(defaultValue)

    const onSwitch = () => {
        setValue(!value)
    }

    const onClose = () => {
        setValue(false)
    }

    const onOpen = () => {
        setValue(true)
    }

    return [value, onSwitch, onClose, onOpen]
}