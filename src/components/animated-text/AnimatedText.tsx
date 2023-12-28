import { useState, useEffect } from "react"

const AnimatedText = ({ targetText }: { targetText: string }) => {
    const [currentText, setCurrentText] = useState(Array(targetText.length).fill("_").join(""))

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentText(oldText => {
                return oldText.split("").map((char, index) => {
                    return char !== targetText[index] ? randomChar() : char
                }).join("")
            })
        }, 10)

        return () => clearInterval(intervalId)
    }, [targetText])

    function randomChar() {
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz?\\/>?. "
        return characters.charAt(Math.floor(Math.random() * characters.length))
    }

    return (
        <div>
            {currentText}
        </div>
    )
}

export default AnimatedText
