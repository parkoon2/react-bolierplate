import { useEffect, useState } from 'react'
const useForm = (callback, validator) => {

    const [values, setValues] = useState({})
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isTyping, setIsTyping] = useState(false)

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback()
        }
    }, [errors])

    const handleChange = e => {
        const { value, name } = e.target
        setValues(prevValues => ({
            ...prevValues,
            [name]: value
        }))
        setIsSubmitting(false)
        if (!isTyping) setIsTyping(true)
    }

    const handleSubmit = e => {
        e.preventDefault()
        setErrors(validator(values))
        setIsSubmitting(true)
    }


    return {
        values,
        handleChange,
        handleSubmit,
        errors
    }
}

export default useForm