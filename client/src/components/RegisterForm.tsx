import { Button, Input } from "@nextui-org/react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { registerValidator } from "./validators";
import { registerService } from "../services/usersService";
import { useMutation } from "react-query";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import { LoadingButton } from "./Loading";

const RegisterForm = () => {
    const registerMutation = useMutation('register', registerService,
        {
            onSuccess: async (res) => {
                if (res.data.succeeded) {
                    toast.success("Registration successful");
                }
                else {
                    console.log(res)
                    toast.error(res.data.message);
                }

            },
            onError: (error) => {
                const axiosError = error as AxiosError;
                if (axiosError.response && axiosError.response.data) {
                    const errorData = axiosError.response.data;
                    let errorMessage = 'error';
                    if (Array.isArray(errorData)) {
                        errorMessage = errorData.map((errorItem) => {
                            return errorItem.value[0];
                        }).join('\n');
                    }
                    toast.error(errorMessage);
                } else {
                    toast.error("Server Error");
                }
            }
        });

    return (
        <Formik
            initialValues={{ nameSurname: "", username: "", email: "", password: "", passwordConfirm: "" }}
            validationSchema={registerValidator}
            onSubmit={async (values) => {
                await registerMutation.mutateAsync({
                    nameSurname: values.nameSurname,
                    username: values.username,
                    email: values.email,
                    password: values.password,
                    passwordConfirm: values.passwordConfirm
                });
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
                            <Field name="username" as={Input} label="Username" />
                            <ErrorMessage name="username" component="div" className="text-red-500 text-sm" />
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
                            <Field name="passwordConfirm" as={Input} type="password" label="Confirm Password" />
                            <ErrorMessage name="passwordConfirm" component="div" className="text-red-500 text-sm" />
                        </div>

                        <div className="h-[50px] w-[300px] flex items-center justify-center">
                            {
                                registerMutation.isLoading
                                    ?
                                    <LoadingButton color="primary" className={undefined} />
                                    :
                                    <Button type='submit' color="primary" variant="shadow">
                                        Register
                                    </Button>
                            }
                        </div>
                    </div>
                </div>

            </Form>
        </Formik>
    )
}


export default RegisterForm