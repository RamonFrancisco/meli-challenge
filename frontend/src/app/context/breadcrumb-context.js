"use client";

import { createContext, useState, useContext } from "react";

const BreadcrumbContext = createContext({});

export function BreadcrumbProvider({ children }) {
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  return (
    <BreadcrumbContext.Provider value={{ breadcrumbs, setBreadcrumbs }}>
      {children}
    </BreadcrumbContext.Provider>
  );
}

export const useBreadcrumb = () => useContext(BreadcrumbContext);
