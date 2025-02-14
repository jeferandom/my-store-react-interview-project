import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const GoogleLoginForm = () => {
    return (
        <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
            <GoogleLogin
                onSuccess={(response) => {
                    console.log("Login Exitoso:", response);
                }}
                onError={() => {
                    console.log("Error en el Login");
                }}
            />
        </GoogleOAuthProvider>
    )
}

export default GoogleLoginForm;
