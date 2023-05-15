'use client';

import { useState } from "react";

type Variant = 'LOGIN' | 'REGISTER';

const AuthForm = () => {
    const [variant, setVariant] = useState<Variant>('LOGIN');
    return (
        <div>
            Auth Form 2
        </div>
    );
}
 
export default AuthForm;