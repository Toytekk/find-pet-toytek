"use client";

import React from "react";
import "./button.css";

interface ButtonProps {
    children: React.ReactNode;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    variant?: "primary" | "secondary" | "outline" | "favorite" | "favorite-active";
    size?: "sm" | "md" | "lg";
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
}

const Button = ({
    children,
    onClick,
    className = "",
    variant = "primary",
    size = "md",
    disabled = false,
    type = "button",
}: ButtonProps) => {
    const baseStyles = "custom-border-button font-medium transition-all duration-200 flex items-center justify-center";

    const variantStyles = {
        primary: "bg-white text-gray-800 hover:bg-gray-100",
        secondary: "bg-gray-800 text-white hover:bg-gray-700",
        outline: "bg-transparent border border-gray-300 text-gray-800 hover:bg-gray-100",
        favorite: "bg-white text-red-500 hover:bg-red-50",
        "favorite-active": "bg-red-500 text-white hover:bg-red-600",
    };

    const sizeStyles = {
        sm: "text-sm py-1 px-2 rounded-md",
        md: "text-base py-2 px-4 rounded-lg",
        lg: "text-lg py-3 px-6 rounded-lg",
    };

    const disabledStyles = disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer";

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;