import React from "react";
import { createPortal } from "react-dom";

export const portal = (children: React.ReactNode) => {
    let element = document.getElementById("root");

    if (!element) {
        return
    }
    // if element is not found with wrapperId,
    // create and append to body

    return createPortal(children, element);
}