export const loginValidator = (values) => {
    let errors = {};
    if (!values.email) {
        errors.email = '이메일 주소를 입력해 주세요'
    }
    if (!values.password) {
        errors.password = '패스워드를 입력해주세요'
    }
    return errors;
}
