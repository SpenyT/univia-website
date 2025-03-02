import React, { createContext, useContext, useState } from 'react';

interface ScrollSection {
    id: string,
    label: string,
    header: string
    isCurrentSection: boolean
}

interface ScrollBarContextValue {
    scrollSections: ScrollSection[],
    setScrollSections: React.Dispatch<React.SetStateAction<ScrollSection[]>>;
}

const ScrollBarContext = createContext<ScrollBarContextValue | undefined>(
    undefined
);


export const ScrollBarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [scrollSections, setScrollSections] = useState<ScrollSection[]>([]);
  
    return (
      <ScrollBarContext.Provider value={{ scrollSections, setScrollSections }}>
        {children}
      </ScrollBarContext.Provider>
    );
};


export const useScrollBarContext = (): ScrollBarContextValue => {
    const context = useContext(ScrollBarContext);
    if (!context) {
      throw new Error(
        'useScrollBarContext must be used within a <ScrollBarProvider>.'
      );
    }
    return context;
};  