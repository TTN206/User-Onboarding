import * as yup from "yup";

const formSchema = yup.object().shape({

    username: yup
        .string()
        .required( "Username is required" )
        .min( 6, "Username must be at least 6 characters long" ),
    email: yup
        .string()
        .email() // .email is a builted in method
        .required( "Valid email is required" ),
    password: yup
        .string()
        .required(6, "Password must be at least 6 characters long" ),
    terms: yup
        .boolean()
        .oneOf( [ true ], "You must accept Terms and Conditioning to continue")
})

export default formSchema