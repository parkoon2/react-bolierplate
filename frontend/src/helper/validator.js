export const emailValidator = val => {
    let error = ''

    if (!val) error = '이메일 주소를 입력해주세요'

    return error
}