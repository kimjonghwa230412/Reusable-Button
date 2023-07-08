import React from "react";
import { styled } from "styled-components";

const ButtonComponent = styled.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  border-radius: 0.3rem;
  padding: 0
    ${(props) =>
      props.size === "sm"
        ? "1.1rem"
        : props.size === "md"
        ? "1.4rem"
        : props.size === "lg"
        ? "1.6rem"
        : "1.1rem"};
  height: ${(props) =>
    props.size === "sm"
      ? "34px"
      : props.size === "md"
      ? "37px"
      : props.size === "lg"
      ? "40px"
      : "34px"};
  font-family: "Inter", sans-serif;
  font-weight: 500;
  border: 1px solid transparent;
  background-color: ${(props) =>
    props.variant === "light"
      ? "#f8f9fa"
      : props.variant === "dark"
      ? "#212529"
      : props.variant === "primary"
      ? "#0d6efd"
      : props.variant === "secondary"
      ? "#6c757d"
      : props.variant === "success"
      ? "#198754"
      : props.variant === "info"
      ? "#0dcaf0"
      : props.variant === "warning"
      ? "#ffc107"
      : props.variant === "danger"
      ? "#dc3545"
      : "#f8f9fa"};
  color: ${(props) =>
    props.color === "light"
      ? "#f8f9fa"
      : props.color === "dark"
      ? "#212529"
      : props.color === "primary"
      ? "#0d6efd"
      : props.color === "secondary"
      ? "#6c757d"
      : props.color === "success"
      ? "#198754"
      : props.color === "info"
      ? "#0dcaf0"
      : props.color === "warning"
      ? "#ffc107"
      : props.color === "danger"
      ? "#dc3545"
      : "#f8f9fa"}   
`;

function ModalButton({ type, variant, id, onClick, size, children, color }) {
  return (
    <div>
      <ButtonComponent
        type={type ? type : "button"}
        variant={variant}
        id={id}
        onClick={onClick}
        size={size}
        color={color}
      >
        {children}
      </ButtonComponent>
    </div>
  );
}

export default ModalButton;
