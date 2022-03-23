import { String } from "./string";

const InputConfig = {
    // SignUpInput: [
    //     {
    //         PlaceHolder: String.First_Name,
    //         KeyboardType: 'default',
    //         ReturnKeyType: 'next',
    //         AutoCapitalize: 'words'
    //     },
    //     {
    //         PlaceHolder: String.Last_Name,
    //         KeyboardType: 'default',
    //         ReturnKeyType: 'next',
    //         AutoCapitalize: 'words'
    //     },
    //     {
    //         PlaceHolder: String.Email,
    //         KeyboardType: 'email-address',
    //         ReturnKeyType: 'next',
    //         AutoCapitalize: 'none', //words 
    //     },
    //     {
    //         PlaceHolder: String.Password,
    //         SecureTextEntry: true,
    //         KeyboardType: 'default',
    //         ReturnKeyType: 'next',
    //         AutoCapitalize: 'none',
    //         Length: 20
    //     },

    // ],
    SignInInput: [
        {
            PlaceHolder: String.Placeholder_Email,
            KeyboardType: 'email-address',
            ReturnKeyType: 'next',
            AutoCapitalize: 'none', //words 
        },
        {
            PlaceHolder: String.PlaceHolder_Password,
            SecureTextEntry: true,
            KeyboardType: 'default',
            ReturnKeyType: 'done',
            AutoCapitalize: 'none',
            Length: 20
        }
    ]
};
export default InputConfig;
