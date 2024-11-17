export const validateFormElements = (formData) => {

    return Object.keys(formData).every(key => {
        console.log(formData[key])
        return formData[key].length > 0
    })
}