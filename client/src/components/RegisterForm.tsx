import { Button, Input } from "@nextui-org/react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { userRegisterValidator } from "./validators";

const RegisterForm = () => {

    return (
        <Formik
            initialValues={{ nameSurname: "", userName: "", email: "", password: "", confirmPassword: "" }}
            validationSchema={userRegisterValidator}
            onSubmit={async (values) => {
                console.log(values)
            }}
        >
            <Form>
                <div className="border border-black shadow-md shadow-black p-10 rounded-2xl flex flex-col gap-3 items-center justify-center">
                    <div >
                        <span className="text-2xl font-bold"> REGISTER </span>
                    </div>
                    <div className=' flex flex-col gap-10 items-center justify-center'>
                        <div className="h-[50px] w-[300px]">
                            <Field name="nameSurname" as={Input} label="Name Surname" />
                            <ErrorMessage name="nameSurname" component="div" className="text-red-500 text-sm" />
                        </div>

                        <div className="h-[50px] w-[300px]">
                            <Field name="userName" as={Input} label="Username" />
                            <ErrorMessage name="userName" component="div" className="text-red-500 text-sm" />
                        </div>


                        <div className="h-[50px] w-[300px]">
                            <Field name="email" as={Input} type="email" label="Email" />
                            <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                        </div>

                        <div className="h-[50px] w-[300px]">
                            <Field name="password" as={Input} type="password" label="Password" />
                            <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
                        </div>

                        <div className="h-[50px] w-[300px]">
                            <Field name="confirmPassword" as={Input} type="password" label="Confirm Password" />
                            <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-sm" />
                        </div>

                        <div className="h-[50px] w-[300px] flex items-center justify-center">
                            <Button type='submit' className="absolute w-[100px]" color="secondary" variant="shadow">
                                Register
                            </Button>
                        </div>
                    </div>
                </div>

            </Form>
        </Formik>
    )
}


export default RegisterForm