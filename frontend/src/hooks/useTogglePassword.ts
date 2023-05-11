import React, { useState } from "react";

export const useTogglePassword = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => setShowPassword(!showPassword);

    const handleMouseDown = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return { showPassword, togglePassword, handleMouseDown };
};
